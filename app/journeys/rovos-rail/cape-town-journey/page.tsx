import Link from "next/link";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
import JourneyTimeline from "@/components/JourneyTimeline";

export const metadata = {
  title: "Rovos Rail Cape Town Journey | Outsyda Rail",
  description:
    "Explore the Rovos Rail Cape Town Journey between Pretoria and Cape Town with Outsyda Rail.",
};

export default function CapeTownJourneyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src="/journeys/rovos-rail/Hero Images/RVR-HexRiverValley3-HRes.jpg"
          alt="Rovos Rail Cape Town journey"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pb-24 pt-40">
          <Link
            href="/journeys/rovos-rail"
            className="relative z-50 mb-8 w-fit cursor-pointer text-sm uppercase tracking-[0.25em] text-[#ff6b5f] transition hover:text-white"
          >
            Back to Rovos Rail
          </Link>

          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#ff6b5f]">
            Rovos Rail
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
            Cape Town Journey
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A classic Rovos Rail journey between Pretoria and Cape Town,
            combining old-world rail luxury with South Africa&apos;s changing
            landscapes, mountain scenery and historic towns.
          </p>

          <p className="mt-5 text-sm uppercase tracking-[0.35em] text-white/70">
            3 nights / 4 days
          </p>

          <a
            href="#enquire"
            className="relative z-50 mt-10 inline-block w-fit cursor-pointer rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            The Journey
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Pretoria to Cape Town in timeless style
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            This is one of the best introductions to Rovos Rail. Travel across
            South Africa in comfort, with elegant dining, private suites and
            time to watch the scenery unfold from the observation car.
          </p>

          <p className="mt-5 leading-8 text-white/70">
            The route links Pretoria and Cape Town, with the rail journey itself
            forming the heart of the experience rather than simply being a way
            to travel between two cities.
          </p>
        </div>

        <img
          src="/journeys/rovos-rail/Hero Images/RVR-CoachFlag-HRes.jpg"
          alt="Rovos Rail carriage"
          className="h-[460px] w-full rounded-[2rem] object-cover"
        />
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
            Why choose the Cape Town Journey?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-black p-7">
              <h3 className="text-2xl font-light">Classic Route</h3>
              <p className="mt-4 leading-7 text-white/65">
                A signature South African rail journey linking Pretoria and
                Cape Town.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-black p-7">
              <h3 className="text-2xl font-light">Scenic Landscapes</h3>
              <p className="mt-4 leading-7 text-white/65">
                Mountain passes, open countryside and dramatic approaches to
                the Cape.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-black p-7">
              <h3 className="text-2xl font-light">Perfect Introduction</h3>
              <p className="mt-4 leading-7 text-white/65">
                An ideal first Rovos Rail journey for travellers new to luxury
                rail in Africa.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        <img
          src="/journeys/rovos-rail/Hero Images/RVR-ObsCarRVR-HRes.jpg"
          alt="Rovos Rail observation car"
          className="h-80 w-full rounded-[2rem] object-cover"
        />

        <img
          src="/journeys/rovos-rail/Hero Images/RVR-ObsPeople2b-HRes.jpg"
          alt="Guests aboard Rovos Rail"
          className="h-80 w-full rounded-[2rem] object-cover"
        />

        <img
          src="/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg"
          alt="Rovos Rail train travelling through South Africa"
          className="h-80 w-full rounded-[2rem] object-cover"
        />
      </section>

      <section className="bg-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Provisional 2026–27 Rates
          </p>

          <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
            Choose your suite
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            One-way Rovos Rail fares for travel from 1 October 2026 to 30
            September 2027. Prices are per person sharing.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Pullman Suite", "R54,000"],
              ["Deluxe Suite", "R78,000"],
              ["Royal Suite", "R104,000"],
            ].map(([suite, price]) => (
              <article
                key={suite}
                className="rounded-[2rem] border border-white/10 bg-black p-8"
              >
                <h3 className="text-xl font-light text-white/75">{suite}</h3>
                <p className="mt-4 text-3xl font-light text-[#ff6b5f]">
                  From {price}
                </p>
                <p className="mt-3 text-sm text-white/55">
                  Per person sharing
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-6 text-white/55">
            Rates are provisional and subject to availability and confirmation
            at the time of booking. Single occupancy supplements apply. Flights,
            pre- and post-tour accommodation, transfers, visas, gratuities and
            travel insurance are not included unless stated.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Accommodation
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Accommodation on board
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/rovos-rail/Suites/RVR SUITES_PULLMAN GOLD LENGTHWAYS DOUBLE 3_EY.jpg"
                alt="Rovos Rail Pullman Suite"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Pullman Suite</h3>
                <p className="mt-5 leading-7 text-white/70">
                  Elegant accommodation offering everything needed for a
                  comfortable and memorable Rovos Rail journey.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/rovos-rail/Suites/RVR SUITES_DELUXE LENGTHWAYS DOUBLE 6_NR.jpg"
                alt="Rovos Rail Deluxe Suite"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Deluxe Suite</h3>
                <p className="mt-5 leading-7 text-white/70">
                  Spacious accommodation with a comfortable seating area,
                  private en-suite bathroom and generous room to relax.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/rovos-rail/suite-royal-official.jpg"
                alt="Rovos Rail Royal Suite"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Royal Suite</h3>
                <p className="mt-5 leading-7 text-white/70">
                  The ultimate Rovos Rail experience, combining exceptional
                  space, luxurious finishes and outstanding comfort.
                </p>
              </div>
            </article>
          </div>
                 </div>
        </section>

        <JourneyTimeline
        title="Pretoria to Cape Town"
        introduction="A classic three-night journey crossing the Highveld, the Great Karoo and the Cape Winelands before arriving beneath Table Mountain."
        days={[
          {
            day: "Day 1",
            title: "Pretoria",
            description:
              "Board Rovos Rail at Capital Park Station in Pretoria. Settle into your suite and enjoy lunch, afternoon tea and your first elegant dinner as the train departs across the Highveld.",
            image:
              "/journeys/rovos-rail/Hero Images/RVR-CoachesTrees-HRes.jpg",
          },
          {
            day: "Day 2",
            title: "Kimberley & the Great Karoo",
            description:
              "Visit the Diamond Mine Museum and the famous Big Hole before continuing south through the vast open landscapes of the Great Karoo.",
            image:
              "/journeys/rovos-rail/General/RVR-RailwayLine1-HRes.jpg",
          },
          {
            day: "Day 3",
            title: "Matjiesfontein",
            description:
              "Explore the beautifully preserved Victorian village of Matjiesfontein before travelling through spectacular mountain scenery and the Cape Winelands.",
            image:
              "/journeys/rovos-rail/Hero Images/RVR-HexRiverValley3-HRes.jpg",
          },
          {
            day: "Day 4",
            title: "Cape Town",
            description:
              "Enjoy breakfast on board before arriving in Cape Town beneath Table Mountain, completing one of Southern Africa's most iconic rail journeys.",
            image:
              "/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg",
          },
        ]}
      />

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Route Map
          </p>

          <h2 className="mb-10 max-w-3xl text-4xl font-light md:text-5xl">
            Pretoria to Cape Town
          </h2>

          <img
            src="/journeys/rovos-rail/maps/cape-town-map.jpg"
            alt="Rovos Rail Cape Town Journey route map"
            className="w-full rounded-[2rem] border border-white/10 bg-white"
          />
        </div>
      </section>

      <section id="enquire" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Interested in the Cape Town Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about Rovos Rail dates, suite options,
            pricing, extensions and tailor-made South Africa arrangements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ant@outsyda.com?subject=Rovos Rail Cape Town Journey enquiry"
              className="rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Email Outsyda
            </a>

            <a
              href="https://wa.me/447946442509"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}