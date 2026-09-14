import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { getLocalizedPath } from "../content/siteContent";

function Header({ locale, currentPageKey, content }) {
  const altLocale = locale === "es" ? "en" : "es";
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2
  });

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <motion.div
        className="absolute left-0 top-0 h-1 w-full origin-left bg-black"
        style={{ scaleX: progressScale }}
      />
      <div className="bg-black text-white">
        <div className="mx-auto flex min-h-[74px] w-[min(1320px,calc(100%-1.5rem))] items-center justify-between gap-6">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/75">
              {content.topBar.leftLabel}
            </p>
            <p className="mt-1 text-xl font-extrabold leading-none">{content.topBar.leftTitle}</p>
            <p className="mt-1 text-sm text-white/75">{content.topBar.leftText}</p>
          </motion.div>
          <motion.div
            className="hidden flex-1 text-center md:block"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl font-extrabold leading-none">{content.topBar.rightTitle}</p>
            <p className="mt-1 text-sm text-white/75">{content.topBar.rightText}</p>
          </motion.div>
        </div>
      </div>

      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex min-h-[62px] w-[min(1320px,calc(100%-1.5rem))] items-center justify-between gap-6">
          <div className="hidden items-center gap-8 lg:flex">
            {content.utilityLinks.map((item) => (
              <motion.div key={item.key} whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
                <Link
                  to={getLocalizedPath(locale, item.key)}
                  className="text-sm font-black uppercase tracking-[0.08em] text-black transition hover:text-black/60"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-4">
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "information")}
                  className="rounded-sm border border-black/20 px-5 py-3 text-sm font-bold text-black transition hover:border-black/40"
                >
                {content.ctas.information}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(locale, "login")}
                  className="rounded-sm border border-black/20 px-5 py-3 text-sm font-bold text-black transition hover:border-black/40"
                >
                {content.ctas.login}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={getLocalizedPath(altLocale, currentPageKey)}
                  className="rounded-sm border border-black/20 px-4 py-3 text-sm font-black text-black transition hover:border-black/40"
                >
                {content.ctas.switchLocale}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto grid min-h-[112px] w-[min(1320px,calc(100%-1.5rem))] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={getLocalizedPath(locale, "home")} className="flex items-center gap-4">
              <motion.img
                src="/church-logo.jpg"
                alt={content.siteName}
                className="h-14 w-14 rounded-full border border-black/10 object-cover md:h-16 md:w-16"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="max-w-[260px] text-xl font-black uppercase leading-none tracking-[0.08em] text-black md:text-2xl"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {content.siteName}
              </motion.div>
            </Link>
          </motion.div>

          <motion.nav
            className="hidden items-center justify-center border-x border-black/10 bg-white px-10 py-10 lg:flex"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-10">
              {content.navItems.map((item) => (
                <motion.div
                  key={item.key}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                >
                  <Link
                    to={getLocalizedPath(locale, item.key)}
                    className="text-[15px] font-extrabold text-black transition hover:text-black/60"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>

          <motion.div
            className="flex items-center justify-end gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm uppercase tracking-[0.22em] text-black/80">{content.ctas.menu}</span>
            <motion.div
              className="flex w-8 flex-col gap-1.5"
              whileHover="hovered"
              initial="rest"
              animate="rest"
            >
              <motion.span
                className="ml-auto block h-1 w-8 bg-black"
                variants={{ rest: { width: 32 }, hovered: { width: 20 } }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="ml-auto block h-1 w-5 bg-black"
                variants={{ rest: { width: 20 }, hovered: { width: 32 } }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
