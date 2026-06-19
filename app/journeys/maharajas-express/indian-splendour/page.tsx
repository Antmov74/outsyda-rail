import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function IndianSplendourPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/maharajas-express/1.Train Exterior.jpg"
          alt="The Indian Splendour"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Maharajas&apos; Express
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              The Indian Splendour
            </h1>

            <p className="mt-8 text-xl text-white/80">
              A luxury rail journey through India&apos;s palaces, wildlife reserves,
              royal cities and iconic landmarks.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                From US$8,400 pp
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Deluxe Cabin • Twin Share
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            6 Nights / 7 Days
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Delhi to Mumbai in Royal Style
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            The Indian Splendour is one of the signature Maharajas&apos; Express
            journeys, combining the Taj Mahal, Ranthambore National Park,
            Jaipur, Bikaner, Jodhpur and Udaipur before arriving into Mumbai.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">
            Experience royal palaces, tiger safaris, luxury rail travel,
            exceptional dining and some of India&apos;s most iconic destinations.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Itinerary Highlights
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            Day by Day Journey
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/maharajas-express/agra/2.jpg"
                alt="Agra"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  Day 1–2
                </p>

                <h3 className="mb-4 text-3xl font-light">
                  Delhi & Agra
                </h3>

                <p className="text-white/70">
                  Board the Maharajas&apos; Express in Delhi before travelling to
                  Agra to experience the magnificent Taj Mahal and Mughal heritage.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/maharajas-express/ranthambore/3.JPG"
                alt="Ranthambore"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  Day 3
                </p>

                <h3 className="mb-4 text-3xl font-light">
                  Ranthambore
                </h3>

                <p className="text-white/70">
                  Head into Ranthambore National Park for a safari experience in
                  one of India&apos;s most famous tiger reserves.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/maharajas-express/jaipur/1.JPG"
                alt="Jaipur"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  Day 4–5
                </p>

                <h3 className="mb-4 text-3xl font-light">
                  Jaipur & Bikaner
                </h3>

                <p className="text-white/70">
                  Discover Rajasthan&apos;s royal cities, colourful markets,
                  palaces, forts and desert landscapes.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/journeys/maharajas-express/Rajah club  2.jpg"
                alt="Maharajas Express onboard lounge"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  Day 6–7
                </p>

                <h3 className="mb-4 text-3xl font-light">
                  Jodhpur, Udaipur & Mumbai
                </h3>

                <p className="text-white/70">
                  Explore India&apos;s great royal cities before concluding your
                  journey in Mumbai after an unforgettable week aboard the
                  Maharajas&apos; Express.
                </p>
              </div>
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
              The Indian Splendour Route
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Follow the journey from Delhi through Agra, Ranthambore, Jaipur,
              Bikaner, Jodhpur and Udaipur before reaching Mumbai.
            </p>
          </div>

                      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <img
               src="/journeys/maharajas-express/maps/indian-splendour-map.png"
                alt="Map showing The Indian Splendour route on the Maharajas Express"
                className="w-full rounded-2xl"
              />
            </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Ready to Experience The Indian Splendour?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about luxury rail journeys aboard the
            Maharajas&apos; Express, including private extensions, hotel stays
            and tailor-made India travel arrangements.
          </p>

          <a
            href="mailto:ant@outsyda.com"
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