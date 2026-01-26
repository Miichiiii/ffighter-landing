"use client"

import { motion } from "framer-motion"
import { Gamepad2, Zap, Music, MapPin, Smartphone, Bot } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "6 EINZIGARTIGE FURZ-KÄMPFER",
    description: "Jeder Kämpfer hat unique Sprites für alle Aktionen: Stehen, Gehen, Angriff, Verteidigung, Sprung, Ducken, Sieg, Niederlage",
  },
  {
    icon: Zap,
    title: "SPEZIAL-ATTACKEN",
    description: "Donnernder Duft-Hammer, Sonic Stink-Welle, Turbo-Pups Combo und mehr epische Moves!",
    specialMoves: [
      "Donnernder Duft-Hammer",
      "Sonic Stink-Welle",
      "Turbo-Pups Combo",
      "Drei-Gänge-Geruchs-Menü",
    ],
  },
  {
    icon: Music,
    title: "ORIGINAL FURZ-SOUNDTRACK",
    description: "Der Furzsong, Der Furzsong2, Furz-Symphonie - Stage-spezifische Musik für maximale Stimmung",
  },
  {
    icon: MapPin,
    title: "3 KAMPF-ARENAS",
    description: "Kämpfe in einzigartigen Umgebungen mit animierten Hintergründen und Parallax-Effekten",
  },
  {
    icon: Smartphone,
    title: "MOBILE & DESKTOP SUPPORT",
    description: "Analog-Joystick für Mobile, Tastatur für Desktop, Haptic Feedback für Telegram Mini App",
  },
  {
    icon: Bot,
    title: "INTELLIGENTE KI",
    description: "Progressive Schwierigkeitsstufen, adaptive Gegner-Strategien und reaktive Kampf-Mechaniken",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="relative py-24 px-4">
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
            GAME FEATURES
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            Alles was Fart Fighter zum ultimativen Furz-Kampfspiel macht
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative glass rounded-xl p-6 cursor-pointer transition-all duration-300 hover:neon-glow-box"
            >
              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ffd700]/0 via-[#ffd700]/20 to-[#ffd700]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-[#ffd700]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-mono font-bold text-[#ffd700] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 font-mono text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Special Moves List */}
                {feature.specialMoves && (
                  <ul className="mt-4 space-y-2">
                    {feature.specialMoves.map((move, i) => (
                      <li key={i} className="flex items-center text-xs font-mono text-[#ff8c00]">
                        <Zap className="w-3 h-3 mr-2" />
                        {move}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
