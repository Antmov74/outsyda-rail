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

      <FinancialProtection />
      <Footer />
    </main>
  );
}