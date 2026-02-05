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
    <section id="faq" className="relative py-24 px-4 bg-[#f8fafc] dark:bg-[#23272e]">
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
          <p className="text-white/50 font-mono text-sm flex flex-col items-center gap-2">
            Noch Fragen? Schreib uns direkt per WhatsApp:
            <a
              href="https://api.whatsapp.com/send?phone=4915678443874&text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20News%20zu%20Fart%20Fighter."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="bg-[#eaffea] hover:bg-[#b6f5c6] text-black font-mono font-bold px-6 py-2 rounded-lg flex items-center gap-2 mt-1 shadow-md transition-colors border border-[#25D366]"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 14.487c-.246-.123-1.453-.718-1.678-.799-.225-.082-.389-.123-.553.123-.164.246-.633.799-.776.963-.143.164-.287.184-.533.062-.246-.123-1.04-.383-1.98-1.222-.732-.653-1.226-1.46-1.37-1.706-.143-.246-.015-.378.108-.5.111-.11.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.308-.02-.43-.062-.123-.553-1.336-.757-1.83-.2-.48-.404-.415-.553-.423l-.47-.008c-.164 0-.43.062-.656.308-.225.246-.86.84-.86 2.048 0 1.208.88 2.377 1.002 2.541.123.164 1.73 2.646 4.2 3.604.588.202 1.045.322 1.402.412.59.15 1.128.129 1.553.078.474-.056 1.453-.594 1.658-1.168.205-.574.205-1.066.143-1.168-.062-.102-.225-.164-.47-.287z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 1.591.417 3.086 1.143 4.382L3 21l4.755-1.248A8.963 8.963 0 0012 21c4.97 0 9-4.03 9-9z" />
                </svg>
                WhatsApp Kontakt
              </button>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
