import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const title = "Switzerland. Weather is fine, wish you were here";
const email = "melvynwilkins@gmail.com";
const orderLink = `mailto:${email}?subject=${encodeURIComponent(`Book order: ${title}`)}`;

export const metadata: Metadata = {
  title: `${title} | Outsyda Rail`,
  description:
    "Melvyn Wilkins shares 60 years of Swiss travels and photographs. Order the printed book directly from the author for £14.95.",
};

export default function SwitzerlandBookPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <article className="mx-auto max-w-6xl px-6 pb-24 pt-40 md:pt-48">
        <Link href="/journal" className="text-base text-[#ff6b5f] hover:underline">
          Outsyda Rail Journal
        </Link>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 text-lg text-white/80">By Melvyn Wilkins</p>
            <p className="mt-8 text-lg leading-8 text-white/75">
              A family coach holiday to Switzerland in 1965 was the start of
              something lasting for Drybrook author Melvyn Wilkins. More than
              70 visits and six decades later, he shares the stories and
              photographs from those travels in a book printed in Mitcheldean.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/75">
              The title borrows a familiar line from the postcards travellers
              used to send home. It sets the tone for a personal look at
              Switzerland over the years.
            </p>
          </div>

          <section
            aria-labelledby="order-heading"
            className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6 sm:p-8"
          >
            <h2 id="order-heading" className="text-2xl font-light">
              Order The Book
            </h2>
            <p className="mt-4 text-3xl font-semibold">£14.95</p>
            <p className="mt-2 text-base text-white/70">Plus postage if needed.</p>
            <p className="mt-5 text-base leading-7 text-white/75">
              Email Melvyn to order your copy and arrange payment and delivery
              directly with him.
            </p>
            <a
              href={orderLink}
              className="mt-6 inline-flex rounded-full bg-[#ff6b5f] px-6 py-3 text-base font-semibold text-black transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b5f]"
            >
              Email Melvyn To Order
            </a>
            <p className="mt-4 break-words text-base text-white/75">{email}</p>

            <div className="mt-6 border-t border-white/15 pt-6">
              <a
                href="https://www.ebay.co.uk/itm/900085996544"
                className="inline-flex rounded-full border border-white/40 px-6 py-3 text-base font-semibold transition hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b5f]"
              >
                Buy On eBay
              </a>
              <p className="mt-3 text-base text-white/70">
                See eBay for its price and delivery details.
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
