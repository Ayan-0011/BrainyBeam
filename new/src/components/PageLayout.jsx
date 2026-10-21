import { motion, useReducedMotion } from "framer-motion";

export default function PageLayout({ eyebrow, title, description, children }) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="container-shell page-hero">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-title mt-5">{title}</h1>
          {description && <p className="muted-copy mt-6 max-w-2xl text-base leading-7 sm:text-lg">{description}</p>}
        </motion.div>
      </section>
      {children}
    </>
  );
}
