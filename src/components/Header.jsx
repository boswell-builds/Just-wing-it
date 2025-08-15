import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const nav = []

const phrases = [
  "✈️ Surprise weekend getaway",
  "💡 Need a last minute date idea?",
  "🦸 We got you covered",
  "🤖 No one will ever know it was a.i."
]

function useDarkMode() {
  const [dark, setDark] = React.useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const firstRender = React.useRef(true)
  React.useEffect(() => {
    const root = document.documentElement
    if (firstRender.current) {
      dark ? root.classList.add('dark') : root.classList.remove('dark')
      firstRender.current = false
      return
    }
    root.classList.add('theme-transition')
    const t = setTimeout(() => root.classList.remove('theme-transition'), 350)
    if (dark) { root.classList.add('dark'); localStorage.theme = 'dark' }
    else { root.classList.remove('dark'); localStorage.theme = 'light' }
    return () => clearTimeout(t)
  }, [dark])

  React.useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = e => { if (!('theme' in localStorage)) setDark(e.matches) }
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  return [dark, setDark]
}

export default function Header({ heroAlt = false, onHeroToggle = () => {} }) {
  const [i, setI] = React.useState(0)
  const [dark, setDark] = useDarkMode()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % phrases.length), 4000)
    return () => clearInterval(id)
  }, [])
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === 'd' && e.shiftKey) { e.preventDefault(); setDark(v => !v) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setDark])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3
                                 focus:px-3 focus:py-2 focus:rounded-md focus:bg-black focus:text-white">
        Skip to content
      </a>

      <header className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70
                          dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10
                          transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className={`container-px max-w-6xl mx-auto ${scrolled ? "h-14" : "h-16"} flex items-center justify-between`}>
          {/* Left: Logo + Wordmark */}
          <a href="#" className="group flex items-center gap-5">
            <div className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10
                            ring-offset-2 ring-offset-white dark:ring-offset-neutral-200 shadow-sm
                            transition-transform duration-200 group-hover:scale-[1.03]">
              <img src="/logo_justwingit_circle.png" alt="Just Wing It logo"
                   className="h-full w-full object-contain object-center" draggable="false"
                   loading="eager" decoding="async" fetchpriority="high" />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/40 dark:ring-white/10" />
            </div>

            <h1 className="no-theme-fade font-extrabold text-[28px] md:text-[26px] leading-none tracking-tight whitespace-nowrap antialiased">
              <span className="text-[color:var(--logo-blue)] dark:text-[#7ccff3]">Just&nbsp;</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r
                               from-[color:var(--logo-blue)] via-[#2AA7D2] to-[#6fc8ee]
                               dark:from-[#8ad7ff] dark:via-[#4fc2ea] dark:to-[#1c87b7]
                               transition-colors duration-300 dark:drop-shadow-[0_1px_0_rgba(255,255,255,0.10)]">
                Wing&nbsp;It
              </span>
            </h1>
          </a>

          {/* Middle: Nav */}
          <nav className="hidden md:flex items-center gap-6 ml-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href}
                 className="group relative text-sm font-medium text-black/70 dark:text-white/70 hover:text-current transition-colors">
                {n.label}
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] origin-left scale-x-0
                                 bg-[color:var(--logo-blue)] dark:bg-[#7ccff3] transition-transform duration-300
                                 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right: Rotating phrase + Trip/Date toggle + Theme toggle */}
          <div className="flex items-center gap-4">
            {/* Rotating phrase */}
            <div className="hidden sm:block" aria-live="polite">
              <div className="relative min-w-[16ch] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="inline-block whitespace-nowrap text-base text-[#1f292d] dark:text-[#f9fafb] transition-colors duration-300"
                  >
                    {phrases[i]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Trip / Date Night toggle (labeled pill) */}
            <div className="hidden sm:block">
              <button
                type="button" role="switch" aria-checked={heroAlt} onClick={onHeroToggle}
                aria-label="Toggle Trip / Date Night hero"
                className={`relative inline-flex items-center h-8 w-[138px] rounded-full border transition-colors duration-300
                  ${heroAlt
                    ? 'bg-[color:var(--logo-blue)]/15 border-[color:var(--logo-blue)]/40'
                    : 'bg-white/70 dark:bg-white/10 border-black/10 dark:border-white/15'}`}
              >
                <span className={`pointer-events-none absolute top-1 left-1 h-6 w-[calc(50%-0.25rem)] rounded-full bg-white shadow
                                  transition-transform duration-300 ease-out
                                  ${heroAlt ? 'translate-x-[calc(100%+0.5rem)]' : 'translate-x-0'}`} />
                <span className={`relative z-10 flex-1 text-xs font-semibold text-center select-none
                                  ${heroAlt ? 'text-black/60 dark:text-white/70' : 'text-black dark:text-white'}`}>
                  Trip
                </span>
                <span className={`relative z-10 flex-1 text-xs font-semibold text-center select-none
                                  ${heroAlt ? 'text-black dark:text-white' : 'text-black/60 dark:text-white/70'}`}>
                  Date&nbsp;Night
                </span>
              </button>
            </div>

            {/* Theme switch */}
            <button
              onClick={() => setDark(v => !v)} aria-pressed={dark} aria-keyshortcuts="Shift+D"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={`${dark ? "Switch to light" : "Switch to dark"} (Shift+D)`}
              className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 border focus:outline-none focus:ring-4
                ${dark
                  ? "bg-neutral-800 border-white/60 focus:ring-white/25"
                  : "bg-[color:var(--logo-blue)]/90 border-[color:var(--logo-blue)]/40 focus:ring-[color:var(--logo-blue)]/30"}`}
            >
              <span className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md grid place-items-center
                                transform transition-transform duration-200 transition-colors
                                ${dark ? "translate-x-8" : "translate-x-0"}`}>
                {dark ? (
                  <svg className="h-3.5 w-3.5 text-neutral-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
                  </svg>
                ) : (
                  <svg className="h-3.5 w-3.5 text-[color:var(--logo-blue)]" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
