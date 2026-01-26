"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { ChevronDown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isGlitching, setIsGlitching] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, Math.random() * 4000 + 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleCtaClick = () => {
    // Trigger screen shake
    setIsShaking(true)
    
    // Animate with Framer Motion
    controls.start({
      x: [0, -5, 5, -3, 3, -2, 2, 0],
      y: [0, -3, 3, -2, 2, -1, 1, 0],
      transition: { duration: 0.4 }
    })

    setTimeout(() => {
      setIsShaking(false)
      document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <motion.section 
      ref={sectionRef}
      animate={controls}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isShaking ? 'screen-shake' : ''}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001428] via-[#000a14] to-black" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#ffd700]/30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={isGlitching ? "glitch-effect" : ""}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-bold mb-4 tracking-tight">
            <span className="gradient-text retro-shadow">FART</span>
            <br />
            <span className="gradient-text retro-shadow">FIGHTER</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl text-[#ffd700] font-mono mb-8 retro-shadow"
        >
          Der ultimative Furz-Kampf beginnt!
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base sm:text-lg text-white/70 font-mono mb-12 max-w-2xl mx-auto"
        >
          Ein humorvolles 2D-Kampfspiel mit 6 einzigartigen Furz-Kämpfern, 
          Retro-Pixel-Art und epischen Special Moves
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="relative text-lg sm:text-xl md:text-2xl px-8 sm:px-12 py-6 sm:py-8 font-mono bg-gradient-to-r from-[#ff6500] via-[#ff8c00] to-[#ff6500] hover:from-[#ff4500] hover:via-[#ff6500] hover:to-[#ff4500] text-black border-0 rounded-lg pulse-glow transition-all duration-300 hover:scale-105"
            onClick={handleCtaClick}
          >
            <Rocket className="mr-2 h-6 w-6" />
            JETZT UNTERSTÜTZEN
            <Rocket className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-mono gradient-text font-bold">6</div>
            <div className="text-sm text-white/60 font-mono">KÄMPFER</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-mono gradient-text font-bold">3</div>
            <div className="text-sm text-white/60 font-mono">ARENAS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-mono gradient-text font-bold">100%</div>
            <div className="text-sm text-white/60 font-mono">FURZ-POWER</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-[#ffd700]/70 hover:text-[#ffd700] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm font-mono mb-2">MEHR ERFAHREN</span>
          <ChevronDown className="h-8 w-8 bounce-arrow" />
        </button>
      </motion.div>
    </motion.section>
  )
}
