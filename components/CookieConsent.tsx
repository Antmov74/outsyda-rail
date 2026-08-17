"use client";

import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    gtag?: (
      command: "consent",
      action: "update",
      settings: {
        ad_storage: "granted" | "denied";
        ad_user_data: "granted" | "denied";
        ad_personalization: "granted" | "denied";
        analytics_storage: "granted" | "denied";
      }
    ) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem(
      "outsyda-rail-cookie-consent"
    ) as ConsentChoice | null;

    if (!savedChoice) {
      setVisible(true);
      return;
    }

    updateConsent(savedChoice);
  }, []);

  function updateConsent(choice: ConsentChoice) {
    const status = choice === "accepted" ? "granted" : "denied";

    window.gtag?.("consent", "update", {
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
    });
  }

  function saveChoice(choice: ConsentChoice) {
    localStorage.setItem("outsyda-rail-cookie-consent", choice);
    updateConsent(choice);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-3xl border border-white/15 bg-black/95 p-6 text-white shadow-2xl backdrop-blur md:p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
        Your privacy
      </p>

      <p className="mt-4 leading-7 text-white/75">
        We use cookies to understand how visitors use Outsyda Rail and to
        measure the effectiveness of our advertising. You can accept or reject
        optional tracking.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => saveChoice("accepted")}
          className="rounded-full bg-[#ff6b5f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
        >
          Accept
        </button>

        <button
          type="button"
          onClick={() => saveChoice("rejected")}
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
        >
          Reject
        </button>
      </div>
    </div>
  );
}