"use client"

import { motion } from "framer-motion"
import { Wind, Sword, Crown, Trophy, Gamepad2, Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    id: 1,
    name: "FURZ-FAN",
    price: 5,
    icon: Wind,
    color: "from-gray-500 to-gray-600",
    rewards: [
      "Digitaler Download",
      "Credits im Spiel",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "KÄMPFER",
    price: 15,
    icon: Sword,
    color: "from-[#cd7f32] to-[#8b4513]",
    rewards: [
      "Alles von Tier 1",
      "Exclusive Character Skin",
      "Digital Artbook",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "FURZ-KÖNIG",
    price: 30,
    icon: Crown,
    color: "from-[#ffd700] to-[#ff8c00]",
    rewards: [
      "Alles von Tier 2",
      "Soundtrack Download",
      "Beta-Access",
      "Dein Name als NPC im Spiel",
    ],
    popular: true,
  },
  {
    id: 4,
    name: "CHAMPION",
    price: 50,
    icon: Trophy,
    color: "from-[#c0c0c0] to-[#a0a0a0]",
    rewards: [
      "Alles von Tier 3",
      "Exclusive Fighter Design",
      "Signed Digital Certificate",
      "Video Call mit Entwickler",
    ],
    popular: false,
  },
  {
    id: 5,
    name: "ARCADE-LEGENDE",
    price: 100,
    icon: Gamepad2,
    color: "from-[#ff4500] to-[#ff0000]",
    rewards: [
      "Alles von Tier 4",
      "Design deinen eigenen Kämpfer",
      "Exclusive Physical Merch",
      "Lifetime Updates",
      "Private Discord Channel",
    ],
    popular: false,
  },
]

export function RewardsTiers() {
  return (
    <section id="rewards" className="relative py-24 px-4">
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
            BACKER REWARDS
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            Wähle dein Unterstützungslevel und sichere dir exklusive Belohnungen!
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-2xl p-6 flex flex-col ${
                tier.popular ? 'border-2 border-[#ffd700] neon-glow-box' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] rounded-full">
                  <div className="flex items-center gap-1 text-black font-mono text-xs font-bold">
                    <Star className="w-3 h-3" />
                    BEST VALUE
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 mx-auto`}>
                <tier.icon className="w-8 h-8 text-white" />
              </div>

              {/* Tier Name */}
              <h3 className="text-xl font-mono font-bold text-center text-[#ffd700] mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-mono font-bold text-white">{tier.price}€</span>
              </div>

              {/* Rewards List */}
              <ul className="space-y-3 flex-1 mb-6">
                {tier.rewards.map((reward, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-mono text-white/80">
                    <Check className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    {reward}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full font-mono font-bold ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#ffd700] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#ff4500] text-black'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-[#ffd700]/30 hover:border-[#ffd700]'
                }`}
              >
                AUSWÄHLEN
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 font-mono text-sm">
            Alle Preise inkl. MwSt. • Digitale Lieferung • Sofortiger Beta-Zugang ab Tier 3
          </p>
        </motion.div>
      </div>
    </section>
  )
}
