import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function EasternOrientalExpressPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=1800&q=80"
          alt="Eastern and Oriental Express"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Belmond Eastern &amp; Oriental Express
            </p>

            <h1 className="text-5xl font-light md:text-6xl">
              Luxury rail through Southeast Asia
            </h1>

            <p className="mt-8 text-xl text-white/80">
              A glamorous rail journey through Singapore, Malaysia and Thailand,
              combining tropical landscapes, fine dining and Belmond service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Singapore · Malaysia · Thailand
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Old-world rail glamour in Southeast Asia
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            The Eastern &amp; Oriental Express is one of the world&apos;s most
            atmospheric luxury trains, pairing elegant interiors and refined
            service with tropical scenery, cultural stops and Southeast Asian
            adventure.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">
            This page will be expanded following our Belmond discussions, with
            stronger route detail, cabin information, departure options and
            supplier-approved imagery once available.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Journey Style
          </p>

          <h2 className="mb-12 text-4xl font-light md:text-5xl">
            What this journey can include
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Belmond luxury
              </h3>

              <p className="text-white/70">
                Elegant cabins, refined onboard service, atmospheric interiors
                and the sense of occasion that defines Belmond rail travel.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Tropical landscapes
              </h3>

              <p className="text-white/70">
                Southeast Asian scenery, cultural stops, jungle landscapes,
                temples, cities and slow travel through a cinematic region.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-light">
                Tailor-made extensions
              </h3>

              <p className="text-white/70">
                Singapore stays, Bangkok hotels, beach escapes, food tours and
                adventure-led extensions before or after the rail journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            Ready to experience the Eastern &amp; Oriental Express?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            Speak with Outsyda Rail about Belmond rail journeys through
            Southeast Asia, including route options, hotel stays and
            tailor-made extensions.
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