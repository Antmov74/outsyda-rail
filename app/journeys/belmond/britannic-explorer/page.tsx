import Link from "next/link";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
import BritannicEmailLink from "@/components/BritannicEmailLink";
export const metadata = {
  title: "Britannic Explorer | Outsyda Rail",
  description:
    "Discover Britannic Explorer with Outsyda Rail, including luxury sleeper journeys through Wales, the Lake District and Cornwall.",
};

export default function BritannicExplorerPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/journeys/belmond/britannic-explorer/BEX-200426-EXT-04.jpg"
          alt="Britannic Explorer"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-20 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pb-24 pt-40">
          <Link
            href="/journeys/belmond"
            className="relative z-50 mb-8 w-fit cursor-pointer text-sm uppercase tracking-[0.25em] text-[#ff6b5f] transition hover:text-white"
          >
            ← Back to Belmond
          </Link>

          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#ff6b5f]">
            Belmond
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight md:text-7xl">
            Britannic Explorer
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/80">
            Discover Britain from a new perspective aboard a luxury sleeper
            train created for slow travel, exceptional food and immersive
            journeys through some of England and Wales&apos; most beautiful
            landscapes.
          </p>

          <a
            href="#enquire"
            className="relative z-50 mt-10 inline-block w-fit rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src="/journeys/belmond/britannic-explorer/BEX-130426-LEIS-27.jpg"
            alt="Life aboard Britannic Explorer"
            className="h-[500px] w-full rounded-[2rem] object-cover"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Britain, seen properly slowly
            </h2>

            <p className="mt-8 leading-8 text-white/70">
              Britannic Explorer brings together contemporary British design,
              relaxed luxury and carefully planned journeys through the
              countryside.
            </p>

            <p className="mt-6 leading-8 text-white/70">
              Days combine scenic rail travel with distinctive off-train
              experiences, while evenings return you to refined dining,
              comfortable private accommodation and the atmosphere of the
              train&apos;s Bar and Observation Cars.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Signature Journeys
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-light md:text-5xl">
            Three very different ways to explore Britain
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Wales
              </p>

              <h3 className="mt-3 text-2xl font-light">
                The Wonders of Wales
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                A three-night journey combining dramatic Welsh landscapes,
                outdoor experiences and relaxed life aboard the train.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Lake District
              </p>

              <h3 className="mt-3 text-2xl font-light">
                The Great Outdoors
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Travel north to the lakes and fells for a three-night journey
                shaped by scenery, food and carefully curated experiences.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Cornwall
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Coastal Britain
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Head west from London towards Cornwall for a journey combining
                coastal landscapes, regional cuisine and the best of British
                slow travel.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Accommodation
          </p>

          <h2 className="mb-12 max-w-4xl text-4xl font-light md:text-5xl">
            Contemporary British luxury on the rails
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/belmond/britannic-explorer/BEX-ACC-LB 06.jpg"
                alt="Britannic Explorer accommodation"
                className="h-[420px] w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">
                  Private Cabins
                </h3>

                <p className="mt-5 leading-7 text-white/70">
                  Elegant private accommodation designed around comfort,
                  privacy and a distinctly British sense of style.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/belmond/britannic-explorer/BEX-130426-FOOD-14.jpg"
                alt="Dining aboard Britannic Explorer"
                className="h-[420px] w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">
                  Dining & Social Spaces
                </h3>

                <p className="mt-5 leading-7 text-white/70">
                  Regional ingredients, relaxed fine dining and beautifully
                  designed social spaces make the onboard experience a major
                  part of the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Route Network
          </p>

          <h2 className="mb-10 max-w-4xl text-4xl font-light md:text-5xl">
            Journeys from London into the heart of Britain
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Wales
              </p>

              <h3 className="mt-3 text-2xl font-light">
                London to Wales
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Travel west into dramatic Welsh landscapes, combining scenic
                rail travel with curated off-train experiences.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Lake District
              </p>

              <h3 className="mt-3 text-2xl font-light">
                London to the Lakes
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Head north towards one of England&apos;s most beautiful regions,
                with lakes, fells and countryside forming the backdrop.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Cornwall
              </p>

              <h3 className="mt-3 text-2xl font-light">
                London to Cornwall
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Journey west through changing English landscapes towards
                Cornwall&apos;s coast, gardens and distinctive regional character.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Example Itinerary
          </p>

          <h2 className="mb-12 max-w-4xl text-4xl font-light md:text-5xl">
            A three-night British rail escape
          </h2>

          <div className="space-y-10">
            <div className="border-l-2 border-[#ff6b5f] pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 1
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Depart London
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-white/75">
                Board Britannic Explorer in London, settle into your cabin and
                enjoy your first evening onboard with dinner and drinks as the
                train begins its journey into the British countryside.
              </p>
            </div>

            <div className="border-l-2 border-[#ff6b5f] pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 2
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Explore the region
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-white/75">
                Enjoy a carefully curated off-train experience before returning
                to Britannic Explorer for afternoon relaxation, dinner and a
                second night aboard.
              </p>
            </div>

            <div className="border-l-2 border-[#ff6b5f] pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 3
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Scenic Britain
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-white/75">
                Spend another day combining landscapes, regional experiences
                and relaxed onboard living as the train continues through
                Britain.
              </p>
            </div>

            <div className="border-l-2 border-[#ff6b5f] pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 4
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Return to London
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-white/75">
                Enjoy your final breakfast onboard before completing the
                journey back in London.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Route Network
          </p>

          <h2 className="mb-10 max-w-4xl text-4xl font-light md:text-5xl">
            Explore England and Wales by luxury rail
          </h2>

          <img
            src="/journeys/belmond/britannic-explorer/britannic-route-map.png"
            alt="Britannic Explorer route network map"
            className="w-full rounded-[2rem] border border-white/10 bg-black"
          />

          <p className="mt-8 max-w-3xl leading-8 text-white/70">
            Britannic Explorer journeys begin and end in London, travelling
            west into Wales, north towards the Lake District and south-west to
            Cornwall, with each route combining distinctive landscapes,
            regional experiences and time to enjoy life on board.
          </p>
        </div>
      </section>
            <section id="enquire" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-black p-10 text-center md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Interested in Britannic Explorer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about journey dates, routes, accommodation
            options and tailor-made extensions before or after your Britannic
            Explorer journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BritannicEmailLink />

            <a
              href="https://wa.me/447946442509"
              className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
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