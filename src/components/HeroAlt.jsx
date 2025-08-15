import React from 'react'
import { motion } from 'framer-motion'
import QuickPlannerForm from './QuickPlannerForm.jsx'

export default function HeroAlt() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.06 } }
  }
  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  }

  return (
    <section id="hero-alt" className="relative">
      <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2
                      bg-[rgba(74,196,252,0.10)] dark:bg-[rgba(74,196,252,0.08)]">
        <div className="container-px max-w-6xl mx-auto py-10 md:py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-[1.05fr_1.35fr] gap-10 items-center"
          >
            {/* LEFT */}
            <div>
              <button
                type="button"
                className="inline-flex items-center h-7 px-3.5 rounded-full text-[13px]
                           bg-white/85 dark:bg-white/10 backdrop-blur border
                           border-black/10 dark:border-white/15 text-black/70 dark:text-white/70
                           ring-1 ring-[#4AC4FC]/40 shadow-[0_8px_24px_rgba(74,196,252,0.25)]"
                aria-label="Alt hero badge"
              >
                Date Night Ideas
              </button>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Plan a Perfect Night in <span className="text-[color:var(--logo-blue)]">Minutes</span>
              </h1>

              <motion.p variants={item} className="mt-4 text-lg text-black/70 dark:text-white/70">
                Pick a vibe, we’ll handle the rest — venues, timing, and a smooth flow.
              </motion.p>

              {/* Same main planner form, reused */}
              <QuickPlannerForm />
            </div>

            {/* RIGHT — different image w/ subtle left gradient */}
            <motion.div variants={item} className="relative">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10 shadow-2xl">
                <img
                  src="/hero-outdoors.jpg"
                  alt="Cozy outdoor trip — alternate hero"
                  className="block w-full object-cover object-center h-[22rem] md:h-[26rem] xl:h-[30rem]"
                  loading="eager"
                  decoding="async"
                />
                {/* Left-edge fade to keep focus on the form */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-y-0 left-0 w-52 md:w-64
                                  bg-gradient-to-r from-white/90 via-white/40 to-transparent
                                  dark:from-black/60 dark:via-black/30" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
