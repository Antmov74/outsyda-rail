import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function GrandTrainTourPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
        src="/journeys/switzerland/images/grand-train-tour-hero.jpg"
          alt="Grand Train Tour of Switzerland"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Switzerland
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Grand Train Tour of Switzerland
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              The ultimate Swiss rail adventure, combining the country's most
              iconic panoramic trains, mountain regions, lakes and cities into
              one unforgettable journey.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Multi-Route Adventure
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Glacier Express • Bernina Express • GoldenPass • Lucerne
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
            Switzerland's ultimate rail itinerary
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            The Grand Train Tour connects many of Switzerland&apos;s most famous
            rail experiences into one seamless itinerary. Travellers experience
            panoramic trains, alpine resorts, lake cruises, mountain scenery and
            elegant Swiss hospitality across multiple regions.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Why choose the Grand Train Tour?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Multiple Iconic Routes
              </h3>

              <p className="text-white/70">
                Combine the Glacier Express, Bernina Express, GoldenPass
                Express and other famous Swiss railways in one trip.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Switzerland in Depth
              </h3>

              <p className="text-white/70">
                Experience mountain villages, lakeside towns, cosmopolitan
                cities and some of Europe&apos;s finest alpine scenery.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Fully Tailor-Made
              </h3>

              <p className="text-white/70">
                Extend the itinerary with luxury hotels, lake cruises, mountain
                railways, spa stays and additional Swiss experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="bg-black px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
      Route Map
    </p>

    <h2 className="mb-8 text-4xl font-light md:text-5xl">
      Grand Train Tour of Switzerland
    </h2>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white p-4 shadow-2xl">
        <img
          src="/journeys/switzerland/maps/grand-train-tour-map.png"
          alt="Grand Train Tour of Switzerland route map"
          className="w-full rounded-2xl"
        />
      </div>

    <p className="mt-6 text-center text-white/60">
      The Grand Train Tour links Switzerland's most spectacular railways,
      mountain passes, lakeside cities and alpine resorts into one unforgettable
      rail journey.
    </p>
  </div>
</section>
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Ready to experience Switzerland by rail?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about Grand Train Tour itineraries, Swiss
            rail passes, luxury hotels and tailor-made alpine adventures.
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