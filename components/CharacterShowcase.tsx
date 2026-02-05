"use client";

import React from "react";

import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { X, Zap, Shield, Gauge, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Stagger children animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateX: 15,
    transition: {
      duration: 0.2,
    },
  },
};

const fighters = [
  {
    id: 1,
    name: "DER FURZKÖNIG",
    image: "/images/fighters/1-king-stand-removebg-preview.png",
    actionImage: "/images/fighters/1-king-kick-removebg-preview.png",
    description: "Regiert das Reich der Winde mit eiserner Darmkraft",
    special: "Donnernder Duft-Hammer",
    stats: { strength: 95, speed: 50, defense: 85, special: 100 },
    backstory:
      "Der mächtigste aller Furz-Kämpfer. Seine Attacken sind legendär und in der gesamten Arena gefürchtet. Niemand wagt es, seinem Thron zu nahe zu kommen.",
  },
  {
    id: 2,
    name: "MRS. STINKY",
    image: "/images/fighters/2-mrs-stand-removebg-preview.png",
    actionImage: "/images/fighters/2-mrs-kick-removebg-preview.png",
    description: "Präzise Gaswolken mit tödlicher Treffsicherheit",
    special: "Sonic Stink-Welle",
    stats: { strength: 75, speed: 90, defense: 60, special: 95 },
    backstory:
      "Die Königin der Präzision. Ihre gezielten Angriffe treffen immer ihr Ziel und hinterlassen bleibenden Eindruck bei jedem Gegner.",
  },
  {
    id: 3,
    name: "DETEKTIV DUFTNOTE",
    image: "/images/fighters/3-derdete.png",
    actionImage: "/images/fighters/3-derd-attac-removebg-preview.png",
    description: "Mysteriöse Gasmischungen aus geheimer Rezeptur",
    special: "Drei-Gänge-Geruchs-Menü",
    stats: { strength: 60, speed: 85, defense: 65, special: 90 },
    backstory:
      "Ein Meister der Tarnung und Überraschung. Seine geheimen Rezepturen machen jeden Kampf unberechenbar und gefährlich.",
  },
  {
    id: 4,
    name: "DON FARTY",
    image: "/images/fighters/4-op-steh-removebg-preview.png",
    actionImage: "/images/fighters/4-op-kick-removebg-preview.png",
    description: "Blitzschnelle Flatulenzen im Sekundentakt",
    special: "Turbo-Pups Combo",
    stats: { strength: 65, speed: 100, defense: 55, special: 85 },
    backstory:
      "Der Pate der Flatulenzen. Seine blitzschnellen Combos lassen dem Gegner keine Chance zur Reaktion. Schnell, präzise, tödlich.",
  },
  {
    id: 5,
    name: "DR. DAMPF",
    image: "/images/fighters/5-dr.png",
    actionImage: "/images/fighters/5-mr-kick-removebg-preview.png",
    description: "Unzerbrechlicher Gestank mit wissenschaftlicher Präzision",
    special: "Eiserne-Därme-Defense",
    stats: { strength: 80, speed: 45, defense: 100, special: 75 },
    backstory:
      "Ein Wissenschaftler, der sich selbst zum ultimativen Verteidiger transformiert hat. Sein Gestank ist praktisch undurchdringlich.",
  },
  {
    id: 6,
    name: "DOK STINK",
    image: "/images/fighters/6-dok-stand-removebg-preview.png",
    actionImage: "/images/fighters/6-dok-kick-removebg-preview.png",
    description: "Ausgewogene Mischung aus Lautstärke und Intensität",
    special: "Pümpel-Pracht-Schlag",
    stats: { strength: 70, speed: 75, defense: 70, special: 80 },
    backstory:
      "Der Allrounder unter den Kämpfern. Dok Stink hat durch jahrelanges Training eine perfekte Balance zwischen allen Fähigkeiten erreicht.",
  },
];

function StatBar({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-1 text-white/70">
          <Icon className="w-3 h-3" />
          {label}
        </span>
        <span className="text-[#ffd700]">{value}%</span>
      </div>
      <div className="h-2 bg-black/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-[#ffd700] to-[#ff8c00] rounded-full relative"
        >
          <div className="absolute inset-0 progress-shine" />
        </motion.div>
      </div>
    </div>
  );
}

export function CharacterShowcase() {
  const [selectedFighter, setSelectedFighter] = useState<
    (typeof fighters)[0] | null
  >(null);

  return (
    <section id="characters" className="relative py-24 px-4">
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
            WÄHLE DEINEN KÄMPFER
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            6 einzigartige Charaktere mit individuellen Fähigkeiten und
            Spezialattacken
          </p>
        </motion.div>

        {/* Character Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {fighters.map((fighter) => (
            <motion.button
              key={fighter.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: {
                  type: "spring" as const,
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFighter(fighter)}
              className="group relative glass rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:neon-glow-box text-left"
              aria-label={`Select fighter ${fighter.name}`}
            >
              {/* Character Image Placeholder */}
              <div className="relative aspect-square mb-4 rounded-lg bg-gradient-to-br from-[#001e3c] to-[#000a14] overflow-hidden border-2 border-[#ffd700]/30 group-hover:border-[#ffd700] transition-colors pixel-border">
                <div className="absolute inset-0 flex items-center justify-center pixelated">
                  <img
                    src={fighter.image}
                    alt={fighter.name}
                    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* CRT Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-[#ffd700]/0 group-hover:bg-[#ffd700]/10 transition-colors duration-300"
                  whileHover={{ opacity: [0, 0.2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                {/* Scanlines */}
                <div className="absolute inset-0 scanlines opacity-30" />
              </div>

              {/* Character Name with Chromatic Effect */}
              <h3 className="text-sm sm:text-lg font-mono font-bold text-[#ffd700] mb-1 group-hover:chromatic-text transition-all">
                {fighter.name}
              </h3>

              {/* Special Move */}
              <p className="text-xs sm:text-sm text-[#ff8c00] font-mono flex items-center gap-1">
                <Zap className="w-3 h-3 glow-accent" />
                {fighter.special}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Character Detail Modal */}
        <AnimatePresence mode="wait">
          {selectedFighter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedFighter(null)}
            >
              <motion.div
                key={selectedFighter.id}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md sm:max-w-2xl glass rounded-2xl p-1.5 sm:p-8 neon-glow-box overflow-hidden"
                style={{
                  perspective: 1000,
                  maxHeight: "90dvh",
                  height: "auto",
                  overflowY: "auto",
                  boxSizing: "border-box",
                }}
              >
                {/* CRT Overlay for Modal */}
                <div className="absolute inset-0 pointer-events-none scanlines opacity-20" />
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedFighter(null)}
                  className="!block absolute top-2 right-2 sm:top-4 sm:right-4 text-white/90 hover:text-white hover:bg-white/10 z-50"
                >
                  <X className="w-8 h-8 sm:w-6 sm:h-6" />
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {/* Left: Character Visual */}
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-xl bg-gradient-to-br from-[#001e3c] to-[#000a14] overflow-hidden border-2 border-[#ffd700]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={
                            selectedFighter.actionImage || selectedFighter.image
                          }
                          alt={selectedFighter.name}
                          className="w-full h-full object-contain p-1 sm:p-4 max-h-40 sm:max-h-none"
                        />
                      </div>
                      <div className="absolute inset-0 scanlines opacity-30" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base sm:text-3xl font-mono font-bold gradient-text text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        {selectedFighter.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Stats & Info */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-white font-mono text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        {selectedFighter.description}
                      </p>
                    </div>

                    {/* Special Attack */}
                    <div className="glass rounded-lg p-4">
                      <div className="flex items-center gap-2 text-orange-400 font-mono font-bold mb-2 text-xs sm:text-base">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                        SPEZIAL-ATTACKE
                      </div>
                      <p className="text-yellow-400 font-mono text-base sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        {selectedFighter.special}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3">
                      <StatBar
                        label="STÄRKE"
                        value={selectedFighter.stats.strength}
                        icon={Zap}
                      />
                      <StatBar
                        label="TEMPO"
                        value={selectedFighter.stats.speed}
                        icon={Gauge}
                      />
                      <StatBar
                        label="DEFENSE"
                        value={selectedFighter.stats.defense}
                        icon={Shield}
                      />
                      <StatBar
                        label="SPECIAL"
                        value={selectedFighter.stats.special}
                        icon={Sparkles}
                      />
                    </div>

                    {/* Backstory */}
                    <div className="pt-4 border-t border-[#ffd700]/20">
                      <p className="text-white/80 font-mono text-[10px] sm:text-xs leading-relaxed italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        {selectedFighter.backstory}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
