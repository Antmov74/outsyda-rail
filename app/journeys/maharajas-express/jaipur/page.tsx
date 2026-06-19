import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function JaipurPage() {
  return (
               <main className="bg-black text-white">
      <Header />
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/maharajas-express/jaipur/DSC_6500.JPG"
          alt="Jaipur Rajasthan"
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
              Jaipur
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80">
              Rajasthan&apos;s Pink City brings together royal palaces, grand
              architecture, colourful markets and centuries of Indian heritage.
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
              Royal Rajasthan
            </p>

            <h2 className="mb-8 text-4xl font-light md:text-5xl">
              Palaces, colour and regal Indian heritage
            </h2>

            <p className="mb-6 text-lg leading-8 text-white/70">
              Jaipur is one of the great highlights of Rajasthan, known for its
              palace architecture, vibrant streets and distinctive pink-hued old
              city.
            </p>

            <p className="text-lg leading-8 text-white/70">
              As part of a Maharajas&apos; Express journey, Jaipur delivers a
              polished blend of cultural discovery, royal history and effortless
              luxury rail travel.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
              Experience Style
            </p>

            <ul className="space-y-4 text-white/70">
              <li>Palace visits</li>
              <li>Rajasthan heritage</li>
              <li>Colourful markets</li>
              <li>Guided cultural touring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Jaipur Gallery
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Royal architecture and colour-filled streets
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/journeys/maharajas-express/jaipur/1.JPG"
                alt="Jaipur palace"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/journeys/maharajas-express/jaipur/5.JPG"
                alt="Jaipur architecture"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/journeys/maharajas-express/jaipur/9.JPG"
                alt="Jaipur heritage"
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
            Include Jaipur in your Maharajas&apos; Express journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Speak to Outsyda Rail about Maharajas&apos; Express routes featuring
            Jaipur, suite availability and tailor-made India rail holidays.
          </p>

          <a
            href="/#enquire"
            className="mt-10 inline-block rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>{/* FINANCIAL PROTECTION */}
on /

      <Footer />
    </main>
  );
}