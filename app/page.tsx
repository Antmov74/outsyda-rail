"use client";

import React from "react";

const whatsappNumber = "447946442509";

const journeys = [
  {
    title: "Rocky Mountaineer",
    region: "Canada",
    link: "/journeys/canada",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description: "Glass-domed luxury through the Canadian Rockies.",
  },
  {
    title: "Swiss Alpine Rail",
    region: "Switzerland",
    link: "/journeys/switzerland",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "Iconic mountain rail, lakes, peaks and premium hotels.",
  },
  {
    title: "Eastern & Oriental Express",
    region: "Singapore, Malaysia & Thailand",
    link: "/journeys/eastern-oriental-express",
    image:
      "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=1400&q=80",
    description: "Old-world rail glamour with tropical adventure.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#080A0D] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              <img
                src="/outsyda-badge.png"
                alt="Outsyda Badge"
                className="h-12 w-12 object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-black tracking-[0.35em] text-white">
                OUTSYDA
              </p>

              <p className="text-xs uppercase tracking-[0.3em] text-[#ff8e8e]">
                Rail
              </p>
            </div>
          </a>

          {/* NAV LINKS */}
          <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#journeys" className="hover:text-[#ff8e8e]">
              Journeys
            </a>

            <a href="#why" className="hover:text-[#ff8e8e]">
              Why Outsyda
            </a>

            <a href="#inquiry" className="hover:text-[#ff8e8e]">
              Enquire
            </a>
          </div>

          {/* CTA */}
          <a
            href="#inquiry"
            className="rounded-full bg-[#ff6b6b] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#ff8e8e]"
          >
            Plan My Rail Adventure
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#ff8e8e]/40 bg-[#ff8e8e]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ffb3b3]">
              Luxury rail journeys for adventurous travellers
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Epic train journeys, designed the Outsyda way.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Premium rail adventures across the world’s most dramatic
              landscapes — crafted with expert planning, trusted protection and
              proper adventure-travel soul.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#inquiry"
                className="rounded-full bg-[#ff6b6b] px-8 py-4 text-center font-bold text-black transition hover:-translate-y-1 hover:bg-[#ff8e8e]"
              >
                Plan My Rail Adventure
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hi Outsyda, I’m interested in an epic rail adventure."
                )}`}
                target="_blank"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#ff8e8e] hover:text-[#ff8e8e]"
              >
                WhatsApp Outsyda
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEYS */}
      <section id="journeys" className="scroll-mt-28 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff8e8e]">
                Featured journeys
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Rail adventures worth building a trip around.
              </h2>
            </div>

            <p className="max-w-xl text-white/65">
              Each journey can be shaped around luxury hotels, wildlife,
              expedition-style add-ons, city stays and private touring.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {journeys.map((journey) => (
              <article
                key={journey.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div
                  className="h-72 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${journey.image}')`,
                  }}
                />

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8e8e]">
                    {journey.region}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {journey.title}
                  </h3>

                  <p className="mt-3 text-white/65">
                    {journey.description}
                  </p>

                  <a
                    href={journey.link}
                    className="mt-6 inline-block font-bold text-[#ff8e8e] hover:text-[#ffb3b3]"
                  >
                    Explore this journey →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUTSYDA */}
      <section
        id="why"
        className="scroll-mt-28 bg-white/[0.03] px-5 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            "Adventure-first planning",
            "Luxury without the bland bits",
            "Protected, personal service",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black/30 p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] font-black text-black">
                {index + 1}
              </div>

              <h3 className="text-2xl font-black">{item}</h3>

              <p className="mt-4 leading-7 text-white/65">
                Built for travellers who want something more memorable than a
                standard package holiday.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="inquiry" className="scroll-mt-32 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#ff8e8e]/20 bg-gradient-to-br from-[#ff8e8e]/10 to-white/[0.03] p-6 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff8e8e]">
              Start planning
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Tell me what kind of rail adventure you want.
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              Give me the rough idea — destination, style, dates, budget and
              who’s travelling. I’ll help shape it into something properly
              special.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 font-bold hover:border-[#ff8e8e] hover:text-[#ff8e8e]"
            >
              Prefer WhatsApp? Message me directly
            </a>
          </div>

          {/* LIVE FORM */}
          <form
            action="https://formspree.io/f/mojryyvv"
            method="POST"
            className="space-y-4"
          >
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-[#ff8e8e]"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-[#ff8e8e]"
            />

            <input
              name="phone"
              placeholder="Phone / WhatsApp"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-[#ff8e8e]"
            />

            <input
              name="journey"
              placeholder="Journey or destination of interest"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-[#ff8e8e]"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me what you’re imagining..."
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-[#ff8e8e]"
            />

            <button className="w-full rounded-full bg-[#ff6b6b] px-8 py-4 font-black text-black transition hover:bg-[#ff8e8e]">
              Send Rail Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} Outsyda Rail. Epic rail adventures.
          </p>

          <p>Outsyda is affiliated with TTA for financial protection.</p>
        </div>
      </footer>
    </main>
  );
}