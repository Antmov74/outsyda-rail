import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Royal Scotsman | Outsyda Rail",
  description:
    "Discover the Royal Scotsman with Outsyda Rail — an intimate luxury rail journey through the Scottish Highlands.",
};

export default function RoyalScotsmanPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/journeys/belmond/royal-scotsman/TRS-EXT-60.jpg"
          alt="Royal Scotsman journey through the Scottish Highlands"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-20 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              Belmond
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Royal Scotsman
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              An intimate luxury train journey through wild Highland
              landscapes, historic estates, remote lochs and some of
              Scotland&apos;s most evocative scenery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#journey"
                className="rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Discover the journey
              </a>

              <a
                href="#enquire"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Start planning
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="journey"
        className="bg-black px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              Scotland by rail
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight md:text-5xl">
              A private country house on rails.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Royal Scotsman is one of the world&apos;s most intimate luxury
              trains, carrying only a small number of guests through the
              dramatic landscapes of Scotland.
            </p>

            <p>
              Days unfold slowly. Mountain passes, ancient castles, whisky
              country and remote glens become part of the journey, while life
              aboard is relaxed, personal and unmistakably Scottish.
            </p>

            <p>
              This is not simply transport between destinations. The train is
              part of the experience — a moving base for exploring Scotland in
              comfort and style.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 24.jpg"
              alt="Scottish Highland scenery"
              className="h-[240px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 26.jpg"
              alt="Dining aboard Royal Scotsman"
              className="h-[240px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/journeys/belmond/royal-scotsman/Image 29.jpg"
              alt="Royal Scotsman train"
              className="h-[240px] w-full object-cover md:h-[280px]"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
              The experience
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight md:text-5xl">
              Scotland beyond the window.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/70">
              The Royal Scotsman experience extends far beyond the train.
              Journeys are designed around landscapes, estates, historic sites
              and local experiences that reveal Scotland at a slower pace.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Highlands
              </p>

              <h3 className="mt-5 text-2xl font-light">
                Wild landscapes
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Travel deep into the Highlands through mountains, glens and
                lochs that define Scotland&apos;s dramatic interior.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Heritage
              </p>

              <h3 className="mt-5 text-2xl font-light">
                Private access
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Discover historic houses, castles, gardens and estates with
                carefully arranged visits along the route.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Flavour
              </p>

              <h3 className="mt-5 text-2xl font-light">
                Whisky & local produce
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Scottish ingredients, regional dishes and whisky experiences
                connect the journey directly with the places you travel
                through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE ABOARD */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
                Life aboard
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight md:text-5xl">
                Intimate by design.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Royal Scotsman carries a small number of guests, giving the
                train the atmosphere of a private country house rather than a
                large hotel.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/70">
                Elegant cabins and beautifully crafted social spaces create an
                atmosphere made for conversation, long evenings and watching
                the Highlands roll past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DINING */}
      <section className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
                Dining & social spaces
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight md:text-5xl">
                Scotland served at the table.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Dining aboard Royal Scotsman is part of the rhythm of the
                journey, with menus inspired by Scottish produce and the
                regions travelled through.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/70">
                Evenings are relaxed and sociable, with time for a drink,
                conversation and the simple pleasure of travelling through
                Scotland by rail.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* JOURNEYS */}
<section className="bg-black px-6 py-24 md:px-10 md:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
        Royal Scotsman Journeys
      </p>

      <h2 className="mt-5 text-5xl font-light">
        Choose your Scottish adventure
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      <a
        href="/journeys/belmond/royal-scotsman/highland-journey"
        className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2"
      >
        <img
          src="/journeys/belmond/royal-scotsman/Image 22.jpg"
          alt="Highland Journey"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b5f]">
            2 Nights
          </p>

          <h3 className="mt-3 text-3xl font-light">
            Highland Journey
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65">
            Edinburgh → Boat of Garten → Dundee
          </p>

          <p className="mt-4 leading-7 text-white/75">
            A compact introduction to Royal Scotsman and the landscapes of the Highlands.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm leading-7 text-white/60">
              Rothiemurchus Estate • Highland scenery • Fine dining
            </p>
          </div>

          <p className="mt-6 font-semibold text-[#ff6b5f]">
            View Journey →
          </p>
        </div>
      </a>

      <a
        href="/journeys/belmond/royal-scotsman/western-scenic-wonders"
        className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2"
      >
        <img
          src="/journeys/belmond/royal-scotsman/Image 24.jpg"
          alt="Western Scenic Wonders"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b5f]">
            3 Nights
          </p>

          <h3 className="mt-3 text-3xl font-light">
            Western Scenic Wonders
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65">
            Edinburgh → Kyle of Lochalsh → Inverness
          </p>

          <p className="mt-4 leading-7 text-white/75">
            A journey through the dramatic west coast, remote lochs and Highland landscapes.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm leading-7 text-white/60">
              West coast scenery • Lochs • Castles
            </p>
          </div>

          <p className="mt-6 font-semibold text-[#ff6b5f]">
            View Journey →
          </p>
        </div>
      </a>

      <a
        href="/journeys/belmond/royal-scotsman/taste-of-the-highlands"
        className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2"
      >
        <img
          src="/journeys/belmond/royal-scotsman/Image 27.jpg"
          alt="Taste of the Highlands"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b5f]">
            2 Nights
          </p>

          <h3 className="mt-3 text-3xl font-light">
            Taste of the Highlands
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65">
            Edinburgh → Speyside → Keith
          </p>

          <p className="mt-4 leading-7 text-white/75">
            A shorter escape focused on Scotland&apos;s food, whisky and Highland character.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm leading-7 text-white/60">
              Distilleries • Local cuisine • Scenic rail
            </p>
          </div>

          <p className="mt-6 font-semibold text-[#ff6b5f]">
            View Journey →
          </p>
        </div>
      </a>

      <a
        href="/journeys/belmond/royal-scotsman/scotlands-classic-splendours"
        className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2"
      >
        <img
          src="/journeys/belmond/royal-scotsman/Image 30.jpg"
          alt="Scotland's Classic Splendours"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b5f]">
            4 Nights
          </p>

          <h3 className="mt-3 text-3xl font-light">
            Scotland&apos;s Classic Splendours
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65">
            Edinburgh → Highlands → West Coast → Perth
          </p>

          <p className="mt-4 leading-7 text-white/75">
            A fuller exploration combining Highland scenery, heritage and classic Royal Scotsman experiences.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm leading-7 text-white/60">
              Castles • Wildlife • Whisky • Highlands
            </p>
          </div>

          <p className="mt-6 font-semibold text-[#ff6b5f]">
            View Journey →
          </p>
        </div>
      </a>
    </div>
  </div>
</section>
{/* ROUTE MAP */}

<section className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
  <div className="mx-auto max-w-7xl">

    <div className="overflow-hidden rounded-[2rem] border border-white/10">
      <img
        src="/journeys/belmond/royal-scotsman/route-map.jpg"
        alt="Royal Scotsman Route Map"
        className="w-full"
      />
    </div>

    <div className="mt-10 max-w-4xl">
      <p className="text-lg leading-8 text-white/70">
        Royal Scotsman journeys begin and end in Edinburgh, travelling through
        the Scottish Highlands, Speyside, the west coast and some of Britain's
        most spectacular scenery. Each itinerary combines breathtaking rail
        travel with exclusive off-train experiences, fine dining and elegant
        accommodation aboard Belmond's iconic luxury train.
      </p>
    </div>

  </div>
</section>


      {/* OUTSYDA */}
      <section
        id="enquire"
        className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b5f]">
            Outsyda Rail
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Build Royal Scotsman into a bigger adventure.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            We can arrange Royal Scotsman as a standalone journey or build it
            into a wider Scotland itinerary with hotels, private touring and
            additional rail experiences before or after the train.
          </p>

          <div className="mt-10">
            <a
              href="mailto:ant@outsyda.com"
              className="inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Start planning your journey
            </a>
          </div>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}