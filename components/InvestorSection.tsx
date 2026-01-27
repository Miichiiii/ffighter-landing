"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Gamepad2,
  Globe,
  Smartphone,
  Zap,
  Target,
  Award,
} from "lucide-react";

const stats = [
  { value: "€2.4B", label: "Mobile Gaming Markt DE", icon: TrendingUp },
  { value: "25M+", label: "Telegram Gaming Users", icon: Users },
  { value: "6", label: "Einzigartige Kämpfer", icon: Gamepad2 },
  { value: "∞", label: "Spaß-Potenzial", icon: Zap },
];

const advantages = [
  {
    icon: Smartphone,
    title: "TELEGRAM MINI APP",
    description: "Direkter Zugang zu 800+ Millionen Telegram Nutzern weltweit",
  },
  {
    icon: Globe,
    title: "CROSS-PLATFORM",
    description: "Web, Mobile und Desktop - überall spielbar ohne Download",
  },
  {
    icon: Target,
    title: "VIRALES POTENTIAL",
    description:
      "Humor-basiertes Gameplay für maximale Social-Media Reichweite",
  },
  {
    icon: Award,
    title: "RETRO-APPEAL",
    description:
      "Nostalgie trifft moderne Technik - breite Zielgruppe von 18-45",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function InvestorSection() {
  return (
    <section id="invest" className="relative py-24 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001428]/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 mb-6">
            <span className="text-[#ffd700] font-mono text-sm">
              💼 FÜR INVESTOREN
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold gradient-text retro-shadow mb-4">
            WARUM FART FIGHTER?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-3xl mx-auto">
            Ein einzigartiges Spielkonzept mit enormem Marktpotenzial im
            wachsenden Mobile-Gaming Sektor
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center hover:neon-glow-box transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-[#ffd700] mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-mono gradient-text font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="glass rounded-xl p-6 flex items-start gap-4 hover:neon-glow-box transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 flex items-center justify-center flex-shrink-0">
                <advantage.icon className="w-7 h-7 text-[#ffd700]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-[#ffd700] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-white/70 font-mono text-sm">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 sm:p-12 text-center neon-glow-box relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-[#ff8c00]/10 to-[#ffd700]/5" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold gradient-text mb-4">
              WERDE TEIL DER REVOLUTION
            </h3>
            <p className="text-white/70 font-mono max-w-2xl mx-auto mb-8">
              Investiere jetzt in Fart Fighter und profitiere vom explosiven
              Wachstum des Mobile Gaming Marktes. Early-Bird Investoren erhalten
              exklusive Vorteile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#rewards"
                className="inline-flex items-center justify-center px-8 py-4 font-mono text-lg bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black rounded-lg hover:scale-105 transition-transform duration-300 font-bold"
              >
                🚀 JETZT INVESTIEREN
              </a>
              <a
                href="mailto:invest@fartfighter.game"
                className="inline-flex items-center justify-center px-8 py-4 font-mono text-lg border-2 border-[#ffd700] text-[#ffd700] rounded-lg hover:bg-[#ffd700]/10 transition-colors duration-300"
              >
                📧 KONTAKT AUFNEHMEN
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
