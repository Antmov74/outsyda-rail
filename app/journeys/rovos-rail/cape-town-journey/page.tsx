export const metadata = {
  title: "Rovos Rail Cape Town Journey | Outsyda Rail",
  description:
    "Explore the Rovos Rail Cape Town Journey between Pretoria and Cape Town with Outsyda Rail.",
};

export default function CapeTownJourneyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/journeys/rovos-rail/Hero Images/RVR-HexRiverValley3-HRes.jpg"
          alt="Rovos Rail Cape Town journey"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24">
          <a
            href="/journeys/rovos-rail"
            className="mb-8 w-fit text-sm uppercase tracking-[0.25em] text-[#ff6b5f] hover:text-white"
          >
            Back to Rovos Rail
          </a>

          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#ff6b5f]">
            Rovos Rail
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
            Cape Town Journey
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A classic Rovos Rail journey between Pretoria and Cape Town,
            combining old-world rail luxury with South Africa&apos;s changing
            landscapes, mountain scenery and historic towns.
          </p>

          <a
            href="#enquire"
            className="mt-10 inline-block w-fit rounded-full bg-[#ff6b5f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            The Journey
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Pretoria to Cape Town in timeless style
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            This is one of the best introductions to Rovos Rail. Travel across
            South Africa in comfort, with elegant dining, private suites and
            time to watch the scenery unfold from the observation car.
          </p>

          <p className="mt-5 leading-8 text-white/70">
            The route links Pretoria and Cape Town, with the rail journey itself
            forming the heart of the experience rather than simply being a way
            to get from one city to another.
          </p>
        </div>

        <img
          src="/journeys/rovos-rail/Hero Images/RVR-CoachFlag-HRes.jpg"
          alt="Rovos Rail carriage"
          className="rounded-[2rem] object-cover"
        />
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Highlights
          </p>

          <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
            Why choose the Cape Town Journey?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Classic Route",
                copy: "A signature South African rail journey linking Pretoria and Cape Town.",
              },
              {
                title: "Scenic Landscapes",
                copy: "Mountain passes, open countryside and dramatic approaches to the Cape.",
              },
              {
                title: "Perfect Introduction",
                copy: "An ideal first Rovos Rail journey for travellers new to luxury rail in Africa.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-black p-7"
              >
                <h3 className="text-2xl font-light">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        <img
          src="/journeys/rovos-rail/Hero Images/RVR-ObsCarRVR-HRes.jpg"
          alt="Rovos Rail observation car"
          className="h-80 w-full rounded-[2rem] object-cover"
        />

        <img
          src="/journeys/rovos-rail/Hero Images/RVR-ObsPeople2b-HRes.jpg"
          alt="Guests on Rovos Rail"
          className="h-80 w-full rounded-[2rem] object-cover"
        />

        <img
          src="/journeys/rovos-rail/General/RVR-TrainCoachMovingSky-HRes.jpg"
          alt="Rovos Rail train"
          className="h-80 w-full rounded-[2rem] object-cover"
        />
      </section>
<section className="bg-white/[0.03] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
      Route Map
    </p>

    <h2 className="mb-10 max-w-3xl text-4xl font-light md:text-5xl">
      Pretoria to Cape Town
    </h2>

    <img
      src="/journeys/rovos-rail/maps/cape-town-map.jpg"
      alt="Rovos Rail Cape Town Journey route map"
      className="w-full rounded-[2rem] border border-white/10 bg-white"
    />
  </div>
</section>
      <section id="enquire" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Start Planning
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Interested in the Cape Town Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Speak to Outsyda Rail about Rovos Rail dates, suites, extensions
            and tailor-made South Africa arrangements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ant@outsyda.com?subject=Rovos Rail Cape Town Journey enquiry"
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
    </main>
  );
}