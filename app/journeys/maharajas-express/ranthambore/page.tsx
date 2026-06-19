import Image from "next/image";
import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function RanthamborePage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh]">
        <Image
          src="/journeys/maharajas-express/ranthambore/3.JPG"
          alt="Ranthambore National Park"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="uppercase tracking-[0.3em] text-[#ff6b5f] mb-4">
              Maharajas' Express
            </p>

            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Ranthambore
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-gray-200">
              One of India’s most celebrated wildlife reserves, where ancient
              forts, jungle landscapes and the elusive Bengal tiger create an
              unforgettable safari experience.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light mb-8">
          Into the Wild Heart of Rajasthan
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Ranthambore National Park is one of the highlights of the
            Maharajas’ Express journey through Rajasthan. Once the private
            hunting grounds of the Maharajas of Jaipur, the reserve is now one
            of India’s finest wildlife sanctuaries.
          </p>

          <p>
            The landscape is dramatic and varied, combining open grasslands,
            rocky ridges, dense forest and tranquil lakes beneath the imposing
            walls of the 10th-century Ranthambore Fort.
          </p>

          <p>
            The park is particularly famous for its Bengal tigers, which are
            among the most visible in India. Early morning game drives offer
            opportunities to spot tigers, leopards, sloth bears, crocodiles,
            deer and a remarkable variety of birdlife.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          <Image
            src="/journeys/maharajas-express/ranthambore/3.JPG"
            alt="Ranthambore Safari"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Experience */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-10">
            The Maharajas' Express Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl mb-4 text-[#ff6b5f]">
                Morning Safari
              </h3>

              <p className="text-gray-300">
                Venture deep into the reserve aboard a guided game drive in
                search of the park’s magnificent wildlife.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-[#ff6b5f]">
                Tiger Territory
              </h3>

              <p className="text-gray-300">
                Ranthambore offers some of the best opportunities in India to
                observe Bengal tigers in their natural habitat.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-[#ff6b5f]">
                Historic Landscapes
              </h3>

              <p className="text-gray-300">
                Ancient ruins, lakes and the spectacular Ranthambore Fort add
                a unique cultural dimension to the wildlife experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-light mb-6">
          Experience Ranthambore with Maharajas' Express
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Combine India’s most luxurious train journey with one of the world’s
          great wildlife destinations.
        </p>

        <a
          href="https://wa.me/447946442509"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff6b5f] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
        >
          Enquire Now
        </a>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}