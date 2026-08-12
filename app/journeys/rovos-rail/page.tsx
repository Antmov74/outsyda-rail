import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rovos Rail | Outsyda Rail",
  description:
    "Explore Rovos Rail luxury train journeys through Southern Africa with Outsyda Rail.",
};

export default function RovosRailPage() {
  const routes = [
    {
      title: "Cape Town Journey",
    duration: "3 nights / 4 days",
      price: "Guide Price From £1,950pp",
      href: "/journeys/rovos-rail/cape-town-journey",
      image: "/journeys/rovos-rail/Hero Images/RVR-HexRiverValley3-HRes.jpg",
      copy: "A classic journey between Pretoria and Cape Town through some of South Africa’s most memorable scenery.",
    },
    {
      title: "Victoria Falls",
      duration: "3 nights / 4 days",
      price: "Guide Price From £2,450pp",
      href: "/journeys/rovos-rail/victoria-falls",
      image: "/journeys/rovos-rail/elephant.jpg",
      copy: "Luxury rail travel to one of Africa’s most iconic natural wonders.",
    },
    {
      title: "Durban Safari",
      duration: "2 nights / 3 days",
      price: "Guide Price From £2,950pp",
      href: "/journeys/rovos-rail/durban-safari",
      image: "/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg",
      copy: "Combine refined rail travel with a safari-flavoured route through KwaZulu-Natal.",
    },
    {
      title: "Southern Cross",
      duration: "11 nights / 12 days",
      price: "Guide Price From £4,950pp",
      href: "/journeys/rovos-rail/southern-cross",
      image: "/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg",
      copy: "An epic Southern African rail journey linking landscapes, cities and wildlife regions.",
    },
  ];

  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-[86vh] overflow-hidden">
        <img
          src="/journeys/rovos-rail/Hero Images/RVR-HexRiverValley3-HRes.jpg"
          alt="Rovos Rail train in South Africa"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 py-24">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#ff6b5f]">
            Rovos Rail
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight md:text-7xl">
            The Pride of Africa.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Step aboard one of the world’s great luxury trains and explore
            Southern Africa in classic style, with private suites, fine dining
            and unforgettable landscapes.
          </p>

          <a
            href="#routes"
            className="mt-10 inline-block w-fit rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            View Journeys
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            The Experience
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Luxury rail with real atmosphere.
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            Rovos Rail is about more than getting from one place to another.
            Days unfold through polished service, elegant dining, observation
            car views and a slower rhythm of travel.
          </p>

          <p className="mt-5 leading-8 text-white/70">
            From short South African classics to longer cross-border journeys,
            each route can be shaped with hotel stays, safaris and tailor-made
            extensions.
          </p>
        </div>

        <img
          src="/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg"
          alt="Rovos Rail observation car"
          className="h-[460px] w-full rounded-[2rem] object-cover"
        />
      </section>

      <section id="routes" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Journeys
          </p>

          <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
            Choose your Rovos Rail route.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {routes.map((route) => (
              <a
                key={route.title}
                href={route.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black transition hover:border-[#ff6b5f]/60"
              >
                <img
                  src={route.image}
                  alt={route.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-7">
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                    {route.duration}
                  </p>

                  <h3 className="text-3xl font-light">{route.title}</h3>

                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {route.price}
                  </p>

                  <p className="mt-4 leading-7 text-white/65">{route.copy}</p>
                </div>
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