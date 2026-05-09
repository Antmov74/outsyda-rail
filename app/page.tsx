"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Train,
  Mountain,
  ShieldCheck,
  Compass,
  Send,
  Star,
  Globe2,
} from "lucide-react";

const journeys = [
  {
    title: "The Glacier Express",
    region: "Switzerland",
    style: "Alpine scenery",
    copy:
      "Slow travel through the Swiss Alps, dramatic viaducts and unforgettable panoramic views.",
  },
  {
    title: "The Rocky Mountaineer",
    region: "Canada & USA",
    style: "Luxury rail adventure",
    copy:
      "Glass-domed carriages, wild landscapes and one of the world’s great rail experiences.",
  },
  {
    title: "The Eastern & Oriental Express",
    region: "Southeast Asia",
    style: "Classic luxury",
    copy:
      "A stylish rail journey through lush landscapes, cuisine and timeless glamour.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/30" />

        <div
          className="flex h-[90vh] items-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="relative z-20 mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="/Outsyda_Master_Logo_Mono.jpg"
                  alt="Outsyda"
                  className="h-12 w-auto invert"
                />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                  Rail
                </span>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Globe2 className="h-4 w-4" />
                Epic Train Journeys Worldwide
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                EPIC RAIL ADVENTURES
              </h1>

              <p className="mt-6 text-xl leading-8 text-stone-200">
                Extraordinary train journeys for travellers who want scenery,
                stories and unforgettable experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-stone-200">
                  Plan My Rail Adventure
                </button>

                <button className="rounded-2xl border border-white/40 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  Explore Journeys
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">
            Featured Rail Experiences
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Journeys Worth Building A Holiday Around
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journeys.map((journey) => (
            <div
              key={journey.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                <Train className="h-6 w-6" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                {journey.region}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {journey.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-stone-600">
                {journey.style}
              </p>

              <p className="mt-4 leading-7 text-stone-700">
                {journey.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-stone-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-400">
              Why Outsyda Rail
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Rail Travel With A Proper Adventure Mindset
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              Tailor-made rail adventures built around scenery, exploration and
              unforgettable experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-8">
              <Compass className="h-8 w-8 text-stone-300" />

              <h3 className="mt-5 text-2xl font-bold">
                Adventure Planning
              </h3>

              <p className="mt-3 leading-7 text-stone-300">
                Journeys designed around how people actually want to travel.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-8">
              <ShieldCheck className="h-8 w-8 text-stone-300" />

              <h3 className="mt-5 text-2xl font-bold">
                Financial Protection
              </h3>

              <p className="mt-3 leading-7 text-stone-300">
                Book with confidence through fully protected travel arrangements.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-8">
              <Mountain className="h-8 w-8 text-stone-300" />

              <h3 className="mt-5 text-2xl font-bold">
                Bucket List Journeys
              </h3>

              <p className="mt-3 leading-7 text-stone-300">
                Scenic rail routes, iconic sleepers and unforgettable landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">
              Start Planning
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Tell Us About Your Dream Rail Journey
            </h2>

            <p className="mt-6 leading-8 text-stone-700">
              Whether it’s the Swiss Alps, Canadian Rockies or luxury sleeper
              trains — we’ll help design it.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-stone-300 px-4 py-3"
                placeholder="Name"
              />

              <input
                className="rounded-2xl border border-stone-300 px-4 py-3"
                placeholder="Email"
              />

              <textarea
                className="min-h-[180px] rounded-2xl border border-stone-300 px-4 py-3"
                placeholder="Tell us about the rail journey you want..."
              />

              <button className="flex items-center justify-center gap-2 rounded-2xl bg-stone-950 px-6 py-4 font-semibold text-white transition hover:bg-stone-800">
                Send Enquiry
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">

          <p>© Outsyda Rail — Epic Train Journeys Worldwide</p>

          <div className="flex items-center gap-6">
            <img
              src="/Outsyda_Master_Badge.png"
              alt="Outsyda Badge"
              className="h-14 w-auto"
            />

            <img
              src="/tta-logo.png"
              alt="TTA Protected"
              className="h-10 w-auto"
            />
          </div>

        </div>
      </footer>

    </main>
  );
}