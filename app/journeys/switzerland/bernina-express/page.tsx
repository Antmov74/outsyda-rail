import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
export default function BerninaExpressPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
        src="/journeys/switzerland/images/bernina-express-hero.jpg"
          alt="Bernina Express"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Switzerland
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Bernina Express
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              A spectacular alpine rail journey crossing from Switzerland into
              Italy, travelling through glaciers, viaducts, mountain passes and
              UNESCO-listed scenery.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Scenic Rail Journey
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Chur • St Moritz • Tirano
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
            From glaciers to palm-lined Italy
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            The Bernina Express is one of Switzerland&apos;s great scenic rail
            experiences, climbing through high alpine landscapes before
            descending towards Tirano in northern Italy. It is a journey of
            dramatic contrasts, from snow-covered peaks to Mediterranean warmth.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Why travel on the Bernina Express?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">UNESCO Scenery</h3>
              <p className="text-white/70">
                Travel through one of the most celebrated rail landscapes in
                Europe, with viaducts, tunnels and glacier views.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Swiss to Italian Contrast</h3>
              <p className="text-white/70">
                Begin among alpine peaks and descend towards the Italian border,
                with changing scenery throughout the journey.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Tailor-Made Extensions</h3>
              <p className="text-white/70">
                Combine the route with St Moritz, Lake Como, Zurich, Lucerne or
                other Swiss and Italian highlights.
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
              Bernina Express Route
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Follow the route from Chur through the Swiss Alps to Tirano,
              crossing dramatic viaducts, high mountain passes and UNESCO-listed
              railway landscapes.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white p-4 shadow-2xl">
            <img
              src="/journeys/switzerland/maps/bernina-express-map.png"
              alt="Map showing the Bernina Express route through Switzerland and northern Italy"
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
            Ready to experience the Bernina Express?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about Bernina Express journeys, Swiss rail
            passes, alpine hotels and tailor-made extensions into Italy.
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
