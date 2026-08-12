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
      <section className="relative min-h-[82vh] overflow-hidden">
        <img
          src="/journeys/belmond/royal-scotsman/Image 27.jpg"
          alt="Taste of the Highlands aboard Royal Scotsman"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-20 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              Royal Scotsman · 2 Nights
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              Taste of the Highlands
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              A short Scottish escape combining Highland scenery, whisky,
              seasonal produce and the intimate luxury of Royal Scotsman.
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
              Scotland through flavour and landscape.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Taste of the Highlands brings together the landscapes and
              flavours that make Scotland distinctive, wrapped into a compact
              two-night Royal Scotsman journey.
            </p>

            <p>
              Travel through Highland country while enjoying elegant dining,
              carefully chosen local experiences and Scotland&apos;s celebrated
              whisky traditions.
            </p>

            <p>
              It is an ideal choice for travellers looking for a shorter
              luxury rail experience with a strong sense of place.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Speyside
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Whisky country
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Discover one of Scotland&apos;s most celebrated whisky regions
                and the traditions behind its famous spirit.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Dining
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Scottish produce
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Seasonal ingredients and regional flavours form a central part
                of the experience aboard.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Highlands
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Scenic rail travel
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Watch Scotland&apos;s mountain landscapes unfold from the
                comfort of Royal Scotsman.
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
              src="/journeys/belmond/royal-scotsman/Image 26.jpg"
              alt="Dining aboard Royal Scotsman"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 30.jpg"
              alt="Royal Scotsman journey"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 31.jpg"
              alt="Scottish Highland experience"
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
            Two nights of Highland flavour
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
                as the train travels north through Scotland. Enjoy your first
                dinner as Highland landscapes begin to unfold.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 2
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Speyside, whisky and Scottish flavours
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Explore Scotland&apos;s whisky heritage and enjoy a day shaped
                around local flavours, Highland scenery and the relaxed rhythm
                of Royal Scotsman.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 3
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Return to Edinburgh
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Enjoy breakfast and the final views from the train before
                returning to Edinburgh and bringing the journey to a close.
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
                Into Scotland&apos;s whisky country.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70">
                A compact Royal Scotsman journey connecting Edinburgh with the
                Highlands and the whisky-producing landscapes of Speyside.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Journey flow
              </p>

              <p className="mt-5 text-2xl font-light leading-relaxed">
                Edinburgh → Highlands → Speyside → Keith → Edinburgh
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
            Plan Taste of the Highlands
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Combine Royal Scotsman with a wider Scottish itinerary including
            Edinburgh, Highland hotels, private touring or additional rail
            journeys.
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