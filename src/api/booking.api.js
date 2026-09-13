import axios from "axios";

const configuredUrl = import.meta.env.VITE_CLINIC_API_URL?.replace(/\/$/, "");
const baseURL = configuredUrl || (import.meta.env.DEV ? "http://localhost:5050/api" : "");

const bookingClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

function ensureConfigured() {
  if (!baseURL) throw new Error("Online booking is not configured for this website");
}

function dataOf(response) {
  return response.data?.data;
}

export function bookingErrorMessage(error) {
  return error?.response?.data?.message || error?.message || "Something went wrong. Please try again.";
}

export async function getBookingAvailability() {
  ensureConfigured();
  return dataOf(await bookingClient.get("/public/online-booking/availability"));
}

export async function sendBookingOtp(payload) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/otp/send", payload));
}

export async function createBookingPatientSearchSession(turnstileToken) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/patients/search-session", { turnstileToken }));
}

export async function findBookingPatients({ search, searchToken, signal }) {
  ensureConfigured();
  return dataOf(await bookingClient.post(
    "/public/online-booking/patients/suggestions",
    { search, searchToken },
    { signal },
  ));
}

export async function verifyBookingOtp(payload) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/otp/verify", payload));
}

export async function createBookingIntent(payload) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/intents", payload));
}

export async function createBookingPaymentOrder(paymentToken) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/payment/order", { paymentToken }));
}

export async function confirmBookingPayment(payload) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/payment/confirm", payload, { timeout: 30000 }));
}

export async function getBookingStatus(paymentToken) {
  ensureConfigured();
  return dataOf(await bookingClient.post("/public/online-booking/status", { paymentToken }, { timeout: 30000 }));
}
