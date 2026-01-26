"use client"

import { motion } from "framer-motion"
import { Rocket, Twitter, Youtube, MessageCircle, Github, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScanlineToggleButton } from "@/components/ScanlineToggle"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-[#ffd700]/20">
      <div className="max-w-5xl mx-auto">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold gradient-text retro-shadow mb-4">
            BEREIT FÜR DEN KAMPF?
          </h2>
          <p className="text-lg text-white/70 font-mono mb-8 max-w-xl mx-auto">
            Werde Teil der Fart Fighter Community und hilf uns, das stinkendste Spiel aller Zeiten zu erschaffen!
          </p>
          <Button
            size="lg"
            className="text-xl px-12 py-8 font-mono bg-gradient-to-r from-[#ff6500] via-[#ff8c00] to-[#ff6500] hover:from-[#ff4500] hover:via-[#ff6500] hover:to-[#ff4500] text-black border-0 rounded-lg pulse-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Rocket className="mr-2 h-6 w-6" />
            WERDE EIN BACKER
            <Rocket className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-8 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Mail className="w-8 h-8 text-[#ffd700] shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-mono font-bold text-[#ffd700] mb-1">NEWSLETTER</h3>
              <p className="text-sm text-white/60 font-mono">
                Erhalte Updates zur Entwicklung und exklusive Einblicke
              </p>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="deine@email.de"
                className="flex-1 sm:w-64 px-4 py-3 rounded-lg bg-black/50 border border-[#ffd700]/30 text-white font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-[#ffd700]"
              />
              <Button className="bg-[#ffd700] hover:bg-[#ff8c00] text-black font-mono font-bold px-6">
                GO
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-lg glass flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700]/20 hover:scale-110 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Developer Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <pre className="text-[#ffd700]/30 text-[8px] sm:text-xs font-mono leading-none inline-block">
{`
 ███╗   ███╗██╗██╗██╗██╗██╗██╗██╗██╗
 ████╗ ████║██║██║██║██║██║██║██║██║
 ██╔████╔██║██║██║██║██║██║██║██║██║
 ██║╚██╔╝██║██║██║██║██║██║██║██║██║
 ██║ ╚═╝ ██║██║██║██║██║██║██║██║██║
 ╚═╝     ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
`}
          </pre>
          <p className="text-white/50 font-mono text-sm mt-4">
            Entwickelt mit <Heart className="w-4 h-4 inline text-[#ff4500]" /> von Miichiiii
          </p>
        </motion.div>

        {/* Retro Mode Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-8"
        >
          <ScanlineToggleButton />
        </motion.div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#ffd700]/10">
          <p className="text-white/30 font-mono text-xs">
            © 2026 Fart Fighter. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-[#ffd700] font-mono text-xs transition-colors">
              Impressum
            </a>
            <a href="#" className="text-white/30 hover:text-[#ffd700] font-mono text-xs transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-white/30 hover:text-[#ffd700] font-mono text-xs transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
