import Header from "@/components/Header";
import FinancialProtection from "@/components/FinancialProtection";
import Footer from "@/components/Footer";

export default function SouthernCrossPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      <section
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/journeys/rovos-rail/Hero Images/RVR-NamibiaKalahari1-HRes.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Rovos Rail
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Southern Cross
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A grand Southern African rail journey linking dramatic landscapes,
            wildlife, historic places and Rovos Rail’s signature slow luxury.
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
              A sweeping rail journey across Southern Africa
            </h2>
          </div>

          <div className="space-y-6 text-white/75">
            <p>
              Southern Cross is one of Rovos Rail’s longer, more immersive
              journeys, designed for travellers who want a deeper experience of
              Southern Africa from the comfort of a luxury train.
            </p>
            <p>
              The journey blends changing landscapes, elegant onboard service
              and carefully planned excursions, creating a rich sense of place
              without sacrificing comfort.
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
            <p className="mt-3 text-2xl font-semibold">11 nights / 12 days</p>
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
            <p className="mt-3 text-2xl font-semibold">
              Grand rail expedition
            </p>
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
              Slow travel with serious atmosphere
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              Days unfold through fine dining, private suites, lounge-car
              conversations and observation-car views. It is a journey built for
              travellers who want time to settle into the rhythm of the train.
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
            Big landscapes, wildlife and classic Rovos service
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Southern Africa</h3>
              <p className="mt-4 text-white/70">
                Travel through a changing mix of landscapes, cultures and
                historic destinations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Wildlife experiences</h3>
              <p className="mt-4 text-white/70">
                Add a safari feel to the rail journey with excursions that bring
                Africa’s wilderness into focus.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Luxury onboard life</h3>
              <p className="mt-4 text-white/70">
                Refined dining, polished service and private suites make the
                train itself a major part of the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <img
          src="/journeys/rovos-rail/Locomotives/RVR-LocoSHAUN-HRes.jpg"
          alt="Rovos Rail locomotive"
          className="h-[460px] w-full rounded-2xl object-cover"
        />
      </section>
<section className="bg-white/[0.03] px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
      Route Map
    </p>

    <h2 className="mb-10 max-w-3xl text-4xl font-light md:text-5xl">
      Southern Cross Route
    </h2>

    <img
      src="/journeys/rovos-rail/maps/southern-cross-map.jpg"
      alt="Rovos Rail Southern Cross route map"
      className="w-full rounded-[2rem] border border-white/10 bg-white"
    />
  </div>
</section>
      <FinancialProtection />
      <Footer />
    </main>
  );
}