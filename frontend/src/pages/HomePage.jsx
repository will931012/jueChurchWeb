import { Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { getLocalizedPath } from "../content/siteContent";

function HomePage() {
  const { locale, content } = useOutletContext();
  const home = content.home;

  return (
    <main>
      <section className="px-3 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="mx-auto w-[min(1120px,100%)]">
          <motion.article
            className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-b border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_100%)] px-6 py-7 md:px-10 md:py-9">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <div className="text-[0.82rem] font-black uppercase tracking-[0.34em] text-black/80">
                  {home.featuredVideo.speaker}
                </div>
                <div className="hidden h-px flex-1 bg-black/20 md:block" />
                <div className="text-[0.82rem] font-black uppercase tracking-[0.34em] text-black/80">
                  {home.featuredVideo.date}
                </div>
              </div>
              <h1 className="mt-7 max-w-[10ch] font-sans text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-black">
                {home.featuredVideo.title}
              </h1>
            </div>

            <div className="aspect-video w-full bg-black">
              {home.featuredVideo.embedAllowed ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${home.featuredVideo.youtubeId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${home.featuredVideo.youtubeId}&controls=0&modestbranding=1&rel=0`}
                  title={home.featuredVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <a
                  href={`https://www.youtube.com/watch?v=${home.featuredVideo.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full w-full overflow-hidden"
                >
                  <img
                    src={`https://img.youtube.com/vi/${home.featuredVideo.youtubeId}/maxresdefault.jpg`}
                    alt={home.featuredVideo.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-4 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-white backdrop-blur-sm transition group-hover:bg-white/15">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-black">
                        ▶
                      </span>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">
                          YouTube
                        </p>
                        <p className="mt-1 text-lg font-semibold">{home.featuredVideo.watchLabel}</p>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>

            <div className="grid gap-5 bg-[#fcfcfc] px-5 py-5 md:grid-cols-[0.95fr_1.05fr] md:px-6 md:py-6">
              <motion.div
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,15,15,0.05)] md:p-7"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-black/55">
                  {home.heroEyebrow}
                </p>
                <p className="mt-4 text-[0.8rem] font-bold uppercase tracking-[0.24em] text-black/48">
                  {content.siteName}
                </p>
                <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-black/62 md:text-[1.02rem]">
                  {home.heroText}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to={getLocalizedPath(locale, "visit")}
                      className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                    >
                      {home.primaryAction}
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to={getLocalizedPath(locale, "conference")}
                      className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                    >
                      {home.secondaryAction}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-between gap-8 rounded-[1.75rem] border border-black/10 bg-[#f3f3f3] p-6 md:p-7"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <div>
                  <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-black/55">
                    {home.featuredVideo.label}
                  </p>
                  <p className="mt-5 max-w-2xl font-display text-3xl leading-tight text-black md:text-4xl">
                    {home.featuredVideo.title}
                  </p>
                  <div className="mt-6 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                        {locale === "es" ? "Predicador" : "Speaker"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-black/72">
                        {home.featuredVideo.speaker}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                        {locale === "es" ? "Fecha" : "Date"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-black/72">
                        {home.featuredVideo.date}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-[0.98rem] leading-8 text-black/62">
                    {locale === "es"
                      ? "Revive el mensaje del domingo y compártelo con alguien que necesite esperanza esta semana."
                      : "Revisit Sunday's message and share it with someone who needs hope this week."}
                  </p>
                </div>

                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a
                    href={`https://www.youtube.com/watch?v=${home.featuredVideo.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-black"
                  >
                    {home.featuredVideo.watchLabel}
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-3 pb-14 md:pb-20">
        <div className="mx-auto grid w-[min(1120px,100%)] gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
              {home.heroEyebrow}
            </p>
            <h2 className="max-w-[14ch] font-display text-4xl leading-tight md:text-6xl">
              {home.heroTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
              {home.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "visit")}
                  className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  {home.primaryAction}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "conference")}
                  className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                >
                  {home.secondaryAction}
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside
            className="rounded-[2rem] border border-black bg-black p-7 text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:p-8"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              {home.sermonMeta.eyebrow}
            </p>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.28em] text-white/45">
              {home.sermonMeta.category}
            </p>
            <p className="mt-3 text-lg font-semibold text-white/75">{home.sermonMeta.speaker}</p>
            <div className="mt-8 flex items-end gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">{home.sermonMeta.day}</p>
                <p className="mt-2 text-sm text-white/70">{home.sermonMeta.date}</p>
              </div>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-none">{home.sermonMeta.title}</h2>
            <div className="mt-8">
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  to={getLocalizedPath(locale, "sermons")}
                  className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-white"
                >
                  {home.sermonMeta.action}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="px-3 py-10 md:py-16">
        <Reveal className="mx-auto w-[min(1120px,100%)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
                {home.visit.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-tight md:text-6xl">
                {home.visit.title}
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-base leading-8 text-black/65">{home.visit.text}</p>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  to={getLocalizedPath(locale, "visit")}
                  className="mt-5 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-black"
                >
                  {home.visit.action}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {home.visit.locations.map((location, index) => (
              <motion.article
                key={location.name + location.times}
                className="rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f8f8f8_100%)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-black/55">
                  {location.times}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{location.name}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">{location.address}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-3 py-6 md:py-10">
        <Reveal className="mx-auto w-[min(1120px,100%)] rounded-[2rem] bg-black px-7 py-10 text-white md:px-12 md:py-14">
          <p className="max-w-5xl font-display text-3xl leading-tight md:text-5xl">
            "{home.missionQuote}"
          </p>
        </Reveal>
      </section>

      <section className="px-3 py-10 md:py-16">
        <Reveal className="mx-auto w-[min(1120px,100%)]">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
            {home.latest.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-tight md:text-5xl">
            {home.latest.title}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {home.latest.items.map((item, index) => (
              <motion.article
                key={item.title}
                className="group min-h-[250px] rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_100%)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-black/55">
                      {item.type}
                    </p>
                    <h3 className="mt-5 max-w-[10ch] font-display text-3xl leading-none">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-black/65 transition group-hover:text-black">
                    {item.action}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-3 py-10 md:py-16">
        <Reveal className="mx-auto w-[min(1120px,100%)]">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
                {home.community.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[11ch] font-display text-4xl leading-tight md:text-5xl">
                {home.community.title}
              </h2>
            </div>
            <div className="grid gap-4">
              {home.community.items.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6 }}
                >
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-black/65">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-3 py-10 md:py-16">
        <Reveal className="mx-auto grid w-[min(1120px,100%)] gap-10 border-y border-black/10 py-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
              {home.sections.about.eyebrow}
            </p>
            <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-tight md:text-5xl">
              {home.sections.about.title}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-black/65">
            {home.sections.about.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-3 py-10 md:py-16">
        <Reveal className="mx-auto w-[min(1120px,100%)]">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
              {home.values.eyebrow}
            </p>
            <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-tight md:text-5xl">
              {home.values.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-black/65">{home.values.text}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {home.values.items.map((value, index) => (
              <motion.article
                key={value.title}
                className="rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f8f8f8_100%)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, rotate: -0.4 }}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-black/55">{value.number}</p>
                <h3 className="mt-5 text-xl font-semibold leading-tight">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{value.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-3 py-10 md:py-16">
        <Reveal className="mx-auto grid w-[min(1120px,100%)] gap-8 rounded-[2rem] bg-black px-7 py-10 text-white md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-white/70">
              {home.pastors.eyebrow}
            </p>
            <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-tight md:text-5xl">
              {home.pastors.title}
            </h2>
          </div>
          <div className="space-y-5">
            {home.pastors.text.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-white/72">
                {paragraph}
              </p>
            ))}
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <Link
                to={getLocalizedPath(locale, "vision")}
                className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-white"
              >
                {home.pastors.action}
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>

      <section className="px-3 pb-16 pt-10 md:pb-24 md:pt-16">
        <Reveal className="mx-auto grid w-[min(1120px,100%)] gap-8 rounded-[2rem] border border-black/10 bg-white p-7 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
              {home.sections.contact.eyebrow}
            </p>
            <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-tight md:text-5xl">
              {home.sections.contact.title}
            </h2>
          </div>
          <div className="space-y-4 text-base text-black/70">
            {home.sections.contact.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default HomePage;
