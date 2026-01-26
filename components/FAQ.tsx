"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Für welche Plattformen wird das Spiel verfügbar sein?",
    answer: "Zunächst Web (Desktop/Mobile Browser) und Telegram Mini App. Mit mehr Funding: Steam, Switch, iOS/Android native Apps.",
  },
  {
    question: "Wann ist der Release geplant?",
    answer: "Beta-Version für Backer in 3 Monaten, Full Release in 6-9 Monaten nach erfolgreicher Kampagne.",
  },
  {
    question: "Wird es Multiplayer geben?",
    answer: "Ja! Online Multiplayer ist ein Stretch Goal bei 10.000€. Local Multiplayer ist bereits im Basisspiel enthalten.",
  },
  {
    question: "Kann ich meinen eigenen Kämpfer designen?",
    answer: "Ja, bei höheren Backer-Tiers (Arcade-Legende, 100€+) kannst du einen Custom Fighter mit uns zusammen erstellen.",
  },
  {
    question: "Welche Sprachen werden unterstützt?",
    answer: "Zunächst Deutsch, später Englisch und weitere Sprachen basierend auf Community-Feedback.",
  },
  {
    question: "Ist das Spiel jugendfreundlich?",
    answer: "Ja, trotz des humorvollen Themas ist es familienfreundlich und hat keine expliziten Inhalte. Geeignet für alle Altersgruppen.",
  },
  {
    question: "Wie lange dauert ein Kampf?",
    answer: "Ein typischer Kampf dauert 60-90 Sekunden. Perfekt für schnelle Sessions zwischendurch!",
  },
  {
    question: "Gibt es In-App-Käufe oder Pay-to-Win?",
    answer: "Nein! Fart Fighter ist ein Vollpreisspiel ohne versteckte Kosten. Alle Kämpfer und Features sind sofort verfügbar.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold gradient-text retro-shadow mb-4">
            FAQ
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-mono max-w-2xl mx-auto">
            Häufig gestellte Fragen
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-mono text-[#ffd700] hover:text-[#ff8c00] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-mono text-white/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 font-mono text-sm">
            Noch Fragen? Schreib uns an{" "}
            <a href="mailto:support@fartfighter.de" className="text-[#ffd700] hover:underline">
              support@fartfighter.de
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
