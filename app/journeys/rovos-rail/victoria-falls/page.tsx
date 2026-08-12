import Link from "next/link";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function VictoriaFallsPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
          <Link
            href="/journeys/rovos-rail"
            className="relative z-50 mb-8 w-fit cursor-pointer text-sm uppercase tracking-[0.25em] text-[#ff6b5f] transition hover:text-white"
          >
            Back to Rovos Rail
          </Link>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Rovos Rail
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Victoria Falls
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A classic luxury rail journey from Pretoria through Southern Africa
            to one of the world&apos;s great natural wonders.
          </p>
          <a
  href="#enquire"
  className="mt-8 inline-flex w-fit rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
>
  Enquire Now
</a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Journey Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Rail romance with a spectacular finale
            </h2>
          </div>

          <div className="space-y-6 text-white/75">
            <p>
              Travel north from Pretoria through changing landscapes towards
              Zimbabwe, combining elegant onboard living with wildlife,
              history and some of Southern Africa&apos;s most memorable scenery.
            </p>

            <p>
              The journey ends at the incomparable Victoria Falls on the
              Zambezi River, with both three-night and four-night departures
              available.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.04] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Duration
            </p>

            <div className="mt-3 space-y-2">
              <p className="text-2xl font-semibold">3 nights / 4 days</p>
              <p className="text-2xl font-semibold">4 nights / 5 days</p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Route
            </p>

            <p className="mt-3 text-2xl font-semibold">
              Pretoria to Victoria Falls
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Style
            </p>

            <p className="mt-3 text-2xl font-semibold">
              Iconic luxury rail
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg"
              alt="Rovos Rail observation car at sunset"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              The Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Classic rail romance with a spectacular finale
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Days onboard are relaxed and refined, with lounge-car views,
              polished service and time to settle into the rhythm of the train
              before arriving at Victoria Falls.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Accommodation
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Accommodation on board
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/rovos-rail/Suites/RVR SUITES_PULLMAN GOLD LENGTHWAYS DOUBLE 3_EY.jpg"
                alt="Rovos Rail Pullman Suite"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Pullman Suite</h3>
                <p className="mt-5 leading-7 text-white/70">
                  Comfortable and beautifully appointed accommodation,
                  offering everything needed for an elegant rail journey.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/rovos-rail/Suites/RVR SUITES_DELUXE LENGTHWAYS DOUBLE 6_NR.jpg"
                alt="Rovos Rail Deluxe Suite"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Deluxe Suite</h3>
                <p className="mt-5 leading-7 text-white/70">
                  Spacious accommodation with a seating area and private
                  en-suite facilities.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/rovos-rail/suite-royal-official.jpg"
                alt="Rovos Rail Royal Suite"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-light">Royal Suite</h3>
                <p className="mt-5 leading-7 text-white/70">
                  Rovos Rail&apos;s most luxurious suite, with generous space
                  and exceptional comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.04] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">
            One of Africa&apos;s great rail journeys
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Hwange National Park</h3>

              <p className="mt-4 text-white/70">
                Enjoy game viewing in one of Zimbabwe&apos;s most important
                wildlife sanctuaries.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Victoria Falls</h3>

              <p className="mt-4 text-white/70">
                Complete the journey at one of the world&apos;s most impressive
                natural wonders.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">
                Extended Journey
              </h3>

              <p className="mt-4 text-white/70">
                The four-night itinerary also includes Matobo National Park,
                renowned for its granite landscapes, rock art and history.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JourneyTimeline
        title="Pretoria to Victoria Falls"
        introduction="The journey is available as a three-night or four-night itinerary. The extended four-night journey includes an additional visit to Matobo National Park."
        days={[
          {
            day: "Day 1",
            title: "Pretoria",
            description:
              "Depart Rovos Rail Station in Pretoria and settle into your suite as the train travels north through the South African landscape. Enjoy the relaxed rhythm of fine dining, afternoon tea and evening service on board.",
            image:
              "/journeys/rovos-rail/Hero Images/RVR-CoachesTrees-HRes.jpg",
          },
          {
            day: "Day 2",
            title: "North to Zimbabwe",
            description:
              "Continue north across the Tropic of Capricorn into baobab country and towards Zimbabwe, enjoying changing landscapes and the atmosphere of classic luxury rail travel.",
            image:
              "/journeys/rovos-rail/General/RVR-RailwayLine1-HRes.jpg",
          },
          {
            day: "Day 3",
            title: "Hwange National Park",
            description:
              "Enjoy a game drive in Hwange National Park, Zimbabwe's largest wildlife area and home to an extraordinary variety of mammals and birdlife.",
            image:
              "/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg",
          },
          {
            day: "Day 4",
            title: "Victoria Falls",
            description:
              "Arrive at Victoria Falls on the mighty Zambezi River, bringing the three-night journey to a spectacular conclusion. The extended four-night itinerary also includes a visit to Matobo National Park before arrival.",
            image:
              "/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg",
          },
        ]}
      />

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Route Map
          </p>

          <h2 className="mb-10 max-w-3xl text-4xl font-light md:text-5xl">
            Pretoria to Victoria Falls
          </h2>

          <img
            src="/journeys/rovos-rail/maps/victoria-falls-map.jpg"
            alt="Rovos Rail Victoria Falls route map"
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
            Interested in the Victoria Falls journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about journey dates, suite options, pricing
            and tailor-made extensions before or after your Rovos Rail trip.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ant@outsyda.com?subject=Rovos Rail Victoria Falls enquiry"
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
