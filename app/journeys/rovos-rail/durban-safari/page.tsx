import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function DurbanSafariPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Rovos Rail
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Durban Safari
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A refined rail journey between Pretoria and Durban, combining
            elegant onboard living with battlefield history, game viewing and
            the dramatic landscapes of KwaZulu-Natal.
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
              Safari, scenery and slow luxury
            </h2>
          </div>

          <div className="space-y-6 text-white/75">
            <p>
              The Durban Safari is one of Rovos Rail’s shorter but beautifully
              varied journeys, offering a rich taste of South Africa from the
              comfort of a luxury train.
            </p>
            <p>
              Guests travel through the Highveld and KwaZulu-Natal, with time
              for guided excursions, wildlife experiences and relaxed days
              onboard. It is ideal for travellers who want a compact luxury rail
              experience with a genuine sense of place.
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
            <p className="mt-3 text-2xl font-semibold">2 nights / 3 days</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Route
            </p>
            <p className="mt-3 text-2xl font-semibold">
              Pretoria to Durban
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              Style
            </p>
            <p className="mt-3 text-2xl font-semibold">
              Luxury rail safari
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/journeys/rovos-rail/General/RVR-RoomService1-HRes.jpg"
              alt="Rovos Rail room service"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
              The Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Elegant comfort between wild landscapes
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              Onboard, the pace is calm and indulgent. Days unfold through
              polished service, fine dining, observation car views and the
              nostalgic atmosphere that has made Rovos Rail one of the world’s
              great luxury train experiences.
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
            A compact journey with real variety
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">KwaZulu-Natal</h3>
              <p className="mt-4 text-white/70">
                Travel through one of South Africa’s most distinctive regions,
                rich in culture, scenery and history.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Safari element</h3>
              <p className="mt-4 text-white/70">
                Enjoy a rail journey with a genuine wildlife and wilderness
                feel, without needing a long itinerary.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Luxury onboard living</h3>
              <p className="mt-4 text-white/70">
                Fine dining, private suites and classic observation-car views
                create a properly indulgent short escape.
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
      Pretoria to Durban
    </h2>

    <img
      src="/journeys/rovos-rail/maps/durban-safari-map.jpg"
      alt="Rovos Rail Durban Safari route map"
      className="w-full rounded-[2rem] border border-white/10 bg-white"
    />
  </div>
</section>
      <FinancialProtection />
      <Footer />
    </main>
  );
}