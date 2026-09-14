import { Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { getLocalizedPath } from "../content/siteContent";

function PlaceholderVisionImage({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[linear-gradient(135deg,#f8f8f8_0%,#ececec_100%)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_50%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute left-5 top-5 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-black/38">
        Image Placeholder
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="max-w-[14ch] text-2xl font-semibold leading-tight text-white">{label}</p>
      </div>
    </div>
  );
}

function VisionPage() {
  const { locale, content } = useOutletContext();
  const page = content.pages.vision;

  return (
    <main className="px-3 py-10 md:py-16">
      <section className="mx-auto w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
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
                  to={getLocalizedPath(locale, "friendsFamily")}
                  className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  {page.hero.primaryAction}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "ministry")}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                >
                  {page.hero.secondaryAction}
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-5">
            <PlaceholderVisionImage label={page.gallery[0]} className="min-h-[340px]" />
            <div className="grid gap-5 sm:grid-cols-2">
              <PlaceholderVisionImage label={page.gallery[1]} className="min-h-[220px]" />
              <PlaceholderVisionImage label={page.gallery[2]} className="min-h-[220px]" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="rounded-[2rem] border border-black bg-black px-7 py-10 text-white md:px-10 md:py-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-white/55">
            {page.mission.eyebrow}
          </p>
          <h2 className="mt-4 max-w-5xl font-display text-4xl leading-tight md:text-6xl">
            {page.mission.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
            {page.mission.text}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
            {page.storyTitle}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.story.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_100%)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
              {page.valuesTitle}
            </p>
            <h2 className="mt-4 max-w-[11ch] font-display text-4xl leading-tight md:text-5xl">
              {locale === "es" ? "Convicciones que sostienen nuestra cultura." : "Convictions that shape our culture."}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {page.values.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
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

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
            {page.timelineTitle}
          </p>
          <div className="mt-8 space-y-4">
            {page.timeline.map((item, index) => (
              <motion.article
                key={item.year + item.title}
                className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:grid-cols-[140px_1fr]"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <div className="text-sm font-black uppercase tracking-[0.24em] text-black/48">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
              {page.pastorsTitle}
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
              {page.pastorsText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <PlaceholderVisionImage label={page.gallery[3]} className="min-h-[360px]" />
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
                {page.cta.title}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/65">{page.cta.text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "visit")}
                  className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  {page.cta.primaryAction}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "friendsFamily")}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                >
                  {page.cta.secondaryAction}
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default VisionPage;
