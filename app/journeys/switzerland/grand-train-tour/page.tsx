import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function GrandTrainTourPage() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrive in Lucerne",
      description:
        "Travel by rail to Lucerne and settle into your lakeside hotel. Explore the old town, Chapel Bridge and waterfront at your own pace.",
    },
    {
      day: "Day 2",
      title: "Lucerne to Interlaken",
      description:
        "Travel aboard the Luzern–Interlaken Express through mountain scenery, beside turquoise lakes and across the Brünig Pass to Interlaken.",
    },
    {
      day: "Day 3",
      title: "GoldenPass Express to Montreux",
      description:
        "Continue through the Bernese Oberland and Gstaad aboard the GoldenPass Express before descending towards Lake Geneva and Montreux.",
    },
    {
      day: "Day 4",
      title: "Montreux to Zermatt",
      description:
        "Travel from the Swiss Riviera into the mountains and arrive in car-free Zermatt. Enjoy time beneath the Matterhorn and explore the alpine village.",
    },
    {
      day: "Day 5",
      title: "Glacier Express to St Moritz",
      description:
        "Board the Glacier Express for the full-day panoramic journey across the Swiss Alps, travelling through the Rhine Gorge and over the Oberalp Pass to St Moritz.",
    },
    {
      day: "Day 6",
      title: "Bernina Express to Tirano",
      description:
        "Cross the Bernina Pass aboard the Bernina Express, passing glaciers, mountain lakes and the Brusio Spiral Viaduct before arriving in Tirano, Italy.",
    },
    {
      day: "Day 7",
      title: "St Moritz to Zurich",
      description:
        "Return through the spectacular Albula landscapes and continue to Zurich. Spend your final evening exploring Switzerland’s largest city.",
    },
    {
      day: "Day 8",
      title: "Depart or Extend",
      description:
        "Depart from Zurich or extend your holiday with additional nights, mountain experiences, lake cruises or a journey into a neighbouring country.",
    },
  ];

  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/switzerland/images/grand-train-tour-hero.jpg"
          alt="Grand Train Tour of Switzerland"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-[60] mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">
          <div className="max-w-3xl">
            <a
              href="/journeys/switzerland"
              className="mb-10 inline-flex w-fit text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b5f] transition hover:text-white"
            >
              ← Back to Switzerland
            </a>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Switzerland
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Grand Train Tour of Switzerland
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              The ultimate Swiss rail adventure, combining the country&apos;s
              most iconic panoramic trains, mountain regions, lakes and cities
              into one unforgettable journey.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                7 Nights / 8 Days
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Lucerne • Interlaken • Montreux • Zermatt • St Moritz • Zurich
              </p>
            </div>

            <a
              href="#enquire"
              className="mt-8 inline-flex w-fit rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            The Journey
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Switzerland&apos;s ultimate rail itinerary
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            The Grand Train Tour connects many of Switzerland&apos;s most famous
            rail experiences into one seamless itinerary. Travellers experience
            panoramic trains, alpine resorts, lake scenery, mountain landscapes
            and elegant Swiss hospitality across multiple regions.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">
            This eight-day itinerary combines several celebrated routes while
            remaining completely tailor-made. Extra nights can be added wherever
            you want more time to explore.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Suggested Itinerary
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Your Grand Train Tour, day by day
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {itinerary.map((item) => (
              <div
                key={item.day}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  {item.day}
                </p>

                <h3 className="text-2xl font-light">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Why choose the Grand Train Tour?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Multiple Iconic Routes
              </h3>

              <p className="text-white/70">
                Combine the Glacier Express, Bernina Express, GoldenPass Express
                and Luzern–Interlaken Express in one trip.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Switzerland in Depth
              </h3>

              <p className="text-white/70">
                Experience mountain villages, lakeside towns, cosmopolitan
                cities and some of Europe&apos;s finest alpine scenery.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Fully Tailor-Made
              </h3>

              <p className="text-white/70">
                Extend the itinerary with luxury hotels, lake cruises, mountain
                railways, spa stays and additional Swiss experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Route Map
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Grand Train Tour of Switzerland
          </h2>

          <p className="mb-12 max-w-4xl text-lg leading-relaxed text-white/70">
            Follow a sweeping route through Switzerland&apos;s lakeside cities,
            alpine resorts, mountain passes and most celebrated panoramic
            railways.
          </p>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white p-4 shadow-2xl">
            <img
              src="/journeys/switzerland/maps/grand-train-tour-map.png"
              alt="Map showing the Grand Train Tour of Switzerland route"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Ready to experience Switzerland by rail?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about journey dates, Swiss rail passes,
            panoramic train reservations, hotel options and tailor-made alpine
            extensions.
          </p>

          <a
            href="mailto:ant@outsyda.com?subject=Grand%20Train%20Tour%20of%20Switzerland%20Enquiry"
            className="inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white"
          >
            Enquire About the Grand Train Tour
          </a>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}