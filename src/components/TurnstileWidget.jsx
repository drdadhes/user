import { useEffect, useRef } from "react";

const SCRIPT_ID = "cloudflare-turnstile-script";
let loader;

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID);
    const script = existing || document.createElement("script");
    if (!existing) {
      script.id = SCRIPT_ID;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => resolve(window.turnstile), { once: true });
    script.addEventListener("error", () => reject(new Error("Security check could not load")), { once: true });
  });
  return loader;
}

export default function TurnstileWidget({ onToken, onError, resetKey }) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY
    || (import.meta.env.DEV ? "1x00000000000000000000AA" : "");

  useEffect(() => {
    let disposed = false;
    if (!siteKey) {
      onError?.("Online booking security is not configured");
      return undefined;
    }
    loadTurnstile()
      .then((turnstile) => {
        if (disposed || !containerRef.current) return;
        widgetRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          action: "online_booking_otp",
          theme: "light",
          size: "flexible",
          callback: (token) => onToken?.(token),
          "expired-callback": () => onToken?.(""),
          "error-callback": () => onError?.("Security check failed. Please refresh it."),
        });
      })
      .catch(() => onError?.("Security check could not load. Please check your connection."));

    return () => {
      disposed = true;
      if (widgetRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetRef.current);
        widgetRef.current = null;
      }
    };
  }, [onError, onToken, resetKey, siteKey]);

  return <div className="booking-turnstile" ref={containerRef} />;
}
