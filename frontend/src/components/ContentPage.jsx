import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";

function ContentPage({ pageKey }) {
  const { content } = useOutletContext();
  const page = content.pages[pageKey];

  return (
    <main className="px-3 py-10 md:py-16">
      <motion.section
        className="mx-auto w-[min(1120px,100%)] rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-12"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-black/55">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 max-w-[14ch] font-display text-4xl leading-tight md:text-6xl">
          {page.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-black/65 md:text-lg">
          {page.body}
        </p>
      </motion.section>
    </main>
  );
}

export default ContentPage;
