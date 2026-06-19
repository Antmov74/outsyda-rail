import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
export default function AgraPage() {
  return (
    <main className="bg-black text-white">
      <Header />
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/maharajas-express/agra/8.JPG"
          alt="Agra and the Taj Mahal"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
          <div className="max-w-3xl">
            <a
              href="/journeys/maharajas-express"
              className="mb-8 inline-block text-sm uppercase tracking-[0.25em] text-[#ff6b5f]"
            >
              ← Back to Maharajas&apos; Express
            </a>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Destination Highlight
            </p>

            <h1 className="text-5xl font-light tracking-tight md:text-7xl">
              Agra
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80">
              Home to the Taj Mahal, Agra is one of the most memorable moments
              of a Maharajas&apos; Express journey through India.
            </p>

            <a
              href="/#enquire"
              className="mt-10 inline-block rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              The Taj Mahal
            </p>

            <h2 className="mb-8 text-4xl font-light md:text-5xl">
              Mughal grandeur, experienced in comfort
            </h2>

            <p className="mb-6 text-lg leading-8 text-white/70">
              Agra brings together romance, architecture and history, with the
              Taj Mahal standing as one of the world&apos;s most recognisable
              monuments.
            </p>

            <p className="text-lg leading-8 text-white/70">
              On a Maharajas&apos; Express itinerary, the experience is designed to
              feel seamless: elegant onboard service, curated touring and time
              to absorb one of India&apos;s greatest icons.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
              Experience Style
            </p>

            <ul className="space-y-4 text-white/70">
              <li>Taj Mahal visit</li>
              <li>Mughal architecture</li>
              <li>Guided cultural touring</li>
              <li>Luxury rail comfort</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Agra Gallery
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Palaces, monuments and timeless India
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/journeys/maharajas-express/agra/2.jpg"
                alt="Agra experience"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/journeys/maharajas-express/agra/3.jpg"
                alt="Agra architecture"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/journeys/maharajas-express/agra/5.jpg"
                alt="Agra monument"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Include Agra in your Maharajas&apos; Express journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Speak to Outsyda Rail about current Maharajas&apos; Express routes,
            departures, suite availability and India rail holiday options.
          </p>

          <a
            href="/#enquire"
            className="mt-10 inline-block rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
           </section>

      <FinancialProtection />

      <Footer />
    </main>
  );
}