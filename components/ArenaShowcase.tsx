"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

const stages = [
  {
    id: 1,
    name: "HINTERHOF ARENA",
    image: "/images/stages/stage-1.png",
    description:
      "Der klassische Kampfplatz - Mülltonnen, Graffiti und pure Street-Vibes",
  },
  {
    id: 2,
    name: "NEON CITY",
    image: "/images/stages/stage-2.png",
    description:
      "Leuchtende Skyline und pulsierende Beats in der Cyberpunk-Metropole",
  },
  {
    id: 3,
    name: "ARENA INFERNO",
    image: "/images/stages/stage3.png",
    description:
      "Die ultimative Kampfarena mit loderndem Feuer und epischer Atmosphäre",
  },
];

const items = [
  {
    name: "Fass",
    image: "/images/items/barrel.png",
    effect: "Explosiver Schaden",
  },
  { name: "Flasche", image: "/images/items/bottle.png", effect: "Wurfattacke" },
  { name: "Stuhl", image: "/images/items/chair.png", effect: "Schwerer Hieb" },
  { name: "Stein", image: "/images/items/rock.png", effect: "Fernkampf" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ArenaShowcase() {
  return (
    <section id="arenas" className="relative py-24 px-4">
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
            KAMPF-ARENAS
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            3 einzigartige Schauplätze für epische Kämpfe
          </p>
        </motion.div>

        {/* Stages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stages.map((stage) => (
            <motion.div
              key={stage.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:neon-glow-box"
            >
              {/* Stage Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={stage.image}
                  alt={stage.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 scanlines opacity-30" />

                {/* Stage Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#ffd700] flex items-center justify-center">
                  <span className="text-black font-mono font-bold">
                    {stage.id}
                  </span>
                </div>
              </div>

              {/* Stage Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#ffd700]" />
                  <h3 className="text-lg font-mono font-bold text-[#ffd700]">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-white/70 font-mono text-sm">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Items Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-[#ff8c00] mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            KAMPF-ITEMS
            <Sparkles className="w-6 h-6" />
          </h3>
          <p className="text-white/60 font-mono text-sm">
            Nutze demnächst Items für taktische Vorteile im Kampf
          </p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass rounded-xl p-4 text-center transition-all duration-300 hover:neon-glow-box"
            >
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-br from-[#001e3c] to-[#000a14] flex items-center justify-center border border-[#ffd700]/30">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="text-sm font-mono font-bold text-[#ffd700] mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-[#ff8c00] font-mono">{item.effect}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
