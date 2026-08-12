import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Highland Journey | Royal Scotsman | Outsyda Rail",
  description:
    "Discover the Highland Journey aboard Belmond Royal Scotsman with Outsyda Rail.",
};

export default function HighlandJourneyPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <BackButton
        href="/journeys/belmond/royal-scotsman"
        label="Back to Royal Scotsman"
      />

      {/* HERO */}

      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <img
          src="/journeys/belmond/royal-scotsman/Image 30.jpg"
          alt="Scotland's Classic Splendours aboard Royal Scotsman"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-20 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              Royal Scotsman · 4 Nights
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              Scotland&apos;s Classic Splendours
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              A fuller Royal Scotsman journey through Highland scenery,
              historic landscapes, whisky country and some of Scotland&apos;s
              most memorable rail routes.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              The journey
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              Royal Scotsman at its most complete.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Scotland&apos;s Classic Splendours is designed for travellers who
              want more time aboard Royal Scotsman and a broader exploration of
              the country.
            </p>

            <p>
              Over four nights, the journey combines Highland landscapes,
              heritage, wildlife and whisky with the elegant rhythm of life
              aboard the train.
            </p>

            <p>
              The result is a richer, more immersive experience of Scotland,
              moving between remote scenery and carefully selected off-train
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Highlands
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Wild landscapes
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Travel deep into mountain country, forests and remote glens.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Heritage
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Castles &amp; estates
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Discover Scotland&apos;s history through private visits and
                historic landscapes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Whisky
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Distillery country
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Experience one of Scotland&apos;s defining traditions along the
                route.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Wildlife
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Scotland outdoors
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Enjoy a journey shaped by nature, open landscapes and Highland
                scenery.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* IMAGE STRIP */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 28.jpg"
              alt="Royal Scotsman experience"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 29.jpg"
              alt="Royal Scotsman in Scotland"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 31.jpg"
              alt="Scottish scenery"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
            Itinerary
          </p>

          <h2 className="mt-5 text-4xl font-light md:text-5xl">
            Four nights through classic Scotland
          </h2>

          <div className="mt-14 space-y-12">
            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 1
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Edinburgh into the Highlands
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Board Royal Scotsman in Edinburgh and settle into life aboard
                as the train begins its journey north.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 2
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Highland scenery and heritage
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Explore the Highlands with selected off-train experiences before
                returning aboard for dinner.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 3
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Whisky country
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Continue through Scotland's famous whisky regions, combining
                local flavour with spectacular rail travel.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 4
              </p>

              <h3 className="mt-3 text-2xl font-light">
                West coast and Highland wilderness
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Experience another full day of dramatic scenery before your
                final evening aboard Royal Scotsman.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 5
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Return to Edinburgh
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Enjoy your final breakfast aboard before arriving back in
                Edinburgh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
                Route
              </p>

              <h2 className="mt-5 text-4xl font-light md:text-5xl">
                A wider journey through Scotland.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70">
                Four nights allow Royal Scotsman to explore more of the
                Highlands, west coast and historic landscapes before returning
                to Edinburgh.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Journey flow
              </p>

              <p className="mt-5 text-2xl font-light leading-relaxed">
                Edinburgh → Highlands → Speyside → West Coast → Perth → Edinburgh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="enquire"
        className="bg-[#0a0a0a] px-6 py-24 text-center md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
            Outsyda Rail
          </p>

          <h2 className="mt-5 text-4xl font-light md:text-5xl">
            Plan Scotland&apos;s Classic Splendours
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Build this Royal Scotsman journey into a wider Scottish adventure
            with hotels, private touring and additional rail travel.
          </p>

          <a
            href="mailto:ant@outsyda.com"
            className="mt-10 inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Start planning
          </a>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}