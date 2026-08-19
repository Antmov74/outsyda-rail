"use client";

import type { MouseEvent } from "react";

export default function BritannicEmailLink() {
  function recordConversion(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const emailUrl = event.currentTarget.href;
    const googleWindow = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    let emailOpened = false;

    function openEmail() {
      if (emailOpened) return;

      emailOpened = true;
      window.location.href = emailUrl;
    }

    if (!googleWindow.gtag) {
      openEmail();
      return;
    }

    googleWindow.gtag("event", "conversion", {
      send_to: "AW-17763379589/6eK1CK2nmeMcEIXTnpZC",
      event_callback: openEmail,
      event_timeout: 1000,
    });

    window.setTimeout(openEmail, 1200);
  }

  return (
    <a
      href="mailto:ant@outsyda.com?subject=Britannic%20Explorer%20Enquiry"
      onClick={recordConversion}
      className="rounded-full bg-[#ff6b5f] px-8 py-3 font-semibold text-black transition hover:bg-white"
    >
      Email Outsyda
    </a>
  );
}