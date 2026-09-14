import { Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { getLocalizedPath } from "../content/siteContent";

function PlaceholderImage({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[linear-gradient(135deg,#f8f8f8_0%,#ececec_100%)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),linear-gradient(135deg,transparent_0%,rgba(0,0,0,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_55%,rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute left-5 top-5 text-[0.68rem] font-black uppercase tracking-[0.24em] text-black/40">
        Photo Placeholder
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="max-w-[14ch] text-2xl font-semibold leading-tight text-white">{label}</p>
      </div>
    </div>
  );
}

function VisitPage() {
  const { locale, content } = useOutletContext();
  const page = content.pages.visit;

  return (
    <main className="px-3 py-10 md:py-16">
      <section className="mx-auto w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
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
                  to={getLocalizedPath(locale, "information")}
                  className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  {page.hero.primaryAction}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "information")}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                >
                  {page.hero.secondaryAction}
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {page.quickFacts.map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-black/10 bg-[#fafafa] p-5">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-black/75">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <PlaceholderImage label={page.gallery[0]} className="min-h-[340px]" />
            <div className="grid gap-5 sm:grid-cols-2">
              <PlaceholderImage label={page.gallery[1]} className="min-h-[220px]" />
              <PlaceholderImage label={page.gallery[2]} className="min-h-[220px]" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
              {page.expectationTitle}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              {locale === "es" ? "Una visita clara, simple y acogedora." : "A clear, simple, welcoming visit."}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.expectations.map((item, index) => (
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
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
                {page.galleryTitle}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                {locale === "es" ? "Imagenes placeholder para ilustrar la pagina." : "Placeholder imagery to shape the page."}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.gallery.slice(3).map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <PlaceholderImage label={label} className="min-h-[280px]" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-black p-7 text-white md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-white/55">
              {locale === "es" ? "Detalles practicos" : "Practical details"}
            </p>
            <h2 className="mt-4 max-w-[11ch] font-display text-4xl leading-tight md:text-5xl">
              {locale === "es" ? "Todo lo que una familia nueva suele preguntar." : "What new families usually want to know."}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              {page.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {page.infoSections.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1200px,100%)]">
        <Reveal className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
              {page.faqTitle}
            </p>
            <div className="mt-8 space-y-4">
              {page.faqs.map((item, index) => (
                <div key={item.question} className="rounded-[1.35rem] border border-black/10 bg-[#fafafa] p-5">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-black/42">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_100%)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-black/55">
              {page.cta.title}
            </p>
            <p className="mt-5 text-base leading-8 text-black/65">{page.cta.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "information")}
                  className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  {page.cta.primaryAction}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "information")}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-black transition hover:border-black/20"
                >
                  {page.cta.secondaryAction}
                </Link>
              </motion.div>
            </div>
            <div className="mt-8">
              <PlaceholderImage
                label={locale === "es" ? "Mapa placeholder" : "Map placeholder"}
                className="min-h-[240px]"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default VisitPage;
