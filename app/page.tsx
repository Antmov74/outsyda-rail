export default function HomePage() {
  const journeys = [
    {
      title: "Switzerland",
      href: "/journeys/switzerland",
      image:
        "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80",
      copy: "Alpine rail icons, mountain villages and panoramic routes.",
    },
    {
      title: "Belmond Journeys",
      href: "/journeys/belmond",
     image: "/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg",
      copy: "Discover the world's most iconic luxury rail experiences from Belmond.",
    },
    {
      title: "Rovos Rail",
      href: "/journeys/rovos-rail",
      image: "/journeys/rovos-rail/sign.jpg",
      copy: "The Pride of Africa: luxury rail journeys through South Africa and beyond.",
    },
    {
      title: "Maharajas' Express",
      href: "/journeys/maharajas-express",
      image: "/journeys/maharajas-express/EXTERIOR.JPG",
      copy: "India's most luxurious train, exploring palaces, wildlife and cultural treasures.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-black">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 opacity-95">
          {journeys.map((journey) => (
            <img
              key={journey.title}
              src={journey.image}
              alt={journey.title}
              className="h-full w-full object-cover"
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6">
          <div className="mb-8 flex items-center gap-4">
            <img
              src="/outsyda-badge.png"
              alt="Outsyda Rail"
              className="h-20 w-20 rounded-full bg-white p-1"
            />

            <div>
              <p className="text-2xl font-semibold tracking-[0.35em]">
                OUTSYDA
              </p>
              <p className="text-sm uppercase tracking-[0.45em] text-[#ff6b5f]">
                Rail
              </p>
            </div>
          </div>

          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#ff6b5f]">
            Extraordinary Rail Journeys
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight md:text-7xl">
            Luxury rail adventures across the world.
          </h1>

          <p className="mt-8 max-w-3xl border-l-2 border-[#ff6b5f] pl-6 text-lg leading-8 text-white/80">
            From Belmond&apos;s world-famous rail experiences and the
            Maharajas&apos; Express to Rovos Rail&apos;s legendary journeys
            through Southern Africa and Switzerland&apos;s panoramic mountain
            railways, discover the world&apos;s most remarkable train
            adventures.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#journeys"
              className="rounded-full bg-[#ff6b5f] px-8 py-4 font-semibold text-black transition hover:bg-white"
            >
              Explore Journeys
            </a>

            <a
              href="#enquire"
              className="rounded-full border border-[#ff6b5f]/70 px-8 py-4 font-semibold text-white transition hover:bg-[#ff6b5f] hover:text-black"
            >
              Start Planning
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED JOURNEYS */}
      <section id="journeys" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Featured Journeys
          </p>

          <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
            Start with the world&apos;s great rail experiences.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journeys.map((journey) => (
              <a
                key={journey.title}
                href={journey.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black transition hover:-translate-y-1 hover:border-[#ff6b5f]/60"
              >
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-light">{journey.title}</h3>

                  <p className="mt-4 leading-7 text-white/65">
                    {journey.copy}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* FROM THE JOURNAL */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
                From the Journal
              </p>

              <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
                Stories that make the journey begin before departure.
              </h2>
            </div>

            <a
              href="/journal"
              className="text-sm font-semibold text-white transition hover:text-[#ff6b5f]"
            >
              View the Journal →
            </a>
          </div>

          <a
            href="/journal/five-extraordinary-train-journeys"
            className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-[#ff6b5f]/60 md:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="overflow-hidden">
              <img
                src="/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg"
                alt="Luxury train travelling through the European landscape"
                className="h-full min-h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-9 md:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Luxury Rail
              </p>

              <h3 className="mt-5 text-3xl font-light leading-tight md:text-4xl">
                Five extraordinary train journeys worth travelling the world
                for
              </h3>

              <p className="mt-6 leading-8 text-white/65">
                Explore five remarkable railway journeys through Switzerland,
                India, Scotland, southern Africa and Europe.
              </p>

              <span className="mt-8 text-sm font-semibold transition group-hover:text-[#ff6b5f]">
                Read the article →
              </span>
            </div>
          </a>
        </div>
      </section>
      {/* WHY OUTSYDA */}
      <section id="why-outsyda" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Why Outsyda
            </p>

            <h2 className="text-4xl font-light">
              Rail journeys, curated properly.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 p-7">
            <h3 className="text-2xl font-light">Curated properly</h3>

            <p className="mt-4 leading-7 text-white/65">
              We match the route, train, cabin and pace to the traveller — not
              the other way around.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 p-7">
            <h3 className="text-2xl font-light">Financial protection</h3>

            <p className="mt-4 leading-7 text-white/65">
              Book with confidence through a financially protected UK travel
              business.
            </p>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquire" className="relative overflow-hidden px-6 py-24">
        <img
          src="/journeys/rovos-rail/lounge.jpg"
          alt="Luxury rail lounge"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#ff6b5f]/30 bg-black/70 p-8 backdrop-blur-sm md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
              Start Planning
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Ready to plan a rail journey?
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              Tell us where you want to go and we&apos;ll help shape the right
              rail experience, from route and cabin choice to timings,
              extensions and protection.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <img
                src="/tta-logo.png"
                alt="Travel Trust Network Group"
                className="mb-5 h-14 w-auto"
              />

              <h3 className="text-2xl font-light text-white">
                100% financially protected
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Your booking is protected through our membership of the Travel
                Trust Network Group, giving you financial peace of mind from
                enquiry to departure.
              </p>
            </div>

            <div className="mt-8 space-y-3 text-white/75">
              <p>Phone: +44 7946 442509</p>
              <p>Email: ant@outsyda.com</p>
              <p>WhatsApp available for quick rail enquiries.</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mojryyvv"
            method="POST"
            className="space-y-4 rounded-2xl border border-white/10 bg-black/60 p-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-white/50 focus:border-[#ff6b5f] focus:bg-white/15 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-white/50 focus:border-[#ff6b5f] focus:bg-white/15 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-white/50 focus:border-[#ff6b5f] focus:bg-white/15 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Tell us about your dream rail journey..."
              rows={6}
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-white/50 focus:border-[#ff6b5f] focus:bg-white/15 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-[#ff6b5f] p-4 font-semibold text-black transition hover:bg-white"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        © 2026 Outsyda Rail. All rights reserved.
      </footer>
    </main>
  );
}