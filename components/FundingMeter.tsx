"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Clock, Target, CheckCircle2, Lock } from "lucide-react"

const fundingGoal = 20000
const currentFunding = 50
const backers = 5
const daysLeft = 288

const stretchGoals = [
  { amount: 5000, title: "3 Neue Kämpfer", unlocked: true },
  { amount: 10000, title: "10 Neue Kampf-Items, Maps und Songs", unlocked: false },
  { amount: 15000, title: "Online Multiplayer", unlocked: false },
  { amount: 20000, title: "Tournament Mode", unlocked: false },
  { amount: 30000, title: "Story Mode + Cutscenes", unlocked: false },
  { amount: 50000, title: "Mobile App Release (iOS/Android)", unlocked: false },
]

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {displayValue.toLocaleString('de-DE')}{suffix}
    </span>
  )
}

export function FundingMeter() {
  const progress = (currentFunding / fundingGoal) * 100

  return (
    <section id="funding" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold gradient-text retro-shadow mb-4">
            KICKSTARTER GOALS
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            Hilf uns, Fart Fighter noch besser zu machen!
          </p>
        </motion.div>

        {/* Main Funding Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 sm:p-8 mb-8 neon-glow-box"
        >
          {/* Current Funding */}
          <div className="text-center mb-8">
            <div className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold gradient-text mb-2">
              <AnimatedNumber value={currentFunding} suffix="€" />
            </div>
            <p className="text-white/70 font-mono">
              von <span className="text-[#ffd700]">{fundingGoal.toLocaleString('de-DE')}€</span> Ziel
            </p>
          </div>

          {/* Retro Segmented Health Bar */}
          <div className="relative h-10 bg-black/70 rounded-sm overflow-hidden mb-8 border-4 border-[#ffd700]/50 pixel-border">
            {/* Segment Lines */}
            <div className="absolute inset-0 flex">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r-2 border-black/50 last:border-r-0"
                />
              ))}
            </div>
            {/* Progress Fill */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 health-bar-segmented"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer" />
            </motion.div>
            {/* Percentage Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono font-bold text-white text-lg drop-shadow-lg chromatic-text px-3 py-1 bg-black/50 rounded">
                {Math.round(progress)}% POWER
              </span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-black/30">
              <Users className="w-6 h-6 text-[#ffd700] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                <AnimatedNumber value={backers} />
              </div>
              <p className="text-xs text-white/60 font-mono">BACKER</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-black/30">
              <Target className="w-6 h-6 text-[#ff8c00] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                {Math.round(progress)}%
              </div>
              <p className="text-xs text-white/60 font-mono">ERREICHT</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-black/30">
              <Clock className="w-6 h-6 text-[#ff4500] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                <AnimatedNumber value={daysLeft} />
              </div>
              <p className="text-xs text-white/60 font-mono">TAGE</p>
            </div>
          </div>
        </motion.div>

        {/* Stretch Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-mono font-bold text-[#ffd700] mb-6 text-center">
            STRETCH GOALS
          </h3>
          <div className="space-y-4">
            {stretchGoals.map((goal, index) => {
              const goalProgress = Math.min((currentFunding / goal.amount) * 100, 100)
              const isUnlocked = currentFunding >= goal.amount

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass rounded-xl p-4 transition-all duration-300 ${
                    isUnlocked ? 'border-2 border-[#ffd700] neon-glow-box' : 'opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isUnlocked 
                        ? 'bg-gradient-to-br from-[#ffd700] to-[#ff8c00]' 
                        : 'bg-black/50 border border-[#ffd700]/30'
                    }`}>
                      {isUnlocked ? (
                        <CheckCircle2 className="w-6 h-6 text-black" />
                      ) : (
                        <Lock className="w-5 h-5 text-[#ffd700]/50" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-mono font-bold ${isUnlocked ? 'text-[#ffd700]' : 'text-white/70'}`}>
                          {goal.title}
                        </span>
                        <span className="font-mono text-sm text-[#ff8c00]">
                          {goal.amount.toLocaleString('de-DE')}€
                        </span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goalProgress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full rounded-full ${
                            isUnlocked 
                              ? 'bg-gradient-to-r from-[#ffd700] to-[#ff8c00]' 
                              : 'bg-[#ffd700]/30'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
