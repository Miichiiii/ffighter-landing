"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize2, Keyboard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const controlsDesktop = [
  { key: "↑", action: "Sprung" },
  { key: "↓", action: "Ducken" },
  { key: "←", action: "Links" },
  { key: "→", action: "Rechts" },
  { key: "D", action: "Punch" },
  { key: "A", action: "Kick" },
  { key: "S", action: "Block" },
]

const controlsMobile = [
  { key: "Joystick", action: "Bewegung" },
  { key: "A-Button", action: "Kick" },
  { key: "D-Button", action: "Punch" },
  { key: "S-Button", action: "Block" },
]

export function GameplayDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section id="gameplay" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold gradient-text retro-shadow mb-4">
            GAMEPLAY
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            Erlebe die Action in Echtzeit
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* CRT Monitor Frame */}
          <div className="relative rounded-2xl border-8 border-[#1a1a2e] bg-[#1a1a2e] p-4 shadow-2xl">
            {/* Monitor Bezel Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#252542] rounded-b-lg" />
            
            {/* Screen */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              {/* Gameplay GIF */}
              <div className="absolute inset-0">
                <img 
                  src="/images/stages/gif.gif" 
                  alt="Gameplay Demo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Scanlines */}
              <div className="absolute inset-0 scanlines pointer-events-none" />

              {/* Play Overlay */}
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                >
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-[#ffd700]/90 hover:bg-[#ffd700] text-black pulse-glow"
                  >
                    <Play className="w-10 h-10 ml-1" />
                  </Button>
                </motion.div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Monitor Stand */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a2e] rounded-b-xl" />
          </div>
        </motion.div>

        {/* Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Desktop Controls */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 flex items-center justify-center">
                <Keyboard className="w-6 h-6 text-[#ffd700]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-[#ffd700]">TASTATUR-STEUERUNG</h3>
                <p className="text-xs text-white/50 font-mono">Desktop</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {controlsDesktop.map((control, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#001e3c] border border-[#ffd700]/30 flex items-center justify-center font-mono text-[#ffd700] text-sm font-bold">
                    {control.key}
                  </div>
                  <span className="text-white/70 font-mono text-sm">{control.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#ffd700]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-[#ffd700]">MOBILE CONTROLS</h3>
                <p className="text-xs text-white/50 font-mono">Touch & Telegram Mini App</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {controlsMobile.map((control, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#001e3c] border border-[#ffd700]/30 flex items-center justify-center font-mono text-[#ff8c00] text-xs font-bold">
                    {control.key.slice(0, 2)}
                  </div>
                  <span className="text-white/70 font-mono text-sm">{control.action}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[#ffd700]/10 border border-[#ffd700]/20">
              <p className="text-xs text-[#ffd700] font-mono">
                Haptic Feedback & Multi-Touch Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
