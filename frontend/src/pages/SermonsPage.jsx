import { Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { getLocalizedPath } from "../content/siteContent";

function PlaceholderMedia({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[linear-gradient(135deg,#f8f8f8_0%,#ececec_100%)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_55%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute left-5 top-5 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-black/38">
        Media Placeholder
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur-sm">
          ▶
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="max-w-[14ch] text-2xl font-semibold leading-tight text-white">{label}</p>
      </div>
    </div>
  );
}

function SermonsPage() {
  const { locale, content } = useOutletContext();
  const page = content.pages.sermons;

  return (
    <main className="px-3 py-10 md:py-16">
      <section className="mx-auto w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
              {page.eyebrow}
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-black/45">
              {page.hero.tagline}
            </p>
            <h1 className="mt-4 max-w-[11ch] font-display text-5xl leading-[0.94] md:text-7xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
              {page.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "sermons")}
                  className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  {page.hero.primaryAction}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "resources")}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                >
                  {page.hero.secondaryAction}
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 rounded-[1.6rem] border border-black/10 bg-[#f7f7f7] p-6">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                {page.featured.label}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                {page.featured.title}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-black/60">
                <span>{page.featured.speaker}</span>
                <span>{page.featured.date}</span>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/65">{page.featured.text}</p>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  to={getLocalizedPath(locale, "sermons")}
                  className="mt-6 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-black"
                >
                  {page.featured.action}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-5">
            <PlaceholderMedia label={page.featured.title} className="min-h-[360px]" />
            <div className="grid gap-5 sm:grid-cols-2">
              {page.latest.slice(0, 2).map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                    {item.date}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{item.speaker}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
            {page.latestTitle}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.latest.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <PlaceholderMedia label={item.title} className="mb-5 min-h-[220px]" />
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                  {item.date}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{item.speaker}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] border border-black bg-black p-7 text-white md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-white/55">
              {page.seriesTitle}
            </p>
            <h2 className="mt-4 max-w-[11ch] font-display text-4xl leading-tight md:text-5xl">
              {locale === "es" ? "Espacios listos para organizar mensajes por tema." : "A structure ready to organize messages by theme."}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              {page.body}
            </p>
          </div>

          <div className="grid gap-4">
            {page.series.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                  Series 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
                {page.clipsTitle}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                {locale === "es" ? "Contenido corto para compartir." : "Short-form content ready to share."}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {page.clips.map((clip, index) => (
              <motion.div
                key={clip}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <PlaceholderMedia label={clip} className="min-h-[320px]" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
            {page.resourcesTitle}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.resources.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_100%)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default SermonsPage;
