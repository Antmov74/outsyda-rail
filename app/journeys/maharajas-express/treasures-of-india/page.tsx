import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function TreasuresOfIndiaPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/journeys/maharajas-express/EXTERIOR.JPG"
          alt="Treasures of India"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl"><a
  href="/journeys/maharajas-express"
  className="mb-10 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-[#ff6b5f]"
>
  ← Back to Maharajas&apos; Express
</a>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Maharajas&apos; Express
            </p>
<h1 className="text-5xl font-light md:text-6xl">
            
              Treasures of India
            </h1>

            <p className="mt-8 text-xl text-white/80">
              A luxury rail journey featuring Delhi, Agra, Ranthambore and Jaipur,
              showcasing some of India&apos;s greatest cultural treasures.
            </p>              <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                  From US$5,300 pp
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
            3 Nights / 4 Days
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            India&apos;s Golden Triangle & Wildlife
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            Experience the Taj Mahal, tiger safaris in Ranthambore and the royal
            city of Jaipur aboard the legendary Maharajas&apos; Express.
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
            {[
              {
                day: "Day 1",
                title: "Delhi & Agra",
                image: "/journeys/maharajas-express/agra/2.jpg",
                alt: "Agra",
                text: "Begin in Delhi before travelling to Agra to experience the Taj Mahal and the grandeur of Mughal India.",
              },
              {
                day: "Day 2",
                title: "Ranthambore",
                image: "/journeys/maharajas-express/ranthambore/3.JPG",
                alt: "Ranthambore",
                text: "Enjoy an exciting wildlife safari in Ranthambore National Park, home to Bengal tigers and spectacular Indian wildlife.",
              },
              {
                day: "Day 3",
                title: "Jaipur",
                image: "/journeys/maharajas-express/jaipur/DSC_6500.JPG",
                alt: "Jaipur",
                text: "Explore the Pink City, its magnificent palaces, vibrant markets and rich Rajput heritage.",
              },
              {
                day: "Day 4",
                title: "Delhi",
                image: "/journeys/maharajas-express/EXTERIOR.JPG",
                alt: "Delhi",
                text: "Return to Delhi and conclude your Treasures of India journey after experiencing the Taj Mahal, tiger safaris and Rajasthan's royal heritage.",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                    {item.day}
                  </p>
<h3 className="mb-4 text-2xl font-light">
                  
                    {item.title}
                  </h3>

                  <p className="text-white/70">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
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
                The Treasures of India Route
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Follow the journey from Delhi through Agra, Ranthambore and
                Jaipur before returning to Delhi.
              </p>
            </div>

                          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white p-4 shadow-2xl">
                <img
                  src="/journeys/maharajas-express/maps/treasures-of-india-map.png"
                  alt="Map showing the Treasures of India route on the Maharajas Express"
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
            Ready to Experience Treasures of India?
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
