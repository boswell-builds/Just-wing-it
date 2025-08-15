import React from 'react'
import { motion } from 'framer-motion'
import QuickPlannerForm from './QuickPlannerForm.jsx'

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.06 } }
  }
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } }
  }

  const scrollToForm = () => {
    const el = document.querySelector('#hero form, #form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative">
      <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2
                      bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container-px max-w-6xl mx-auto py-10 md:py-16">
          <motion.div variants={container} initial="hidden" animate="show"
            className="grid lg:grid-cols-[1.05fr_1.35fr] gap-10 items-center">
            {/* LEFT */}
            <div>
              <button
                type="button" onClick={scrollToForm}
                className="inline-flex items-center h-7 px-3.5 rounded-full text-[13px]
                           bg-white/80 dark:bg-white/10 backdrop-blur border
                           border-black/10 dark:border-white/15 text-black/70 dark:text-white/70
                           ring-1 ring-[#4AC4FC]/40 shadow-[0_8px_24px_rgba(74,196,252,0.25)]
                           hover:ring-[#4AC4FC]/60 transition"
                aria-label="Jump to planner" title="Less Planning, More Traveling">
                Less Planning, More Traveling
              </button>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[0.01em]">
                <span className="text-neutral-900 dark:text-neutral-100">Trip Planning — </span>
                <span className="text-[color:var(--logo-blue)] dark:text-[#7ccff3]">Simplified</span>
              </h1>

              <motion.p variants={item} className="mt-4 text-lg text-black/70 dark:text-white/70">
                Ready for spontaneous adventures?
              </motion.p>

              {/* Shared quick form */}
              <QuickPlannerForm />
            </div>

            {/* RIGHT — image card */}
            <motion.div variants={item} className="relative">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10 shadow-2xl">
                <img
                  src="/hero-nightlife.jpg"
                  alt="Good vibes nightlife — sample trip vibe"
                  className="block w-full object-cover object-center h-[22rem] md:h-[26rem] xl:h-[30rem]"
                  loading="eager" decoding="async"
                />
                <div className="pointer-events-none absolute inset-0
                                bg-gradient-to-t from-black/20 via-transparent to-transparent
                                dark:from-black/35" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
