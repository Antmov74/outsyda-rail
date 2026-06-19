import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function VictoriaFallsPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/journeys/rovos-rail/elephant.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Rovos Rail
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Victoria Falls
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A signature Rovos Rail journey combining elegant train travel,
            Southern African landscapes and one of the world’s greatest natural
            wonders.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Journey Overview
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Luxury rail to Victoria Falls
            </h2>
          </div>

          <div className="space-y-6 text-white/75">
            <p>
              The Victoria Falls journey is one of Rovos Rail’s most iconic
              routes, pairing the romance of luxury rail with the drama of one
              of Africa’s most famous natural landmarks.
            </p>
            <p>
              Travel in classic Rovos Rail style with refined service, private
              suites, fine dining and time to enjoy the changing landscapes as
              the train makes its way north.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.04] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Duration
            </p>
            <p className="mt-3 text-2xl font-semibold">3 nights / 4 days</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Route
            </p>
            <p className="mt-3 text-2xl font-semibold">
              Pretoria to Victoria Falls
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Style
            </p>
            <p className="mt-3 text-2xl font-semibold">Iconic luxury rail</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/journeys/rovos-rail/Hero Images/RVR-ObsCarSunset-HRes.jpg"
              alt="Rovos Rail observation car at sunset"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              The Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Classic rail romance with a spectacular finale
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              Days onboard are relaxed and refined, with lounge-car views,
              polished service and time to settle into the rhythm of the train
              before arriving at Victoria Falls.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.04] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
            Highlights
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">
            One of Africa’s great rail journeys
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Victoria Falls</h3>
              <p className="mt-4 text-white/70">
                End the journey at one of the world’s most impressive natural
                wonders.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Rovos Rail service</h3>
              <p className="mt-4 text-white/70">
                Enjoy elegant dining, private suites and the classic atmosphere
                of luxury African rail travel.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Southern Africa</h3>
              <p className="mt-4 text-white/70">
                Travel through changing landscapes as the train heads towards
                Zimbabwe and the falls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Route Map
          </p>

          <h2 className="mb-10 max-w-3xl text-4xl font-light md:text-5xl">
            Pretoria to Victoria Falls
          </h2>

          <img
            src="/journeys/rovos-rail/maps/victoria-falls-map.jpg"
            alt="Rovos Rail Victoria Falls route map"
            className="w-full rounded-[2rem] border border-white/10 bg-white"
          />
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}