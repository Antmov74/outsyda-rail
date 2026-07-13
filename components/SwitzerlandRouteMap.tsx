type SwitzerlandRouteMapProps = {
  route: "glacier" | "bernina" | "goldenpass" | "grand";
};

const routes = {
  glacier: {
    eyebrow: "Route Map",
    title: "Glacier Express",
    subtitle: "Zermatt to St Moritz across the Swiss Alps.",
        stops: [
      { name: "Zermatt", x: "18", y: "51" },
      { name: "Brig", x: "29", y: "47" },
      { name: "Andermatt", x: "42", y: "39" },
      { name: "Disentis", x: "55", y: "34" },
      { name: "Chur", x: "70", y: "28" },
      { name: "St Moritz", x: "84", y: "38" },
    ],
    path: "M18 51 C26 49, 32 44, 42 39 C49 35, 55 34, 70 28 C76 30, 80 34, 84 38",
  },
  bernina: {
    eyebrow: "Route Map",
    title: "Bernina Express",
    subtitle: "From Chur and St Moritz to Tirano via the Bernina Pass.",
    stops: [
      { name: "Chur", x: "20", y: "38" },
      { name: "St Moritz", x: "42", y: "44" },
      { name: "Pontresina", x: "52", y: "50" },
      { name: "Alp Grüm", x: "62", y: "60" },
      { name: "Poschiavo", x: "72", y: "62" },
      { name: "Tirano", x: "84", y: "68" },
    ],
    path: "M 20 38 L 42 44 L 52 50 L 62 60 L 72 62 L 84 68",
  },

  goldenpass: {

    eyebrow: "Route Map",
    title: "GoldenPass Express",
    subtitle: "Montreux to Interlaken through lakes, vineyards and alpine valleys.",
    stops: [
      { name: "Montreux", x: "18%", y: "70%" },
      { name: "Zweisimmen", x: "42%", y: "54%" },
      { name: "Spiez", x: "60%", y: "48%" },
      { name: "Interlaken", x: "78%", y: "42%" },
    ],
    path: "M 18 70 C 30 62, 36 56, 42 54 C 50 52, 56 50, 60 48 C 68 45, 73 43, 78 42",
  },
  grand: {
    eyebrow: "Route Map",
    title: "Grand Train Tour",
    subtitle: "A circular showcase of Switzerland's great panoramic rail routes.",
    stops: [
      { name: "Zurich", x: "46%", y: "26%" },
      { name: "Lucerne", x: "42%", y: "38%" },
      { name: "Interlaken", x: "34%", y: "50%" },
      { name: "Montreux", x: "24%", y: "68%" },
      { name: "Zermatt", x: "38%", y: "78%" },
      { name: "St Moritz", x: "75%", y: "58%" },
      { name: "Lugano", x: "62%", y: "82%" },
    ],
    path: "M 46 26 C 42 32, 42 36, 42 38 C 38 44, 36 48, 34 50 C 30 58, 26 64, 24 68 C 30 74, 34 77, 38 78 C 48 80, 56 82, 62 82 C 70 74, 74 64, 75 58 C 66 46, 56 34, 46 26",
  },
};

export default function SwitzerlandRouteMap({ route }: SwitzerlandRouteMapProps) {
  const data = routes[route];

  return (
    <section className="bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
          {data.eyebrow}
        </p>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-light md:text-5xl">{data.title}</h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {data.subtitle}
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff6b5f]">
                Key Stops
              </p>
              <p className="mt-3 leading-7 text-white/70">
                {data.stops.map((stop) => stop.name).join(" • ")}
              </p>
            </div>
          </div>

                   <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-6">
            <div className="absolute right-6 top-6 z-10 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2">
              <img
                src="/outsyda-badge.png"
                alt="Outsyda Rail"
                className="h-8 w-8 rounded-full bg-white p-0.5"
              />
              <span className="text-xs uppercase tracking-[0.25em] text-white/70">
                Outsyda Rail
              </span>
            </div>

            <svg viewBox="0 0 100 70" className="h-[440px] w-full">
              <path
                d="M14 24 C20 12, 36 7, 52 10 C68 13, 84 20, 90 34 C96 48, 86 62, 66 64 C50 66, 34 62, 22 54 C10 46, 8 34, 14 24 Z"
                fill="rgba(255,255,255,0.035)"
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="0.7"
              />

              <path
                d="M22 49 C30 45, 36 40, 43 35 C52 29, 62 24, 72 28 C78 31, 82 35, 86 39"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeLinecap="round"
                strokeWidth="0.9"
                strokeDasharray="2 2"
              />

              <path
                d={data.path}
                fill="none"
                stroke="#ff6b5f"
                strokeLinecap="round"
                strokeWidth="2.2"
              />

              {data.stops.map((stop) => (
                <g key={stop.name}>
                  <circle
                    cx={stop.x}
                    cy={stop.y}
                    r="3"
                    fill="black"
                    stroke="#ff6b5f"
                    strokeWidth="1.4"
                  />
                  <circle cx={stop.x} cy={stop.y} r="1" fill="#ff6b5f" />
                  <text
                    x={stop.x}
                    y={stop.y}
                    dy="-5"
                    textAnchor="middle"
                    className="fill-white text-[3.2px] tracking-wide"
                  >
                    {stop.name}
                  </text>
                </g>
              ))}

              <text
                x="18"
                y="18"
                className="fill-white/30 text-[4px] uppercase tracking-[0.4em]"
              >
                Switzerland
              </text>

              <text
                x="76"
                y="62"
                className="fill-white/20 text-[3px] uppercase tracking-[0.3em]"
              >
                Italy
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}