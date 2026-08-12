import Link from "next/link";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function DurbanSafariPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg')",
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
            Durban Safari
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A refined rail journey between Pretoria and Durban, combining
            elegant onboard living with battlefield history, game viewing and
            the dramatic landscapes of KwaZulu-Natal.
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
              Safari, scenery and slow luxury
            </h2>
          </div>

          <div className="space-y-6 text-white/75">
            <p>
              The Durban Safari is one of Rovos Rail&apos;s shorter but
              beautifully varied journeys, offering a rich taste of South
              Africa from the comfort of a luxury train.
            </p>

            <p>
              Guests travel through the Highveld and KwaZulu-Natal, with time
              for guided excursions, wildlife experiences and relaxed days
              onboard. It is ideal for travellers who want a compact luxury
              rail experience with a genuine sense of place.
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
            <p className="mt-3 text-2xl font-semibold">2 nights / 3 days</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Route
            </p>
            <p className="mt-3 text-2xl font-semibold">Pretoria to Durban</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Style
            </p>
            <p className="mt-3 text-2xl font-semibold">Luxury rail safari</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/journeys/rovos-rail/General/RVR-RoomService1-HRes.jpg"
              alt="Rovos Rail room service"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              The Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Elegant comfort between wild landscapes
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Onboard, the pace is calm and indulgent. Days unfold through
              polished service, fine dining, observation-car views and the
              nostalgic atmosphere that has made Rovos Rail one of the
              world&apos;s great luxury train experiences.
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
                  Comfortable and beautifully appointed accommodation, ideal
                  for shorter Rovos Rail journeys.
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
                  Spacious suites with a seating area, elegant décor and
                  private en-suite facilities.
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
                  The largest and most luxurious accommodation on Rovos Rail,
                  with exceptional comfort throughout.
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
            A compact journey with real variety
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">KwaZulu-Natal</h3>
              <p className="mt-4 text-white/70">
                Travel through one of South Africa&apos;s most distinctive
                regions, rich in culture, scenery and history.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Safari element</h3>
              <p className="mt-4 text-white/70">
                Enjoy a rail journey with a genuine wildlife and wilderness
                feel, without needing a long itinerary.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">
                Luxury onboard living
              </h3>
              <p className="mt-4 text-white/70">
                Fine dining, private suites and classic observation-car views
                create a properly indulgent short escape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JourneyTimeline
        title="Pretoria to Durban"
        introduction="A two-night rail safari through KwaZulu-Natal, combining wildlife, battlefield history and the landscapes of the Drakensberg foothills."
        days={[
          {
            day: "Day 1",
            title: "Pretoria",
            description:
              "Board Rovos Rail at Capital Park Station in Pretoria and settle into your suite as the train begins its journey towards KwaZulu-Natal. Enjoy the relaxed rhythm of lunch, afternoon tea and dinner on board.",
            image:
              "/journeys/rovos-rail/General/RVR-RoomService1-HRes.jpg",
          },
          {
            day: "Day 2",
            title: "Nambiti & Spionkop",
            description:
              "Experience the wildlife of Nambiti, a Big Five reserve set in malaria-free bushveld, and discover the dramatic landscapes and history of Spionkop, with either a battlefield visit or game-viewing experience depending on the programme.",
            image:
              "/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg",
          },
          {
            day: "Day 3",
            title: "Ardmore & Durban",
            description:
              "Visit Ardmore Ceramics in the foothills of the Drakensberg Mountains before travelling through the Valley of a Thousand Hills and completing the journey in Durban.",
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
            Pretoria to Durban
          </h2>

          <img
            src="/journeys/rovos-rail/maps/durban-safari-map.jpg"
            alt="Rovos Rail Durban Safari route map"
            className="w-full rounded-[2rem] border border-white/10 bg-white"
          />
        </div>
      </section>

<section id="enquire" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Ready to experience the Durban Safari?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about departure dates, availability, suite
            options and creating a tailor-made South Africa rail and safari
            journey.
          </p>

          <a
            href="mailto:ant@outsyda.com?subject=Durban%20Safari%20Enquiry"
            className="mt-10 inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
          >
            Enquire About Durban Safari
          </a>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}