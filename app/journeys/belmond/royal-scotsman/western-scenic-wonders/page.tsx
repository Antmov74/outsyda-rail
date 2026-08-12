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
          src="/journeys/belmond/royal-scotsman/Image 24.jpg"
          alt="Western Scenic Wonders aboard Royal Scotsman"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-20 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              Royal Scotsman · 3 Nights
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              Western Scenic Wonders
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              A dramatic journey towards Scotland&apos;s wild west coast,
              combining remote landscapes, lochs, mountains and the intimate
              atmosphere of Royal Scotsman.
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
              Scotland at its most dramatic.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Western Scenic Wonders heads towards some of Scotland&apos;s most
              striking western landscapes, where mountains, lochs and remote
              communities shape the journey.
            </p>

            <p>
              Three nights aboard Royal Scotsman allow time to settle into the
              rhythm of the train while exploring a very different side of
              Scotland.
            </p>

            <p>
              Elegant dining and beautifully designed interiors contrast with
              the wild landscapes beyond the windows.
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
                West Coast
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Remote landscapes
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Discover mountain scenery, sea lochs and the rugged character
                of western Scotland.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Scenery
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Lochs & mountains
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                One of Royal Scotsman&apos;s most visually dramatic journeys.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                On board
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Three nights aboard
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                More time to enjoy the train&apos;s dining, observation spaces
                and relaxed atmosphere.
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
              alt="Royal Scotsman"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 29.jpg"
              alt="Royal Scotsman through Scotland"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 31.jpg"
              alt="Western Scotland"
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
            Three nights through western Scotland
          </h2>

          <div className="mt-14 space-y-12">
            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 1
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Edinburgh towards the west
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Board Royal Scotsman in Edinburgh and begin travelling towards
                the Highlands, settling into your cabin before dinner aboard.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 2
              </p>

              <h3 className="mt-3 text-2xl font-light">
                The western Highlands
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Journey through some of Scotland&apos;s most remote scenery,
                with mountains and lochs dominating the landscape.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 3
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Kyle of Lochalsh and Highland scenery
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Explore the character of Scotland&apos;s west before returning
                aboard for another evening of dining and rail travel.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 4
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Return to Edinburgh
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Enjoy the final morning aboard as Royal Scotsman travels south
                and the journey concludes in Edinburgh.
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
                Into Scotland&apos;s wild west.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70">
                A three-night exploration connecting Edinburgh with the western
                Highlands before returning through the heart of Scotland.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Journey flow
              </p>

              <p className="mt-5 text-2xl font-light leading-relaxed">
                Edinburgh → Highlands → Kyle of Lochalsh → Inverness → Edinburgh
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
            Plan Western Scenic Wonders
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Build your Royal Scotsman journey into a wider Scottish adventure
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