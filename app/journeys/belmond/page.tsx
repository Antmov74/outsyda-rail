import Link from "next/link";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Belmond Luxury Rail Journeys | Outsyda Rail",
  description:
    "Explore iconic Belmond luxury rail journeys including the Venice Simplon-Orient-Express, Britannic Explorer, Royal Scotsman and Eastern & Oriental Express.",
};

export default function BelmondPage() {
  const journeys = [
    {
      title: "Venice Simplon-Orient-Express",
      subtitle: "Europe",
      description:
        "Step aboard one of the world's most legendary trains for an unforgettable journey through Europe, combining Art Deco glamour, fine dining and timeless service.",
      image: "/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg",
      href: "/journeys/belmond/venice-simplon-orient-express",
    },
    {
      title: "Britannic Explorer",
      subtitle: "England & Wales",
      description:
        "A new era of British luxury rail travel, combining contemporary design, exceptional cuisine and immersive journeys through some of Britain's most beautiful landscapes.",
      image:
        "/journeys/belmond/britannic-explorer/BEX-200426-EXT-04.jpg",
      href: "/journeys/belmond/britannic-explorer",
    },
    {
      title: "Royal Scotsman",
      subtitle: "Scotland",
      description:
        "Travel deep into the Scottish Highlands aboard an intimate luxury train where dramatic landscapes, fine dining and carefully curated excursions define the journey.",
      image: "/journeys/belmond/royal-scotsman/TRS-EXT-60.jpg",
      href: "/journeys/belmond/royal-scotsman",
    },
    {
      title: "Eastern & Oriental Express",
      subtitle: "Southeast Asia",
      description:
        "A glamorous journey through Southeast Asia, combining tropical scenery, refined cabins, exceptional dining and immersive cultural experiences.",
      image:
        "/journeys/belmond/vsoe/VSOE-EXT-20.jpg",
      href: "/journeys/eastern-oriental-express",
    },
  ];

  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg"
          alt="Venice Simplon-Orient-Express"
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#ff6b5f]">
              Belmond Journeys
            </p>

            <h1 className="text-5xl font-light leading-tight md:text-7xl">
              Legendary journeys. Timeless travel.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              From the Venice Simplon-Orient-Express to the Royal Scotsman,
              Britannic Explorer and Eastern & Oriental Express, Belmond brings
              together some of the world&apos;s most iconic luxury rail
              experiences.
            </p>

            <a
              href="#collection"
              className="mt-10 inline-flex rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Explore the Collection
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              The Belmond Collection
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Rail journeys with a sense of occasion
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Belmond has created some of the most celebrated luxury trains in
              the world, combining distinctive design, outstanding service and
              journeys that turn travel itself into the experience.
            </p>

            <p>
              From European icons to Highland adventures and tropical rail
              journeys through Southeast Asia, each train has its own character
              while sharing the same attention to detail and sense of theatre.
            </p>
          </div>
        </div>
      </section>

      <section id="collection" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Featured Journeys
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-light md:text-5xl">
            Choose your Belmond journey
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {journeys.map((journey) => (
              <Link
                key={journey.title}
                href={journey.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black transition hover:border-white/30"
              >
                <div className="overflow-hidden">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                    {journey.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-light">
                    {journey.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/70">
                    {journey.description}
                  </p>

                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-white transition group-hover:text-[#ff6b5f]">
                    Explore Journey →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <img
            src="/journeys/belmond/vsoe/VSOE-REST-52.jpg"
            alt="Dining aboard the Venice Simplon-Orient-Express"
            className="h-[480px] w-full rounded-[2rem] object-cover"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Life On Board
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              The journey is the destination
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              Fine dining, beautifully designed cabins, attentive service and
              atmospheric lounge cars transform every journey into something
              far more memorable than simply travelling from A to B.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              Outsyda Rail can help with journey selection, cabin options,
              extensions and complete tailor-made itineraries around your
              Belmond experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-black p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Beyond the Rails
              </p>

              <h2 className="mt-4 text-3xl font-light md:text-4xl">
                Belmond Luxury Barges
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Slow the pace even further with Belmond&apos;s luxury barges
                through France, combining intimate onboard living, regional
                cuisine, vineyards and beautiful waterways.
              </p>

              <p className="mt-7 text-sm uppercase tracking-[0.2em] text-white/60">
                Coming to Outsyda Rail
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Tailor-Made
              </p>

              <h2 className="mt-4 text-3xl font-light md:text-4xl">
                Extend the journey
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Combine your train journey with exceptional hotels, private
                transfers and carefully chosen stays before or after your rail
                experience.
              </p>

              <a
                href="mailto:ant@outsyda.com?subject=Belmond Journey Enquiry"
                className="mt-8 inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Start Planning
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Which Belmond journey is right for you?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about routes, journey dates, accommodation
            options and creating a complete luxury rail itinerary.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ant@outsyda.com?subject=Belmond Journey Enquiry"
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