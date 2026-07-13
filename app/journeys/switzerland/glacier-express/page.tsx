import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function GlacierExpressPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
         src="/journeys/switzerland/images/glacier-express-hero.jpg"
          alt="Glacier Express"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Switzerland
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Glacier Express
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              Often described as the world&apos;s slowest express train, the
              Glacier Express links Zermatt and St Moritz through some of the
              most spectacular mountain scenery in the Swiss Alps.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Tailor-Made Journey
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Zermatt • Andermatt • Chur • St Moritz
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            The Journey
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Switzerland&apos;s most famous rail experience
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            Travelling across 291 bridges and through 91 tunnels, the Glacier
            Express crosses the heart of the Swiss Alps between Zermatt and St
            Moritz. Panoramic carriages provide uninterrupted views of mountains,
            valleys, forests and traditional alpine villages.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            What makes the Glacier Express special?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Panoramic Views</h3>
              <p className="text-white/70">
                Floor-to-ceiling windows reveal Switzerland&apos;s most dramatic
                alpine landscapes throughout the journey.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Alpine Resorts</h3>
              <p className="text-white/70">
                Connect two of Switzerland&apos;s most iconic mountain
                destinations: Zermatt and St Moritz.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Tailor-Made Travel</h3>
              <p className="text-white/70">
                Combine the Glacier Express with luxury hotels, lake cruises,
                mountain railways and Swiss city stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Route Map
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Glacier Express Route
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Follow the route from Zermatt through Brig, Andermatt, Disentis,
              Chur and St. Moritz, crossing some of the most dramatic alpine
              scenery in Switzerland.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white p-4 shadow-2xl">
            <img
              src="/journeys/switzerland/maps/glacier-express-map.png"
              alt="Glacier Express route map"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Ready to experience the Glacier Express?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about tailor-made Glacier Express journeys,
            Swiss rail passes, luxury hotels and alpine experiences.
          </p>

          <a
            href="mailto:ant@outsyda.com"
            className="inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white"
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