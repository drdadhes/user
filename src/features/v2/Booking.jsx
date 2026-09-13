import { useCallback, useEffect, useMemo, useState } from "react";
import { BadgeCheck, CalendarDays, ChevronRight, CreditCard, IndianRupee, Leaf, Phone, RefreshCw, Search, ShieldCheck, UserRoundPlus, Users } from "lucide-react";
import SEO from "../../components/SEO";
import TurnstileWidget from "../../components/TurnstileWidget";
import {
  bookingErrorMessage,
  confirmBookingPayment,
  createBookingPatientSearchSession,
  createBookingIntent,
  createBookingPaymentOrder,
  findBookingPatients,
  getBookingAvailability,
  getBookingStatus,
  sendBookingOtp,
  verifyBookingOtp,
} from "../../api/booking.api";
import "./Booking.css";

const initialNewPatient = { name: "", age: "", gender: "", address: "" };
const PAYMENT_SESSION_KEY = "drdadhes_online_booking_payment";
const PAYMENT_CALLBACK_KEY = "drdadhes_online_booking_callback";
let razorpayScriptPromise;

function loadRazorpayCheckout() {
  if (window.Razorpay) return Promise.resolve();
  if (razorpayScriptPromise) return razorpayScriptPromise;
  razorpayScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Secure payment could not be loaded. Check your connection and try again."));
    document.head.appendChild(script);
  });
  return razorpayScriptPromise;
}

function readSession(key) {
  try { return JSON.parse(window.sessionStorage.getItem(key)); } catch { return null; }
}

function formatAppointmentDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function DetailRow({ label, value }) {
  return <div className="booking-detail-row"><span>{label}</span><strong>{value}</strong></div>;
}

export default function Booking() {
  const [availability, setAvailability] = useState(null);
  const [loadingAvailability, setLoadingAvailability] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [patientMode, setPatientMode] = useState("EXISTING");
  const [recordSearch, setRecordSearch] = useState("");
  const [lookup, setLookup] = useState(null);
  const [searchSessionToken, setSearchSessionToken] = useState("");
  const [searchSessionBusy, setSearchSessionBusy] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsBusy, setSuggestionsBusy] = useState(false);
  const [suggestionsError, setSuggestionsError] = useState("");
  const [lastSuggestionSearch, setLastSuggestionSearch] = useState("");
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(0);
  const [phone, setPhone] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [challenge, setChallenge] = useState(null);
  const [otp, setOtp] = useState("");
  const [resendSeconds, setResendSeconds] = useState(0);
  const [verification, setVerification] = useState(null);
  const [patientChoice, setPatientChoice] = useState("");
  const [newPatient, setNewPatient] = useState(initialNewPatient);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [preparedBooking, setPreparedBooking] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const [paymentBusy, setPaymentBusy] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    getBookingAvailability()
      .then((result) => {
        if (!active) return;
        setAvailability(result);
        const first = result.dates?.find((item) => item.available);
        setSelectedDate(first?.date || "");
      })
      .catch((requestError) => active && setError(bookingErrorMessage(requestError)))
      .finally(() => active && setLoadingAvailability(false));
    return () => { active = false; };
  }, []);

  useEffect(() => {
    let active = true;
    const session = readSession(PAYMENT_SESSION_KEY);
    if (!session?.paymentToken) return undefined;

    async function recover() {
      setPaymentBusy(true);
      try {
        const callback = readSession(PAYMENT_CALLBACK_KEY);
        if (callback?.razorpayOrderId && callback?.razorpayPaymentId && callback?.razorpaySignature) {
          const confirmed = await confirmBookingPayment({ paymentToken: session.paymentToken, ...callback });
          if (!active) return;
          setConfirmation(confirmed);
          window.sessionStorage.removeItem(PAYMENT_CALLBACK_KEY);
          window.sessionStorage.removeItem(PAYMENT_SESSION_KEY);
          return;
        }
        const status = await getBookingStatus(session.paymentToken);
        if (!active) return;
        if (status.confirmation) {
          setConfirmation(status.confirmation);
          window.sessionStorage.removeItem(PAYMENT_SESSION_KEY);
        } else {
          setPreparedBooking({ ...status, paymentToken: session.paymentToken });
          if (status.status === "PAID_PENDING_CONFIRMATION") {
            setPaymentMessage("Payment is received. The clinic confirmation is still being completed; no second payment is required.");
          }
        }
      } catch {
        window.sessionStorage.removeItem(PAYMENT_CALLBACK_KEY);
        window.sessionStorage.removeItem(PAYMENT_SESSION_KEY);
      } finally {
        if (active) setPaymentBusy(false);
      }
    }
    recover();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (resendSeconds <= 0) return undefined;
    const timer = window.setInterval(() => setResendSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [resendSeconds]);

  const turnstileSuccess = useCallback((token) => {
    setTurnstileToken(token);
    if (token) setError("");
  }, []);
  const turnstileFailure = useCallback((message) => {
    setTurnstileToken("");
    setError(message);
  }, []);

  const selectedPatient = useMemo(
    () => verification?.patients?.find((patient) => patient.id === patientChoice) || null,
    [patientChoice, verification],
  );

  useEffect(() => {
    if (patientMode !== "EXISTING" || !turnstileToken || searchSessionToken) return undefined;
    let active = true;
    setSearchSessionBusy(true);
    setSuggestionsError("");
    createBookingPatientSearchSession(turnstileToken)
      .then((result) => {
        if (!active) return;
        setSearchSessionToken(result.searchToken);
        setTurnstileToken("");
      })
      .catch((requestError) => {
        if (!active) return;
        setSuggestionsError(bookingErrorMessage(requestError));
        setTurnstileToken("");
        setTurnstileResetKey((value) => value + 1);
      })
      .finally(() => active && setSearchSessionBusy(false));
    return () => { active = false; };
  }, [patientMode, searchSessionToken, turnstileToken]);

  useEffect(() => {
    const search = recordSearch.trim();
    if (patientMode !== "EXISTING" || lookup || !searchSessionToken || search.length < 3) {
      setSuggestions([]);
      setSuggestionsBusy(false);
      setLastSuggestionSearch("");
      return undefined;
    }

    const controller = new AbortController();
    setSuggestionsBusy(true);
    const timer = window.setTimeout(async () => {
      setSuggestionsError("");
      try {
        const result = await findBookingPatients({ search, searchToken: searchSessionToken, signal: controller.signal });
        setSuggestions(result.suggestions || []);
        setHighlightedSuggestion(0);
        setLastSuggestionSearch(search);
      } catch (requestError) {
        if (requestError?.code === "ERR_CANCELED" || requestError?.name === "CanceledError") return;
        setSuggestions([]);
        setSuggestionsError(bookingErrorMessage(requestError));
        if (requestError?.response?.status === 401) {
          setSearchSessionToken("");
          setTurnstileResetKey((value) => value + 1);
        }
      } finally {
        if (!controller.signal.aborted) setSuggestionsBusy(false);
      }
    }, 300);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [lookup, patientMode, recordSearch, searchSessionToken]);

  function choosePatientMode(mode) {
    setPatientMode(mode);
    setLookup(null);
    setSuggestions([]);
    setSuggestionsError("");
    setLastSuggestionSearch("");
    setHighlightedSuggestion(0);
    setChallenge(null);
    setVerification(null);
    setPatientChoice("");
    setOtp("");
    setTermsAccepted(false);
    setError("");
    if (mode === "NEW" && /^\d{10}$/.test(recordSearch)) setPhone(recordSearch);
    if (mode === "EXISTING") setPhone("");
    setTurnstileToken("");
    setTurnstileResetKey((value) => value + 1);
  }

  function selectPatientSuggestion(patient) {
    setLookup(patient);
    setRecordSearch(`${patient.name} · ${patient.maskedPatientId}`);
    setSuggestions([]);
    setSuggestionsError("");
    setLastSuggestionSearch("");
    setError("");
  }

  function handlePatientSearchKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!suggestionsBusy && suggestions[highlightedSuggestion]) {
        selectPatientSuggestion(suggestions[highlightedSuggestion]);
      }
      return;
    }
    if (!suggestions.length || suggestionsBusy) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedSuggestion((value) => Math.min(value + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedSuggestion((value) => Math.max(value - 1, 0));
    } else if (event.key === "Escape") {
      setSuggestions([]);
    }
  }

  async function handleSendOtp(event) {
    event.preventDefault();
    if (!selectedDate) return setError("Choose an available appointment date");
    if (patientMode === "EXISTING" && !lookup?.lookupToken) return setError("Select your patient record first");
    if (patientMode === "NEW" && !/^\d{10}$/.test(phone)) return setError("Enter a valid 10-digit mobile number");
    if (patientMode === "NEW" && !turnstileToken) return setError("Complete the security check");
    setBusy(true);
    setError("");
    try {
      const result = await sendBookingOtp(patientMode === "EXISTING"
        ? { lookupToken: lookup.lookupToken }
        : { phone, turnstileToken });
      setChallenge(result);
      setOtp("");
      setResendSeconds(result.resendAfterSeconds || 60);
    } catch (requestError) {
      setError(bookingErrorMessage(requestError));
    } finally {
      if (patientMode === "NEW") {
        setTurnstileToken("");
        setTurnstileResetKey((value) => value + 1);
      }
      setBusy(false);
    }
  }

  async function handleVerifyOtp(event) {
    event.preventDefault();
    if (!/^\d{4,8}$/.test(otp)) return setError("Enter the OTP sent to your mobile");
    setBusy(true);
    setError("");
    try {
      const result = await verifyBookingOtp({ challengeId: challenge.challengeId, otp });
      setVerification(result);
      setPatientChoice(patientMode === "EXISTING"
        ? (result.patients?.length === 1 ? result.patients[0].id : "")
        : "NEW");
    } catch (requestError) {
      setError(bookingErrorMessage(requestError));
    } finally {
      setBusy(false);
    }
  }

  async function handlePrepareBooking(event) {
    event.preventDefault();
    if (!patientChoice) return setError("Select the patient who is visiting");
    if (patientChoice === "NEW" && newPatient.name.trim().length < 2) {
      return setError("Enter the patient name");
    }
    if (!termsAccepted) return setError("Accept the booking and no-refund notices to continue");
    const patient = patientChoice === "NEW"
      ? {
          type: "NEW",
          name: newPatient.name.trim(),
          ...(newPatient.age !== "" ? { age: Number(newPatient.age) } : {}),
          ...(newPatient.gender ? { gender: newPatient.gender } : {}),
          ...(newPatient.address.trim() ? { address: newPatient.address.trim() } : {}),
        }
      : { type: "EXISTING", patientId: selectedPatient.id };
    setBusy(true);
    setError("");
    try {
      const result = await createBookingIntent({
        verificationToken: verification.verificationToken,
        appointmentDate: selectedDate,
        patient,
        termsAccepted: true,
      });
      setPreparedBooking(result);
      window.sessionStorage.setItem(PAYMENT_SESSION_KEY, JSON.stringify({
        paymentToken: result.paymentToken,
        reference: result.reference,
      }));
    } catch (requestError) {
      setError(bookingErrorMessage(requestError));
    } finally {
      setBusy(false);
    }
  }

  function applyConfirmation(result) {
    setConfirmation(result);
    setPaymentBusy(false);
    setPaymentMessage("");
    setError("");
    window.sessionStorage.removeItem(PAYMENT_CALLBACK_KEY);
    window.sessionStorage.removeItem(PAYMENT_SESSION_KEY);
  }

  async function checkPaymentStatus() {
    if (!preparedBooking?.paymentToken) return;
    setPaymentBusy(true);
    setError("");
    setPaymentMessage("");
    try {
      const callback = readSession(PAYMENT_CALLBACK_KEY);
      if (callback?.razorpayOrderId) {
        const result = await confirmBookingPayment({ paymentToken: preparedBooking.paymentToken, ...callback });
        return applyConfirmation(result);
      }
      const result = await getBookingStatus(preparedBooking.paymentToken);
      if (result.confirmation) return applyConfirmation(result.confirmation);
      setPreparedBooking((value) => ({ ...value, ...result }));
      setPaymentMessage(result.status === "PAID_PENDING_CONFIRMATION"
        ? "Payment is received. Confirmation is being completed; do not pay again."
        : "No completed payment was found yet. If money was debited, wait a moment and check again.");
    } catch (requestError) {
      setError(bookingErrorMessage(requestError));
    } finally {
      setPaymentBusy(false);
    }
  }

  async function handlePayment() {
    if (!preparedBooking?.paymentToken) return;
    setPaymentBusy(true);
    setError("");
    setPaymentMessage("");
    try {
      const order = await createBookingPaymentOrder(preparedBooking.paymentToken);
      if (order.kind === "CONFIRMED" && order.confirmation) return applyConfirmation(order.confirmation);
      await loadRazorpayCheckout();

      const checkout = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Dr Dadhe's Ayur & Nature Cure",
        description: order.description,
        order_id: order.orderId,
        prefill: { name: order.patientName, contact: phone || undefined },
        notes: { booking_reference: order.reference },
        theme: { color: "#c99b45" },
        modal: {
          ondismiss: () => {
            setPaymentBusy(false);
            setPaymentMessage("Payment window closed. Your booking is not confirmed unless payment was completed.");
          },
        },
        handler: async (response) => {
          const callback = {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          };
          window.sessionStorage.setItem(PAYMENT_CALLBACK_KEY, JSON.stringify(callback));
          setPaymentMessage("Payment received. Verifying it securely with the clinic…");
          try {
            const result = await confirmBookingPayment({ paymentToken: preparedBooking.paymentToken, ...callback });
            applyConfirmation(result);
          } catch {
            setPaymentMessage("Payment response received, but confirmation is delayed. Do not pay again; use Check payment status.");
          } finally {
            setPaymentBusy(false);
          }
        },
      });
      checkout.on("payment.failed", (response) => {
        setPaymentBusy(false);
        setError(response?.error?.description || "Payment was not completed. You can safely try again.");
      });
      checkout.open();
    } catch (requestError) {
      setPaymentBusy(false);
      setError(bookingErrorMessage(requestError));
    }
  }

  return (
    <>
      <SEO
        title="Book OP Appointment | Dr Dadhe's Ayur & Nature Cure"
        description="Book your visit to Dr Dadhe's Ayur & Nature Cure through secure patient verification and online OP registration."
        path="/book-appointment"
      />
      <main className="booking-page">
        <div className="booking-aura booking-aura--one" />
        <div className="booking-aura booking-aura--two" />
        <section className="booking-shell">
          <div className="booking-layout">
            <header className="booking-hero">
              <span className="booking-kicker">Online OP Booking</span>
              <h1>Your journey to better health starts here.</h1>
              <p>Book your visit to Dr Dadhe&apos;s Ayur &amp; Nature Cure in a few simple steps. Find your patient record or register as a new patient, verify your mobile number, and confirm your booking securely.</p>
              <p className="booking-brand-line">Traditional healing. Personal attention. Care designed around you.</p>
              <div className="booking-assurances">
                <span><ShieldCheck size={16} /> Secure patient verification</span>
                <span><UserRoundPlus size={16} /> Simple online registration</span>
                <span><Leaf size={16} /> Personalized Ayurvedic care</span>
              </div>
            </header>

            <div className="booking-workspace">
              <aside className="booking-summary">
              <p className="booking-card-label">Booking overview</p>
              <DetailRow label="Clinic" value={availability?.branch?.name || "Dr Dadhe's"} />
              <DetailRow label="Visit date" value={(confirmation?.appointmentDate || preparedBooking?.appointmentDate || selectedDate) ? formatAppointmentDate(confirmation?.appointmentDate || preparedBooking?.appointmentDate || selectedDate) : "Not selected"} />
              <DetailRow label="OP fee" value={(confirmation?.paidAmount ?? preparedBooking?.registrationFee ?? availability?.registrationFee) !== undefined ? `₹${Number(confirmation?.paidAmount ?? preparedBooking?.registrationFee ?? availability?.registrationFee).toFixed(2)}` : "—"} />
              {verification && !preparedBooking && !confirmation && <div className="booking-summary__notice">
                <CalendarDays size={18} />
                <p>{availability?.bookingNotice || "This booking does not reserve a specific consultation time."}</p>
              </div>}
              <div className="booking-summary__refund">
                {availability?.noCancellationNotice || "Online booking payments are non-cancellable and non-refundable."}
              </div>
              </aside>

              <section className="booking-card" aria-live="polite">
              {loadingAvailability && <div className="booking-state"><span className="booking-spinner" /><p>Checking available dates…</p></div>}

              {!loadingAvailability && !confirmation && !preparedBooking && (!availability || !availability.isEnabled || !availability.onlinePaymentsEnabled) && (
                <div className="booking-state booking-state--paused">
                  <CalendarDays size={38} />
                  <h2>{availability?.isEnabled && !availability?.onlinePaymentsEnabled ? "Online payments are temporarily paused" : "Online booking is currently paused"}</h2>
                  <p>{availability?.isEnabled && !availability?.onlinePaymentsEnabled ? "Please try again later or contact the clinic for assistance." : availability?.emergencyClosureMessage || error || "Please contact the clinic for assistance."}</p>
                </div>
              )}

              {!loadingAvailability && confirmation && (
                <div className="booking-state booking-state--success">
                  <span className="booking-success-icon"><BadgeCheck size={34} /></span>
                  <p className="booking-card-label">Booking confirmed</p>
                  <h2>{confirmation.patientName}</h2>
                  <p>Your clinic visit is confirmed. Payment is verified and your OP has been created successfully.</p>
                  <div className="booking-confirmation-grid">
                    <DetailRow label="Patient ID" value={confirmation.patientId} />
                    <DetailRow label="OP number" value={`#${confirmation.opNumber}`} />
                    <DetailRow label="Visit date" value={formatAppointmentDate(confirmation.appointmentDate)} />
                    <DetailRow label="Amount paid" value={`₹${Number(confirmation.paidAmount).toFixed(2)}`} />
                  </div>
                  <div className="booking-reference">Reference <strong>{confirmation.reference}</strong></div>
                  <p className="booking-arrival-note">Please keep this confirmation and report at reception on the visit date. It does not reserve a specific consultation time.</p>
                </div>
              )}

              {!loadingAvailability && !confirmation && preparedBooking && (
                <div className="booking-payment-review">
                  <div className="booking-step-heading"><span>05</span><div><p>Review and pay securely</p><h2>Confirm your clinic booking</h2></div></div>
                  <div className="booking-payment-amount"><span>Amount payable</span><strong>₹{Number(preparedBooking.registrationFee).toFixed(2)}</strong></div>
                  <div className="booking-payment-details">
                    <DetailRow label="Patient" value={preparedBooking.patientName} />
                    <DetailRow label="Visit date" value={formatAppointmentDate(preparedBooking.appointmentDate)} />
                    <DetailRow label="Reference" value={preparedBooking.reference} />
                  </div>
                  <p className="booking-payment-security"><ShieldCheck size={18} /> Your payment is created and securely verified by the clinic server. The displayed OP fee cannot be changed by the website.</p>
                  {paymentMessage && <p className="booking-payment-message">{paymentMessage}</p>}
                  {availability && !availability.onlinePaymentsEnabled && <p className="booking-error">Online payments are temporarily paused. Do not attempt a new payment until the clinic enables them.</p>}
                  {error && <p className="booking-error">{error}</p>}
                  <div className="booking-payment-actions">
                    <button type="button" className="booking-primary" disabled={paymentBusy || preparedBooking.status === "PAID_PENDING_CONFIRMATION" || availability?.onlinePaymentsEnabled === false} onClick={handlePayment}>
                      {paymentBusy ? "Checking payment…" : <><CreditCard size={18} /> Pay ₹{Number(preparedBooking.registrationFee).toFixed(2)}</>}
                    </button>
                    <button type="button" className="booking-secondary" disabled={paymentBusy} onClick={checkPaymentStatus}><RefreshCw size={16} /> Check payment status</button>
                  </div>
                  <p className="booking-no-refund">By paying, you confirm the accepted no-cancellation/no-refund notice. Do not make a second payment if your bank shows a debit; check the status first.</p>
                </div>
              )}

              {!loadingAvailability && availability?.isEnabled && availability?.onlinePaymentsEnabled && !confirmation && !preparedBooking && !challenge && (
                <form onSubmit={handleSendOtp} className="booking-form booking-form--details">
                  <div className="booking-details-grid">
                    <section className="booking-details-pane booking-details-pane--date">
                      <div className="booking-step-heading"><span>01</span><div><p>Choose your visit date</p><h2>Select an available day</h2></div></div>
                      <div className="booking-date-grid">
                        {availability.dates.map((item) => (
                          <button
                            type="button"
                            key={item.date}
                            disabled={!item.available}
                            className={`booking-date ${selectedDate === item.date ? "is-selected" : ""}`}
                            onClick={() => { setSelectedDate(item.date); setError(""); }}
                          >
                            <span>{formatAppointmentDate(item.date)}</span>
                            <small>{item.available ? "Available" : item.message}</small>
                          </button>
                        ))}
                      </div>
                    </section>
                    <section className="booking-details-pane booking-details-pane--patient">
                      <div className="booking-step-heading"><span>02</span><div><p>Patient details</p><h2>Let&apos;s find the right patient record</h2></div></div>
                  <div className="booking-mode-grid" role="radiogroup" aria-label="Patient type">
                    <button type="button" role="radio" aria-checked={patientMode === "EXISTING"} className={`booking-mode ${patientMode === "EXISTING" ? "is-selected" : ""}`} onClick={() => choosePatientMode("EXISTING")}><Search size={20} /><span><strong>I have visited before</strong><small>Find and securely verify your existing clinic record</small></span></button>
                    <button type="button" role="radio" aria-checked={patientMode === "NEW"} className={`booking-mode ${patientMode === "NEW" ? "is-selected" : ""}`} onClick={() => choosePatientMode("NEW")}><UserRoundPlus size={20} /><span><strong>This is my first visit</strong><small>Create your patient record and book your first consultation</small></span></button>
                  </div>

                  {patientMode === "EXISTING" && !lookup && <>
                    {!searchSessionToken && <div className="booking-search-security">
                      <p><ShieldCheck size={17} /> Complete this security check once to search clinic records.</p>
                      <TurnstileWidget onToken={turnstileSuccess} onError={turnstileFailure} resetKey={turnstileResetKey} />
                      {searchSessionBusy && <small><span className="booking-inline-spinner" /> Preparing secure search…</small>}
                    </div>}
                    <div className="booking-field booking-patient-search">
                      <span>Search by name, registered mobile number or Patient ID</span>
                      <div className="booking-input-icon">
                        <Search size={18} />
                        <input
                          value={recordSearch}
                          onChange={(event) => {
                            setRecordSearch(event.target.value.slice(0, 100));
                            setSuggestions([]);
                            setSuggestionsError("");
                            setLastSuggestionSearch("");
                            setHighlightedSuggestion(0);
                          }}
                          onKeyDown={handlePatientSearchKeyDown}
                          autoComplete="off"
                          placeholder="Start typing at least 3 characters…"
                          aria-autocomplete="list"
                          aria-expanded={recordSearch.trim().length >= 3 && !!searchSessionToken}
                        />
                        {suggestionsBusy && <span className="booking-inline-spinner" aria-label="Searching" />}
                      </div>
                      {searchSessionToken && recordSearch.trim().length >= 3 && <div className="booking-suggestions" role="listbox">
                        {suggestionsBusy && <p className="booking-suggestion-state">Searching clinic records…</p>}
                        {!suggestionsBusy && suggestions.map((patient, index) => (
                          <button
                            type="button"
                            role="option"
                            aria-selected={highlightedSuggestion === index}
                            className={`booking-suggestion ${highlightedSuggestion === index ? "is-highlighted" : ""}`}
                            key={`${patient.maskedPatientId}-${index}`}
                            onMouseEnter={() => setHighlightedSuggestion(index)}
                            onClick={() => selectPatientSuggestion(patient)}
                          >
                            <span><strong>{patient.name}</strong><small>Patient ID {patient.maskedPatientId}</small></span>
                            <small>{patient.maskedPhone}</small>
                          </button>
                        ))}
                        {!suggestionsBusy && suggestions.length === 0 && !suggestionsError && lastSuggestionSearch === recordSearch.trim() && <div className="booking-suggestion-state"><strong>No matching digital record found</strong><p>Check the spelling or mobile number. Our digital records were introduced recently.</p><button type="button" onClick={() => choosePatientMode("NEW")}>Continue as a new patient</button></div>}
                      </div>}
                    </div>
                    <p className="booking-help">Start typing your name, registered mobile number or Patient ID. Details stay masked until OTP verification.</p>
                    {suggestionsError && <p className="booking-error">{suggestionsError}</p>}
                  </>}

                  {patientMode === "EXISTING" && lookup && <div className="booking-lookup-result is-found"><BadgeCheck size={21} /><div><strong>Patient record selected</strong><p>{lookup.name} · Patient ID {lookup.maskedPatientId}</p><small>OTP will be sent to {lookup.maskedPhone}</small><button type="button" onClick={() => { setLookup(null); setRecordSearch(""); setSuggestions([]); }}>Choose a different record</button></div></div>}

                  {patientMode === "NEW" && <>
                    <label className="booking-field">
                      <span>Mobile number</span>
                      <div className="booking-input-icon"><Phone size={18} /><input value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))} inputMode="numeric" autoComplete="tel" placeholder="9876543210" /></div>
                    </label>
                    <p className="booking-help">We will securely verify this number before creating your patient record.</p>
                    <TurnstileWidget onToken={turnstileSuccess} onError={turnstileFailure} resetKey={turnstileResetKey} />
                  </>}
                  {error && <p className="booking-error">{error}</p>}
                      {(patientMode === "NEW" || lookup) && <button className="booking-primary" disabled={busy || !selectedDate || (patientMode === "EXISTING" ? !lookup?.lookupToken : (phone.length !== 10 || !turnstileToken))}>{busy ? "Sending OTP…" : <>Send secure OTP <ChevronRight size={18} /></>}</button>}
                    </section>
                  </div>
                </form>
              )}

              {!loadingAvailability && availability?.isEnabled && availability?.onlinePaymentsEnabled && !confirmation && !preparedBooking && challenge && !verification && (
                <form onSubmit={handleVerifyOtp} className="booking-form">
                  <div className="booking-step-heading"><span>03</span><div><p>Securely verify your mobile</p><h2>Enter the OTP sent to {challenge.maskedPhone}</h2></div></div>
                  <label className="booking-field"><span>One-time password</span><input className="booking-otp" value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 8))} inputMode="numeric" autoComplete="one-time-code" placeholder="• • • • • •" autoFocus /></label>
                  {error && <p className="booking-error">{error}</p>}
                  <button className="booking-primary" disabled={busy || otp.length < 4}>{busy ? "Verifying…" : <>Verify mobile <ChevronRight size={18} /></>}</button>
                  <div className="booking-resend">
                    {patientMode === "NEW" && <TurnstileWidget onToken={turnstileSuccess} onError={turnstileFailure} resetKey={turnstileResetKey} />}
                    <button type="button" onClick={handleSendOtp} disabled={busy || resendSeconds > 0 || (patientMode === "NEW" && !turnstileToken)}>{resendSeconds > 0 ? `Resend available in ${resendSeconds}s` : "Resend OTP"}</button>
                  </div>
                </form>
              )}

              {!loadingAvailability && availability?.isEnabled && availability?.onlinePaymentsEnabled && !confirmation && !preparedBooking && verification && (
                <form onSubmit={handlePrepareBooking} className="booking-form booking-form--confirmation">
                  <div className="booking-confirmation-layout">
                    <section className="booking-confirmation-pane">
                      <div className="booking-step-heading"><span>04</span><div><p>Verified patient details</p><h2>Who is visiting the clinic?</h2></div></div>
                      <p className="booking-record-notice">{verification.recordNotice}</p>
                      <div className="booking-patient-list">
                        {verification.patients.map((patient) => (
                          <label className={`booking-patient ${patientChoice === patient.id ? "is-selected" : ""}`} key={patient.id}>
                            <input type="radio" name="patient" value={patient.id} checked={patientChoice === patient.id} onChange={() => setPatientChoice(patient.id)} />
                            <Users size={19} /><span><strong>{patient.name}</strong><small>{patient.id}{patient.age !== null ? ` · ${patient.age} years` : ""}</small></span>
                          </label>
                        ))}
                        <label className={`booking-patient ${patientChoice === "NEW" ? "is-selected" : ""}`}>
                          <input type="radio" name="patient" value="NEW" checked={patientChoice === "NEW"} onChange={() => setPatientChoice("NEW")} />
                          <Users size={19} /><span><strong>New patient / family member</strong><small>Create the patient record after successful payment</small></span>
                        </label>
                      </div>
                      {selectedPatient && <div className="booking-autofill"><span>Verified record</span><strong>{selectedPatient.name}</strong><p>{selectedPatient.id}{selectedPatient.age !== null ? ` · ${selectedPatient.age} years` : ""}{selectedPatient.gender ? ` · ${selectedPatient.gender.toLowerCase()}` : ""}</p>{selectedPatient.address && <small>{selectedPatient.address}</small>}</div>}
                    </section>

                    <section className="booking-confirmation-pane booking-confirmation-pane--action">
                      {patientChoice === "NEW" && (
                        <div className="booking-new-patient">
                          <label className="booking-field"><span>Patient name *</span><input value={newPatient.name} onChange={(event) => setNewPatient((value) => ({ ...value, name: event.target.value }))} autoComplete="name" maxLength={120} /></label>
                          <div className="booking-field-row">
                            <label className="booking-field"><span>Age</span><input value={newPatient.age} onChange={(event) => setNewPatient((value) => ({ ...value, age: event.target.value.replace(/\D/g, "").slice(0, 3) }))} inputMode="numeric" /></label>
                            <label className="booking-field"><span>Gender</span><select value={newPatient.gender} onChange={(event) => setNewPatient((value) => ({ ...value, gender: event.target.value }))}><option value="">Select</option><option value="MALE">Male</option><option value="FEMALE">Female</option><option value="OTHER">Other</option></select></label>
                          </div>
                          <label className="booking-field"><span>Address</span><textarea value={newPatient.address} onChange={(event) => setNewPatient((value) => ({ ...value, address: event.target.value }))} maxLength={500} rows={3} /></label>
                        </div>
                      )}
                      <label className="booking-consent"><input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} /><span>I understand that no specific consultation time is reserved and that the online OP payment is non-cancellable and non-refundable.</span></label>
                      {error && <p className="booking-error">{error}</p>}
                      <button className="booking-primary" disabled={busy || !patientChoice || !termsAccepted}>{busy ? "Saving details…" : <><IndianRupee size={18} /> Continue to payment review</>}</button>
                    </section>
                  </div>
                </form>
              )}
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
