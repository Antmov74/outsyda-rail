import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function GoldenPassExpressPage() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrive in Montreux",
      description:
        "Travel by rail to Montreux and settle into your hotel beside Lake Geneva. Spend the evening exploring the promenade and enjoying the atmosphere of the Swiss Riviera.",
    },
    {
      day: "Day 2",
      title: "Discover Lake Geneva",
      description:
        "Enjoy a full day around Montreux, with options including Chillon Castle, a lake cruise, the Lavaux vineyards or a mountain railway journey.",
    },
    {
      day: "Day 3",
      title: "GoldenPass Express to Interlaken",
      description:
        "Board the GoldenPass Express for the panoramic journey through alpine valleys, chalet villages, Gstaad, Zweisimmen and Spiez before arriving in Interlaken.",
    },
    {
      day: "Day 4",
      title: "Explore the Bernese Oberland",
      description:
        "Use Interlaken as your base for a day in the mountains. Choose from Jungfraujoch, Grindelwald, Lauterbrunnen, Lake Brienz or another tailor-made alpine experience.",
    },
    {
      day: "Day 5",
      title: "Depart or Extend",
      description:
        "Continue by rail to Lucerne, Zurich, Zermatt or another Swiss destination, or extend your stay with additional nights in the Bernese Oberland.",
    },
  ];

  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/switzerland/images/goldenpass-express-hero.jpg"
          alt="GoldenPass Express travelling through Switzerland"
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
              GoldenPass Express
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              A panoramic journey linking Montreux, Gstaad and Interlaken,
              combining lake views, alpine villages and classic Swiss scenery.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                4 Nights / 5 Days
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Montreux • Gstaad • GoldenPass Express • Interlaken
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
            From Lake Geneva to the Bernese Oberland
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            The GoldenPass Express links the elegance of Montreux with the
            alpine charm of Gstaad and the mountain gateway of Interlaken. It is
            a relaxed, scenic journey that works beautifully as part of a wider
            Swiss rail holiday.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">
            This five-day tailor-made itinerary includes time beside Lake Geneva
            and in the Bernese Oberland, allowing the panoramic train journey to
            sit at the heart of a properly paced Swiss holiday.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Suggested Itinerary
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Your GoldenPass Express journey, day by day
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
            Why travel on the GoldenPass Express?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Lake Geneva</h3>

              <p className="text-white/70">
                Begin beside one of Switzerland&apos;s most beautiful lakes,
                with Montreux offering a refined Riviera atmosphere.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">Alpine Villages</h3>

              <p className="text-white/70">
                Travel through classic Swiss landscapes, including mountain
                villages, valleys and chalet-lined scenery.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Flexible Itineraries
              </h3>

              <p className="text-white/70">
                Combine the route with Lucerne, Zermatt, Jungfrau experiences
                or luxury lake and mountain hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Route Map
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              GoldenPass Express Route
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Follow the spectacular journey from Montreux on Lake Geneva
              through Gstaad, Zweisimmen and Spiez before arriving in
              Interlaken, linking vineyards, alpine valleys and some of
              Switzerland&apos;s most iconic scenery.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white p-4 shadow-2xl">
            <img
              src="/journeys/switzerland/maps/goldenpass-express-map.png"
              alt="Map showing the GoldenPass Express route from Montreux to Interlaken"
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
            Ready to experience the GoldenPass Express?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about journey dates, rail tickets, hotel
            options and tailor-made extensions across Switzerland.
          </p>

          <a
            href="mailto:ant@outsyda.com?subject=GoldenPass%20Express%20Enquiry"
            className="inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white"
          >
            Enquire About GoldenPass Express
          </a>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}