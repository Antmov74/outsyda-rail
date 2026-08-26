import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinancialProtection from "@/components/FinancialProtection";

export const metadata: Metadata = {
  title: "Journal | Outsyda Rail",
  description:
    "Stories, inspiration and expert insight into the world’s greatest railway journeys.",
};

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="px-6 pb-20 pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Outsyda Rail Journal
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight md:text-7xl">
            Stories from the rails.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Inspiration, firsthand knowledge and a closer look at the railway
            journeys that make the world worth exploring.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/journal/five-extraordinary-train-journeys"
            className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] md:grid-cols-2"
          >
            <div className="overflow-hidden">
              <img
                src="/journeys/belmond/vsoe/VSOE-EXT-SCE-05.jpg"
                alt="Luxury train travelling through the European landscape"
                className="h-full min-h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                Luxury Rail
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight">
                Five extraordinary train journeys worth travelling the world
                for
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65">
                From the Swiss Alps and Scottish Highlands to India, southern
                Africa and the great cities of Europe, discover five railway
                journeys where the train becomes the adventure.
              </p>

              <span className="mt-9 text-sm font-semibold text-white transition group-hover:text-[#ff6b5f]">
                Read the article →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <FinancialProtection />
      <Footer />
    </main>
  );
}