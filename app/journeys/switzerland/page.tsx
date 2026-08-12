import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function SwitzerlandJourneyPage() {
  const journeys = [
    {
      title: "Glacier Express",
      href: "/journeys/switzerland/glacier-express",
      image:
        "/journeys/switzerland/heroes/ST_3x2_Realp-Glacier-Express_15998.jpg",
      copy: "The classic alpine rail journey between Zermatt and St Moritz.",
    },
    {
      title: "Bernina Express",
      href: "/journeys/switzerland/bernina-express",
      image:
        "/journeys/switzerland/heroes/ST_3x2_Alp-Gruem-Bernina-Express_54059.jpg",
      copy: "A dramatic UNESCO-listed rail route through glaciers, viaducts and Italian-speaking Switzerland.",
    },
    {
      title: "GoldenPass Express",
      href: "/journeys/switzerland/goldenpass-express",
      image:
        "/journeys/switzerland/heroes/ST_3x2_Montbovon-GoldenPass_138725.jpg",
      copy: "A panoramic journey linking Montreux, Gstaad and Interlaken.",
    },
    {
      title: "Grand Train Tour of Switzerland",
      href: "/journeys/switzerland/grand-train-tour",
      image:
        "/journeys/switzerland/heroes/ST_Filisur-Landwasser-Viaduct_126672.jpg",
      copy: "A multi-route rail adventure connecting Switzerland's most iconic scenic lines.",
    },
  ];

  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/switzerland/heroes/ST_3x2_Zermatt-Gornergrat-Railway_130440.jpg"
          alt="Switzerland by rail"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Switzerland
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Iconic Swiss rail journeys, curated properly.
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              From the Glacier Express and Bernina Express to the GoldenPass
              Express and Grand Train Tour of Switzerland, explore the
              country&apos;s most scenic rail routes with Outsyda Rail.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Swiss Rail Collection
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Switzerland works best when the route is built around the scenery.
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            Switzerland is one of the world&apos;s great rail destinations,
            combining precise connections, panoramic trains, mountain resorts,
            lakeside towns and elegant hotels. We shape the route, pace and
            accommodation around how each traveller wants to experience the
            Alps.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Featured Swiss Journeys
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Start with Switzerland&apos;s great rail routes.
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {journeys.map((journey) => (
              <a
                key={journey.title}
                href={journey.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black transition hover:border-[#ff6b5f]/60"
              >
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-6">
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                    Switzerland
                  </p>

                  <h3 className="text-2xl font-light">{journey.title}</h3>

                  <p className="mt-4 leading-7 text-white/65">
                    {journey.copy}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Ready to explore Switzerland by rail?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about Swiss rail journeys, scenic routes,
            mountain hotels and tailor-made alpine travel arrangements.
          </p>

          <a
            href="mailto:ant@outsyda.com?subject=Switzerland%20Rail%20Enquiry"
            className="inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}