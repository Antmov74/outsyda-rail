"use client";

import type { MouseEvent } from "react";

type GoogleWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export default function BritannicEmailLink() {
  function recordConversion(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const emailUrl = event.currentTarget.href;
    const googleWindow = window as GoogleWindow;
    const dataLayer = (googleWindow.dataLayer ??= []);

    let emailOpened = false;

    function openEmail() {
      if (emailOpened) return;

      emailOpened = true;
      window.location.href = emailUrl;
    }

    function sendToDataLayer() {
      dataLayer.push(arguments);
    }

    const sendToGoogle = googleWindow.gtag ?? sendToDataLayer;

    sendToGoogle("event", "conversion", {
      send_to: "AW-17763379589/6eK1CK2nmeMcEIXTnpZC",
      event_callback: openEmail,
      event_timeout: 1500,
    });

    window.setTimeout(openEmail, 1700);
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