// src/components/QuickPlannerForm.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function QuickPlannerForm() {
  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        console.log('Planner form:', data)
        const el = document.querySelector('#form')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      className="mt-6 grid gap-3 sm:grid-cols-2"
      aria-label="Trip planner quick form"
    >
      <div className="sm:col-span-2">
        <label htmlFor="city" className="sr-only">City / Location</label>
        <input
          id="city" name="city" type="text" required
          className="w-full h-12 rounded-xl px-4
                     bg-white/80 dark:bg-white/10 backdrop-blur
                     border border-black/10 dark:border-white/15
                     text-black/80 dark:text-white/80 placeholder-black/50 dark:placeholder-white/50
                     focus:outline-none focus:ring-4 focus:ring-[#008fcc]/25 focus:border-[#008fcc]
                     transition-colors"
          placeholder="Where to?"
        />
      </div>

      <div>
        <label htmlFor="date" className="sr-only">Dates</label>
        <input
          id="date" name="date" type="text" required
          className="w-full h-12 rounded-xl px-4
                     bg-white/80 dark:bg-white/10 backdrop-blur
                     border border-black/10 dark:border-white/15
                     text-black/80 dark:text-white/80 placeholder-black/50 dark:placeholder-white/50
                     focus:outline-none focus:ring-4 focus:ring-[#008fcc]/25 focus:border-[#008fcc]
                     transition-colors"
          placeholder="Dates (e.g., Aug 30–Sep 2)"
        />
      </div>

      <div>
        <label htmlFor="vibe" className="sr-only">Vibe</label>
        <input
          id="vibe" name="vibe" type="text" required
          className="w-full h-12 rounded-xl px-4
                     bg-white/80 dark:bg-white/10 backdrop-blur
                     border border-black/10 dark:border-white/15
                     text-black/80 dark:text-white/80 placeholder-black/50 dark:placeholder-white/50
                     focus:outline-none focus:ring-4 focus:ring-[#008fcc]/25 focus:border-[#008fcc]
                     transition-colors"
          placeholder="Vibe (romantic, foodie, nightlife, outdoors...)"
        />
      </div>

      <div className="sm:col-span-2 relative">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email" name="email" type="email" required
          className="w-full h-12 rounded-xl pl-4 pr-14
                     bg-white/80 dark:bg-white/10 backdrop-blur
                     border border-black/10 dark:border-white/15
                     text-black/80 dark:text-white/80 placeholder-black/50 dark:placeholder-white/50
                     focus:outline-none focus:ring-4 focus:ring-[#008fcc]/25 focus:border-[#008fcc]
                     transition-colors"
          placeholder="Where should we send it?"
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 aspect-square rounded-full
                     bg-white dark:bg-white/95 grid place-items-center
                     border border-black/10 dark:border-white/20
                     shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                     focus:outline-none focus:ring-4 focus:ring-[#008fcc]/30"
          aria-label="Start My Plan"
          title="Start My Plan"
        >
          <img
            src="/logo_justwingit_circle.png"
            alt=""
            className="h-6 w-6 rounded-full pointer-events-none select-none object-contain object-center"
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
    </motion.form>
  )
}
