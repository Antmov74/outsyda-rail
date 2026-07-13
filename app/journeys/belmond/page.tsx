import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function BelmondPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1800&q=80"
          alt="Belmond luxury rail journeys"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Belmond Journeys
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Legendary luxury rail experiences.
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/80">
              From the Venice Simplon-Orient-Express to the Royal Scotsman,
              Britannic Explorer and Eastern & Oriental Express, Belmond brings
              together some of the world&apos;s most iconic rail journeys.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Collection Coming Soon
          </p>

          <h2 className="max-w-4xl text-4xl font-light md:text-5xl">
            A new Belmond collection is being prepared for Outsyda Rail.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/70">
            We are building a dedicated Belmond rail collection featuring the
            brand&apos;s most celebrated journeys, including new UK experiences,
            Scottish adventures, European icons and Southeast Asian luxury rail.
          </p>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}