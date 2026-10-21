import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SHOW_AFTER = 400 


export default function ButtonToTop() {
  const { scrollY, scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  // Covers pages opened or refreshed part-way down
  useEffect(() => {
    setVisible(window.scrollY > SHOW_AFTER)
  }, [])

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > SHOW_AFTER))

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-orange/30 bg-orange text-white shadow-lg shadow-orange/25 transition-all duration-300 hover:-translate-y-1 hover:bg-nearblack hover:text-cream hover:shadow-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:bottom-7 sm:right-7"
        >
          {/* Scroll progress ring */}
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              stroke="#f0f0f0"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp
            size={22}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}