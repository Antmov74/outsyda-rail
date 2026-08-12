export default function Header() {
  return (
<header className="absolute left-0 top-0 z-[80] w-full px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <img
            src="/outsyda-badge.png"
            alt="Outsyda Rail"
            className="h-20 w-20 rounded-full bg-white p-1"
          />
        </a>

        <a
          href="/#enquire"
          className="hidden rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#ff6b5f] hover:text-[#ff6b5f] md:inline-block"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}