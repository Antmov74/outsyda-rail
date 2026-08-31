import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function MaharajasExpressPage() {
  const journeys = [
    {
      title: "The Indian Splendour",
      duration: "6 nights / 7 days",
      price: "From US$8,400 pp",
      href: "/journeys/maharajas-express/indian-splendour",
    },
    {
      title: "The Heritage of India",
      duration: "6 nights / 7 days",
      price: "From US$8,800 pp",
      href: "/journeys/maharajas-express/heritage-of-india",
    },
    {
      title: "The Indian Panorama",
      duration: "6 nights / 7 days",
      price: "From US$8,400 pp",
      href: "/journeys/maharajas-express/indian-panorama",
    },
    {
      title: "Treasures of India",
      duration: "3 nights / 4 days",
      price: "From US$5,300 pp",
      href: "/journeys/maharajas-express/treasures-of-india",
    },
  ];

  const seasons = [
    {
      label: "2026–27",
      departures: [
        { journey: "The Indian Panorama", dates: "4 Oct; 1 & 29 Nov; 27 Dec 2026; 24 Jan; 21 Feb; 21 Mar 2027" },
        { journey: "The Indian Splendour", dates: "11 Oct; 8 Nov; 6 Dec 2026; 3 & 31 Jan; 28 Feb; 28 Mar 2027" },
        { journey: "The Heritage of India", dates: "18 Oct; 15 Nov; 13 Dec 2026; 10 Jan; 7 Feb; 7 Mar; 4 Apr 2027" },
        { journey: "Treasures of India", dates: "30 Sep; 25 Oct; 22 Nov; 20 Dec 2026; 17 Jan; 14 Feb; 14 Mar 2027" },
      ],
    },
    {
      label: "2027–28",
      departures: [
        { journey: "The Indian Panorama", dates: "3 & 31 Oct; 28 Nov; 26 Dec 2027; 23 Jan; 20 Feb; 19 Mar; 9 Apr 2028" },
        { journey: "The Indian Splendour", dates: "10 Oct; 7 Nov; 5 Dec 2027; 2 & 30 Jan; 27 Feb; 26 Mar 2028" },
        { journey: "The Heritage of India", dates: "17 Oct; 14 Nov; 12 Dec 2027; 9 Jan; 6 Feb; 5 Mar; 2 Apr 2028" },
        { journey: "Treasures of India", dates: "24 Oct; 21 Nov; 19 Dec 2027; 16 Jan; 13 Feb; 12 Mar 2028" },
      ],
    },
  ];

  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/maharajas-express/EXTERIOR.JPG"
          alt="Maharajas Express"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Luxury Rail India
            </p>

            <h1 className="text-5xl font-light tracking-tight md:text-7xl">
              Maharajas&apos; Express
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-white/80">
              A royal rail journey through India, combining elegant cabins,
              fine dining, private excursions and some of the country&apos;s most
              iconic destinations.
            </p>

            <a
              href="/#enquire"
              className="mt-10 inline-block rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              About The Journey
            </p>

            <h2 className="mb-8 text-4xl font-light md:text-5xl">
              India&apos;s Most Luxurious Train
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-white/70">
              The Maharajas&apos; Express offers one of the world&apos;s most
              exclusive rail journeys, combining elegant accommodation, fine
              dining and curated excursions across India&apos;s most fascinating
              destinations.
            </p>

            <p className="text-lg leading-relaxed text-white/70">
              From the palaces of Rajasthan and the wilderness of Ranthambore
              to the iconic Taj Mahal, every journey is designed to immerse
              guests in India&apos;s history, culture and grandeur.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/journeys/maharajas-express/living room presidential suit.jpg"
              alt="Maharajas Express Presidential Suite"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Destinations
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              India&apos;s icons, experienced in style
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="/journeys/maharajas-express/agra"
              className="group relative block h-80 overflow-hidden rounded-3xl"
            >
              <img
                src="/journeys/maharajas-express/1.Train Exterior.jpg"
                alt="Agra"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-light">Agra</h3>
              </div>
            </a>

            <a
              href="/journeys/maharajas-express/jaipur"
              className="group relative block h-80 overflow-hidden rounded-3xl"
            >
              <img
                src="/journeys/maharajas-express/Rajah club  2.jpg"
                alt="Jaipur"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-light">Jaipur</h3>
              </div>
            </a>

            <a
              href="/journeys/maharajas-express/ranthambore"
              className="group relative block h-80 overflow-hidden rounded-3xl"
            >
              <img
                src="/journeys/maharajas-express/ranthambore/3.JPG"
                alt="Ranthambore"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-light">Ranthambore</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* JOURNEY COLLECTION */}
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Journey Collection
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Choose your royal route through India
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {journeys.map((journey) => (
              <a
                href={journey.href}
                key={journey.title}
                className="block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#ff6b5f] hover:bg-white/[0.06]"
              >
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  {journey.duration}
                </p>

                <p className="mb-2 text-xl font-light text-white">
                  {journey.price}
                </p>

                <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/50">
                  Deluxe Cabin • Twin Share
                </p>

                <h3 className="text-3xl font-light">{journey.title}</h3>

                <p className="mt-5 leading-7 text-white/65">
                  A carefully curated luxury rail journey combining India&apos;s
                  iconic cities, palaces, culture, wildlife and onboard
                  hospitality.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* 2026–28 DATES, FARES & CURRENT OFFER */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              2026–28 Seasons
            </p>
            <h2 className="text-4xl font-light md:text-5xl">
              Published fares and departure dates
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Choose from two published seasons, with four routes operating
              between September and April. Outsyda can check cabin availability
              and build flights, hotels and private touring around your journey.
            </p>
          </div>

          <div className="mb-14 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-white/[0.06] text-sm uppercase tracking-[0.2em] text-white/60">
                <tr>
                  <th className="px-6 py-5 font-medium">Journey</th>
                  <th className="px-6 py-5 font-medium">Deluxe</th>
                  <th className="px-6 py-5 font-medium">Junior Suite</th>
                  <th className="px-6 py-5 font-medium">Suite</th>
                  <th className="px-6 py-5 font-medium">Presidential Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/75">
                {[
                  ["Indian Splendour", "US$8,400", "US$10,700", "US$15,600", "US$26,800"],
                  ["Heritage of India", "US$8,800", "US$11,200", "US$15,600", "US$26,800"],
                  ["Indian Panorama", "US$8,400", "US$10,700", "US$15,600", "US$26,800"],
                  ["Treasures of India", "US$5,300", "US$5,700", "US$8,600", "US$14,600"],
                ].map((fare) => (
                  <tr key={fare[0]}>
                    {fare.map((value, index) => (
                      <td key={value} className={`px-6 py-5 ${index === 0 ? "text-white" : ""}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-16 max-w-4xl text-sm leading-6 text-white/50">
            Published US-dollar fares are per person, per journey, based on two
            guests sharing and apply to both the 2026–27 and 2027–28 seasons.
            Government taxes are extra. Fares, routes and departures remain
            subject to availability and change.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {seasons.map((season) => (
              <div key={season.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                  Season {season.label}
                </p>
                <div className="space-y-6">
                  {season.departures.map((item) => (
                    <div key={item.journey}>
                      <h3 className="text-xl font-light">{item.journey}</h3>
                      <p className="mt-2 leading-7 text-white/60">{item.dates}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#ff6b5f]/40 bg-[#ff6b5f]/10 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">Current offer</p>
            <h3 className="mt-4 text-3xl font-light">Your companion pays 50%</h3>
            <p className="mt-4 max-w-4xl leading-7 text-white/70">
              On the 30 September and 25 October 2026 Treasures of India
              departures, the second adult sharing the same cabin receives 50%
              off the adult fare when the first adult pays the full twin-share
              fare. Available across all cabin categories, subject to cabin
              availability and the operator&apos;s full terms.
            </p>
            <a
              href="mailto:ant@outsyda.com?subject=Maharajas%27%20Express%20companion%20offer"
              className="mt-7 inline-flex rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}