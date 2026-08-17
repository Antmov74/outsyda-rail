"use client";

export default function BritannicEmailLink() {
  function recordConversion() {
    const googleWindow = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    googleWindow.gtag?.("event", "conversion", {
      send_to: "AW-17763379589/6eK1CK2nmeMcEIXTnpZC",
    });
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