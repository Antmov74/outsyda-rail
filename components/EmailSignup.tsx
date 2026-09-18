const travelInterests = [
  {
    name: "group[29343][2]",
    id: "email-interest-adventure",
    label: "Adventure travel",
  },
  {
    name: "group[29343][4]",
    id: "email-interest-georgia",
    label: "Georgia",
  },
  {
    name: "group[29343][8]",
    id: "email-interest-rail",
    label: "Luxury rail",
  },
  {
    name: "group[29343][16]",
    id: "email-interest-cruises",
    label: "Expedition cruises",
  },
  {
    name: "group[29343][32]",
    id: "email-interest-wildlife",
    label: "Wildlife and safari",
  },
  {
    name: "group[29343][64]",
    id: "email-interest-family",
    label: "Family adventures",
  },
  {
    name: "group[29343][128]",
    id: "email-interest-events",
    label: "Travel evenings and events",
  },
];

export default function EmailSignup() {
  return (
    <section className="bg-[#151515] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff6b5f]">
            Luxury Rail Inspiration
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            The world’s greatest rail journeys, selected for you
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Receive remarkable rail journey ideas, new itineraries and early
            invitations to Outsyda Rail travel events.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
            Choose the travel styles that interest you, and we’ll keep our
            emails relevant. No inbox overload.
          </p>
        </div>

        <form
          action="https://outsyda.us9.list-manage.com/subscribe/post?u=bdc47e24f36e9e4836a336f42&id=96cba3e7a8&v_id=3&f_id=0099e7e1f0"
          method="post"
          target="_blank"
          className="space-y-6 rounded-2xl border border-white/10 bg-black/50 p-6"
        >
          <div className="space-y-2">
            <label htmlFor="email-signup-address" className="block text-sm text-white/80">
              Email address *
            </label>
            <input
              id="email-signup-address"
              type="email"
              name="EMAIL"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white focus:border-[#ff6b5f] focus:bg-white/15 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email-signup-name" className="block text-sm text-white/80">
              First name
            </label>
            <input
              id="email-signup-name"
              type="text"
              name="FNAME"
              autoComplete="given-name"
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white focus:border-[#ff6b5f] focus:bg-white/15 focus:outline-none"
            />
          </div>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-white/90">
              What kind of travel interests you?
            </legend>

            <div className="grid gap-3 sm:grid-cols-2">
              {travelInterests.map((interest) => (
                <label
                  key={interest.id}
                  htmlFor={interest.id}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <input
                    id={interest.id}
                    type="checkbox"
                    name={interest.name}
                    value=""
                    className="h-4 w-4 accent-[#ff6b5f]"
                  />
                  {interest.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">
              Marketing permission
            </p>

            <p className="mt-2 text-xs leading-5 text-white/60">
              Please confirm that you would like to receive travel inspiration,
              event invitations and occasional offers from Outsyda by email.
            </p>

            <label
              htmlFor="email-marketing-permission"
              className="mt-4 flex items-start gap-3 text-sm text-white/75"
            >
              <input
                id="email-marketing-permission"
                type="checkbox"
                name="gdpr[10582]"
                value="Y"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#ff6b5f]"
              />
              <span>I agree to receive email marketing from Outsyda.</span>
            </label>
          </div>

          <div aria-hidden="true" className="absolute -left-[5000px]">
            <input
              type="text"
              name="b_bdc47e24f36e9e4836a336f42_96cba3e7a8"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#ff6b5f] p-4 font-semibold text-black transition hover:bg-white"
          >
            Send Me Rail Inspiration
          </button>

          <p className="text-xs leading-5 text-white/50">
            You can unsubscribe at any time using the link in our emails. Your
            information will be processed securely through Mailchimp.
          </p>
        </form>
      </div>
    </section>
  );
}