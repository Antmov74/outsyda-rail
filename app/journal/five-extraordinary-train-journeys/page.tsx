import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinancialProtection from "@/components/FinancialProtection";

export const metadata: Metadata = {
  title: "Five Extraordinary Train Journeys | Outsyda Rail",
  description:
    "Discover the Glacier Express, Maharajas’ Express, Royal Scotsman, Rovos Rail and Venice Simplon-Orient-Express.",
};

const journeys = [
  {
    name: "Glacier Express",
    location: "Switzerland",
    route: "Zermatt to St. Moritz",
    image:
      "/journeys/switzerland/heroes/ST_3x2_Realp-Glacier-Express_15998.jpg",
    href: "/journeys/switzerland/glacier-express",
    paragraphs: [
      "Often described as the world’s slowest express train, the Glacier Express takes approximately eight hours to cross the Swiss Alps between Zermatt and St. Moritz.",
      "The journey begins beneath the unmistakable peak of the Matterhorn before travelling through deep valleys, Alpine villages and some of Switzerland’s most impressive railway engineering.",
      "Along the way, the train reaches the Oberalp Pass at 2,033 metres above sea level, travels through the dramatic Rhine Gorge and crosses the curved arches of the Landwasser Viaduct before entering the mountainside through a tunnel.",
      "Panoramic windows keep the landscape firmly at the centre of the experience. Excellence Class adds a more exclusive atmosphere, with spacious seating and an enhanced dining service delivered as Switzerland unfolds outside.",
    ],
  },
  {
    name: "Maharajas’ Express",
    location: "India",
    route: "Luxury journeys through Rajasthan and northern India",
    image:
      "/Maharajas Express Exteriors/61. Guests de-boarding from Maharajas_ Express.JPG",
    href: "/journeys/maharajas-express",
    paragraphs: [
      "The Maharajas’ Express brings the splendour of India’s royal past onto the rails.",
      "Its itineraries connect some of the country’s most celebrated destinations, with journeys incorporating places such as Delhi, Agra, Jaipur, Udaipur, Jodhpur and Ranthambore.",
      "Depending on the itinerary, experiences may include visiting the Taj Mahal, exploring palaces and forts, discovering historic cities and searching for Bengal tigers.",
      "Back aboard the train, richly decorated cabins and suites create the feeling of a private travelling palace, with fine dining, lounge and bar cars and attentive service throughout.",
    ],
  },
  {
    name: "Royal Scotsman",
    location: "Scotland",
    route: "Round-trip journeys from Edinburgh into the Highlands",
    image: "/journeys/belmond/royal-scotsman/TRS-EXT-60.jpg",
    href: "/journeys/belmond/royal-scotsman",
    paragraphs: [
      "Royal Scotsman proves that one of the world’s great railway adventures can begin much closer to home.",
      "Departing from Edinburgh, its journeys travel into the Scottish Highlands and western landscapes on itineraries ranging from shorter escapes to longer explorations.",
      "Days can include guided walks, historic estates, whisky tastings and visits to castles or remote communities, depending on the chosen itinerary.",
      "On board, intimate wood-panelled cabins, elegant dining cars and the Observation Car create the atmosphere of a private country house in motion. Its open veranda provides one of the most memorable places from which to watch the Highlands pass by.",
    ],
  },
  {
    name: "Rovos Rail",
    location: "Southern Africa",
    route: "South Africa and journeys across the African continent",
    image:
      "/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg",
    href: "/journeys/rovos-rail",
    paragraphs: [
      "Rovos Rail offers something few other luxury trains can match: the opportunity to experience the scale and variety of Africa from the rails.",
      "Departing from its private station in Pretoria, the train operates journeys including Cape Town, Durban Safari and Victoria Falls, alongside longer expeditions through southern and eastern Africa.",
      "Depending on the route, passengers may encounter vast grasslands, mountain passes, historic towns, wildlife regions and landscapes that would otherwise require several separate journeys to experience.",
      "Restored coaches, elegant dining cars, comfortable suites and a relaxed pace recall an earlier age of travel. The rear Observation Car, with its open-air balcony, offers an extraordinary viewpoint.",
    ],
  },
  {
    name: "Venice Simplon-Orient-Express",
    location: "Europe",
    route: "Paris, Venice and other great European cities",
    image: "/journeys/belmond/vsoe/VSOE-EXT-20.jpg",
    href: "/journeys/belmond/venice-simplon-orient-express",
    paragraphs: [
      "Few trains carry the history, glamour and sense of occasion of the Venice Simplon-Orient-Express.",
      "Its restored vintage carriages transport passengers into the Golden Age of rail travel, with intricate marquetry, polished craftsmanship, elegant restaurant cars and evenings that genuinely invite you to dress for dinner.",
      "The classic overnight journey connects Paris and Venice, while other departures link cities including Vienna, Budapest, Prague, Florence and Istanbul.",
      "Accommodation ranges from beautifully restored Historic Cabins to larger Suites and Grand Suites. This is not simply transportation between two cities—the entire journey is theatrical, romantic and deliberately unlike modern travel.",
    ],
  },
];

export default function TrainJourneysArticle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section
        className="relative flex min-h-[760px] items-end overflow-hidden px-6 pb-20 pt-40"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,.35), rgba(0,0,0,.15)), url('/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Outsyda Rail Journal
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight md:text-7xl">
            Five extraordinary train journeys worth travelling the world for
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
            Some trains simply take you somewhere. Others become the reason for
            travelling in the first place.
          </p>
        </div>
      </section>

      <article className="bg-black px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xl leading-9 text-white/75">
            The finest railway journeys combine extraordinary landscapes with
            a slower, more immersive way of seeing the world. Instead of flying
            over mountains, deserts and remote communities, you travel through
            them—watching the landscape change while enjoying exceptional
            food, comfortable accommodation and attentive service.
          </p>

          <p className="mt-6 text-xl leading-9 text-white/75">
            These are five remarkable rail journeys available through Outsyda
            Rail.
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-7xl space-y-28">
          {journeys.map((journey, index) => (
            <section
              key={journey.name}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={journey.image}
                    alt={journey.name}
                    className="aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className={index % 2 ? "lg:order-1" : ""}>
                <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                  {journey.location}
                </p>

                <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
                  {journey.name}
                </h2>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  {journey.route}
                </p>

                <div className="mt-8 space-y-5">
                  {journey.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-white/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Link
                  href={journey.href}
                  className="mt-9 inline-flex rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Explore {journey.name}
                </Link>
              </div>
            </section>
          ))}
        </div>
      </article>

      <section className="bg-[#0b0b0b] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
            Which railway journey is right for you?
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Tell us what you want to experience, how long you would like to
            travel and what matters most to you. We’ll turn the railway journey
            into a complete adventure.
          </p>

          <a
            href="mailto:ant@outsyda.com?subject=Luxury rail journey enquiry"
            className="mt-10 inline-flex rounded-full bg-[#ff6b5f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white"
          >
            Start Your Enquiry
          </a>

          <div className="mt-8">
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-white"
            >
              ← Back to Outsyda Rail
            </Link>
          </div>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}