"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Twitter,
  Youtube,
  MessageCircle,
  Github,
  Mail,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScanlineToggleButton } from "@/components/ScanlineToggle";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Github, href: "#", label: "GitHub" },
];

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
            Werde Teil der Fart Fighter Community und hilf uns, das stinkendste
            Spiel aller Zeiten zu erschaffen!
          </p>
          <Button
            size="lg"
            className="text-xl px-12 py-8 font-mono bg-gradient-to-r from-[#ff6500] via-[#ff8c00] to-[#ff6500] hover:from-[#ff4500] hover:via-[#ff6500] hover:to-[#ff4500] text-black border-0 rounded-lg pulse-glow transition-all duration-300 hover:scale-105"
            onClick={() =>
              document
                .getElementById("rewards")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
            <Mail className="w-8 h-8 text-[#25D366] shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-mono font-bold text-[#25D366] mb-1">
                WHATSAPP NEWSLETTER
              </h3>
              <p className="text-sm text-white/60 font-mono">
                Erhalte Updates und exklusive Einblicke direkt per WhatsApp!
              </p>
            </div>
            <div className="flex w-full sm:w-auto gap-2 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=4915678443874&text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20News%20zu%20Fart%20Fighter."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-black font-mono font-bold px-6 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 14.487c-.246-.123-1.453-.718-1.678-.799-.225-.082-.389-.123-.553.123-.164.246-.633.799-.776.963-.143.164-.287.184-.533.062-.246-.123-1.04-.383-1.98-1.222-.732-.653-1.226-1.46-1.37-1.706-.143-.246-.015-.378.108-.5.111-.11.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.308-.02-.43-.062-.123-.553-1.336-.757-1.83-.2-.48-.404-.415-.553-.423l-.47-.008c-.164 0-.43.062-.656.308-.225.246-.86.84-.86 2.048 0 1.208.88 2.377 1.002 2.541.123.164 1.73 2.646 4.2 3.604.588.202 1.045.322 1.402.412.59.15 1.128.129 1.553.078.474-.056 1.453-.594 1.658-1.168.205-.574.205-1.066.143-1.168-.062-.102-.225-.164-.47-.287z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 1.591.417 3.086 1.143 4.382L3 21l4.755-1.248A8.963 8.963 0 0012 21c4.97 0 9-4.03 9-9z"
                    />
                  </svg>
                  WhatsApp abonnieren
                </Button>
              </a>
            </div>
          </div>
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
// Fart Fighter - The Stinkiest Game Ever Made
`}
          </pre>
          <p className="text-white/50 font-mono text-sm mt-4">
            Entwickelt mit <Heart className="w-4 h-4 inline text-[#ff4500]" />{" "}
            von Miichiiii
          </p>
        </motion.div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#ffd700]/10">
          <p className="text-white/30 font-mono text-xs">
            © 2026 Fart Fighter. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-[#ffd700] font-mono text-xs transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#ffd700] font-mono text-xs transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#ffd700] font-mono text-xs transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
