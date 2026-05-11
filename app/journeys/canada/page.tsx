export default function CanadaJourneyPage() {
  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative mx-auto max-w-7xl">
          <a href="/" className="mb-8 inline-block text-[#ff8e8e]">
            ← Back to Outsyda Rail
          </a>

          <p className="mb-5 inline-flex rounded-full border border-[#ff8e8e]/40 bg-[#ff8e8e]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ffb3b3]">
            Canada · Rocky Mountaineer
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Rocky Mountaineer through the Canadian Rockies.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A bucket-list luxury rail journey through mountains, lakes, forests
            and cinematic Canadian wilderness.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#inquiry"
              className="rounded-full bg-[#ff6b6b] px-8 py-4 text-center font-bold text-black hover:bg-[#ff8e8e]"
            >
              Plan this journey
            </a>

            <a
              href="https://wa.me/447946442509"
              target="_blank"
              className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white hover:border-[#ff8e8e] hover:text-[#ff8e8e]"
            >
              WhatsApp Outsyda
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-black text-[#ff8e8e]">
              Best time to go
            </h2>
            <p className="mt-4 text-white/70">
              Spring to autumn is ideal, with summer giving long days and peak
              scenery.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-black text-[#ff8e8e]">
              Suggested length
            </h2>
            <p className="mt-4 text-white/70">
              Around 8–14 days works well with Vancouver, Banff, Lake Louise
              and Jasper.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-black text-[#ff8e8e]">
              Travel style
            </h2>
            <p className="mt-4 text-white/70">
              Luxury rail, mountain lodges, wildlife, lakes, scenic touring and
              proper adventure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black">Why this journey is special</h2>

          <p className="mt-6 leading-8 text-white/70">
            The Rocky Mountaineer is all about slow travel done properly:
            panoramic windows, dramatic landscapes, premium service and the kind
            of scenery that feels impossible to rush.
          </p>

          <p className="mt-6 leading-8 text-white/70">
            This works brilliantly for couples, milestone trips and adventurous
            travellers who want comfort without losing the sense of wilderness.
          </p>

          <a
            href="/#inquiry"
            className="mt-10 inline-block rounded-full bg-[#ff6b6b] px-8 py-4 font-bold text-black hover:bg-[#ff8e8e]"
          >
            Start planning Canada
          </a>
        </div>
      </section>
    </main>
  );
}