import Link from "next/link";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Venice Simplon-Orient-Express | Outsyda Rail",
  description:
    "Discover the Venice Simplon-Orient-Express with Outsyda Rail, including iconic routes, accommodation and tailor-made European rail journeys.",
};

export default function VeniceSimplonOrientExpressPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg"
          alt="Venice Simplon-Orient-Express"
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
            Venice Simplon-Orient-Express
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/80">
            Step aboard one of the world&apos;s most celebrated luxury trains,
            where restored Art Deco carriages, exceptional dining and
            old-world glamour transform a journey across Europe into an
            unforgettable experience.
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
            src="/journeys/belmond/vsoe/VSOE-REST-52.jpg"
            alt="Dining aboard the Venice Simplon-Orient-Express"
            className="h-[500px] w-full rounded-[2rem] object-cover"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              The world&apos;s most iconic train
            </h2>

            <p className="mt-8 leading-8 text-white/70">
              Travelling aboard the Venice Simplon-Orient-Express is about far
              more than reaching your destination. Every detail celebrates the
              golden age of rail travel, from beautifully restored carriages
              to impeccable service and unforgettable cuisine.
            </p>

            <p className="mt-6 leading-8 text-white/70">
              Whether travelling to Venice, Paris or Istanbul, every journey
              becomes an experience in itself.
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
            Europe by rail, with the journey taking centre stage
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Classic Route
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Paris to Venice
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                One of the most iconic Venice Simplon-Orient-Express journeys,
                combining overnight travel with exceptional dining and a
                memorable arrival into Venice.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Grand Tour
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Paris to Istanbul
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                A longer continental journey linking some of Europe&apos;s great
                cities and recreating the romance of the historic Orient
                Express route.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Tailor-Made
              </p>

              <h3 className="mt-3 text-2xl font-light">
                Extend your journey
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Add stays in Paris, Venice, Istanbul or elsewhere in Europe
                before or after your journey for a complete luxury rail
                itinerary.
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
            Signature Venice Simplon-Orient-Express journeys
          </h2>

          <img
            src="/journeys/belmond/vsoe/vsoe-route-map.png"
            alt="Venice Simplon-Orient-Express route network"
            className="w-full rounded-[2rem] border border-white/10 bg-white"
          />

          <p className="mt-8 max-w-3xl leading-8 text-white/70">
            Travel on some of Europe's most celebrated rail routes, including
            Paris, Venice, Florence, Portofino, Brussels, Amsterdam and the
            legendary Paris to Istanbul journey.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Cabins & Suites
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Choose how you want to travel
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/belmond/vsoe/VSOE-EXT-20.jpg"
                alt="Historic Cabin"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Historic Cabin</h3>

                <p className="mt-5 leading-7 text-white/70">
                  Beautifully restored Art Deco accommodation offering an
                  authentic Venice Simplon-Orient-Express experience with
                  seating by day and elegant sleeping accommodation by night.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/belmond/vsoe/VSOE-ACC-SUI-110.jpg"
                alt="Suite"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Suite</h3>

                <p className="mt-5 leading-7 text-white/70">
                  Spacious suites featuring a private en-suite bathroom,
                  generous living space and the timeless elegance for which the
                  train is famous.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/belmond/vsoe/VSOE-REST-52.jpg"
                alt="Grand Suite"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Grand Suite</h3>

                <p className="mt-5 leading-7 text-white/70">
                  The most luxurious accommodation on board, with exceptional
                  space, beautifully crafted interiors and a truly indulgent
                  rail experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Example Itinerary
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Paris to Venice
          </h2>

          <div className="space-y-10">
            <div className="border-l-2 border-[#ff6b5f] pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 1
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Paris Departure
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                Board the Venice Simplon-Orient-Express in Paris, settle into
                your cabin and enjoy cocktails followed by a multi-course dinner
                in one of the beautifully restored dining cars.
              </p>
            </div>

            <div className="border-l-2 border-[#ff6b5f] pl-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Day 2
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Across the Alps to Venice
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                Wake to breakfast served in your cabin before travelling through
                spectacular Alpine scenery and arriving in Venice during the
                afternoon.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section id="enquire" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Interested in the Venice Simplon-Orient-Express?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about routes, departure dates, accommodation,
            pricing and tailor-made European rail holidays aboard the legendary
            Venice Simplon-Orient-Express.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ant@outsyda.com?subject=Venice Simplon-Orient-Express enquiry"
              className="rounded-full bg-[#ff6b5f] px-8 py-3 font-semibold text-black transition hover:bg-white"
            >
              Email Outsyda
            </a>

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