type JourneyTimelineDay = {
  day: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

type JourneyTimelineProps = {
  eyebrow?: string;
  title: string;
  introduction?: string;
  days: JourneyTimelineDay[];
};

export default function JourneyTimeline({
  eyebrow = "Official Itinerary",
  title,
  introduction,
  days,
}: JourneyTimelineProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
          {eyebrow}
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-light md:text-5xl">
          {title}
        </h2>

        {introduction && (
          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            {introduction}
          </p>
        )}

        <div className="relative mt-16">
          <div className="absolute left-[23px] top-0 bottom-0 hidden w-px bg-white/15 md:block" />

          <div className="space-y-16">
            {days.map((item, index) => (
              <article
                key={`${item.day}-${item.title}`}
                className="relative grid gap-8 md:grid-cols-[48px_1fr]"
              >
                <div className="relative hidden md:block">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#ff6b5f] bg-black">
                    <span className="text-sm font-semibold text-[#ff6b5f]">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div
                  className={
                    item.image
                      ? "grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1fr_0.8fr] md:p-8"
                      : "rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
                  }
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b5f]">
                      {item.day}
                    </p>

                    <h3 className="mt-3 text-2xl font-light md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-white/70">
                      {item.description}
                    </p>
                  </div>

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      className="h-64 w-full rounded-2xl object-cover md:h-full md:min-h-[260px]"
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}