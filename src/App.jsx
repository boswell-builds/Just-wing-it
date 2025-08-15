import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HeroAlt from './components/HeroAlt.jsx'
import Footer from './components/Footer.jsx'
import { ToastProvider } from './components/Toast.jsx'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const [useAltHero, setUseAltHero] = useState(false)
  useEffect(() => { const s = localStorage.getItem('useAltHero'); if (s) setUseAltHero(s === '1') }, [])
  useEffect(() => { localStorage.setItem('useAltHero', useAltHero ? '1' : '0') }, [useAltHero])

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Header heroAlt={useAltHero} onHeroToggle={() => setUseAltHero(v => !v)} />
        <main id="main" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div key={useAltHero ? 'alt' : 'primary'}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              {useAltHero ? <HeroAlt /> : <Hero />}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}
