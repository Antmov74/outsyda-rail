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
          src="/journeys/belmond/royal-scotsman/Image 22.jpg"
          alt="Highland Journey aboard Royal Scotsman"
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
              Highland Journey
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              A compact introduction to the Scottish Highlands, combining
              dramatic scenery, elegant rail travel and carefully chosen
              off-train experiences.
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
              A first taste of Royal Scotsman.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Highland Journey is ideal for travellers who want to experience
              the character of Royal Scotsman in a shorter format.
            </p>

            <p>
              The route combines Highland scenery, heritage and the intimate
              atmosphere of life aboard one of the world&apos;s most exclusive
              luxury trains.
            </p>

            <p>
              From Edinburgh, the journey heads north into the Highlands before
              returning south through some of Scotland&apos;s most evocative
              landscapes.
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
                Highlands
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Mountain scenery
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Travel through dramatic glens, forests and mountain country.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Heritage
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Rothiemurchus Estate
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Discover one of the Highlands&apos; most characterful historic
                estates.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                On board
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Fine dining
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Enjoy elegant dining and relaxed evenings aboard Royal Scotsman.
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
              src="/journeys/belmond/royal-scotsman/Image 23.jpg"
              alt="Royal Scotsman interior"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 24.jpg"
              alt="Scottish Highland scenery"
              className="h-[250px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 26.jpg"
              alt="Dining aboard Royal Scotsman"
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
            Two nights through the Highlands
          </h2>

          <div className="mt-14 space-y-12">
            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 1
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Edinburgh to the Highlands
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Board Royal Scotsman in Edinburgh and travel north into the
                Highlands as the scenery becomes increasingly dramatic. Settle
                into life aboard and enjoy dinner as the train moves through
                Scotland.
              </p>
            </div>

            <div className="border-l border-white/15 pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 2
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Rothiemurchus and Highland landscapes
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Explore the Highlands off the train, including time around the
                Rothiemurchus area, before returning aboard for another evening
                of fine dining and relaxed rail travel.
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
                Enjoy the final morning aboard Royal Scotsman as the train
                travels south. The journey concludes in Edinburgh.
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
                Edinburgh to the Highlands and back.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70">
                A short but rewarding introduction to Royal Scotsman, combining
                Edinburgh with the landscapes and atmosphere of the Highlands.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Journey flow
              </p>

              <p className="mt-5 text-2xl font-light leading-relaxed">
                Edinburgh → Highlands → Rothiemurchus → Edinburgh
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
            Plan your Highland Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            We can arrange Royal Scotsman as part of a wider Scottish journey,
            with hotels, private touring and additional rail travel before or
            after your trip.
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