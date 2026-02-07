"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScanlineProvider } from "@/components/ScanlineToggle";
import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <ScanlineProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        <div className="min-h-screen bg-gradient-to-b from-black via-[#0a1a2e] to-black pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-mono font-bold gradient-text retro-shadow mb-4">
                IMPRESSUM
              </h1>
              <p className="text-white/70 font-mono text-lg mb-12">
                Rechtliche Informationen und Angaben gemäß § 5 TMG
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert max-w-none space-y-8"
            >
              {/* Wichtiger Hinweis */}
              <div className="glass rounded-lg p-6 border border-[#ff4500]/30 bg-[#ff4500]/5">
                <h2 className="text-2xl font-mono font-bold text-[#ff4500] mb-4">
                  WICHTIGER HINWEIS
                </h2>
                <p className="text-white/80 font-mono font-bold text-lg mb-3">
                  ACHTUNG – unter dieser Adresse befindet sich KEIN
                  LADENGESCHÄFT
                </p>
                <p className="text-white/70 font-sans">
                  Besuche sind nach vorheriger telefonischer Anmeldung Werktags
                  möglich.
                </p>
              </div>

              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-6">
                  Angaben gemäß § 5 TMG
                </h2>

                <div className="space-y-6">
                  {/* Unternehmen */}
                  <div className="bg-black/40 rounded-lg p-6 border border-[#ffd700]/20">
                    <h3 className="font-mono font-bold text-[#25D366] mb-3 text-lg">
                      Unternehmen
                    </h3>
                    <div className="font-mono text-white/80 space-y-1">
                      <p>Michael Medvidov</p>
                      <p>Aufm Hennekamp 96</p>
                      <p>40225 Düsseldorf, Deutschland</p>
                    </div>
                  </div>

                  {/* Vertreten durch */}
                  <div className="bg-black/40 rounded-lg p-6 border border-[#ffd700]/20">
                    <h3 className="font-mono font-bold text-[#25D366] mb-3 text-lg">
                      Vertreten durch
                    </h3>
                    <div className="font-mono text-white/80">
                      <p>Michael Medvidov</p>
                    </div>
                  </div>

                  {/* Kontakt */}
                  <div className="bg-black/40 rounded-lg p-6 border border-[#ffd700]/20">
                    <h3 className="font-mono font-bold text-[#25D366] mb-3 text-lg">
                      Kontakt
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/60 text-sm">Telefon</p>
                        <p className="font-mono text-white/80">
                          +49-15678 443874
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">E-Mail</p>
                        <p className="font-mono text-white/80">
                          michael@medvidov.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Verantwortlich für den Inhalt */}
                  <div className="bg-black/40 rounded-lg p-6 border border-[#ffd700]/20">
                    <h3 className="font-mono font-bold text-[#25D366] mb-3 text-lg">
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                    </h3>
                    <div className="font-mono text-white/80 space-y-1">
                      <p>Michael Medvidov</p>
                      <p>Aufm Hennekamp 96</p>
                      <p>40225 Düsseldorf</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Media */}
              <div className="glass rounded-lg p-6 border border-[#ffd700]/20">
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  Social Media
                </h2>
                <p className="text-white/80 font-sans">
                  Das Impressum hat gleichermaßen für die Social Media Auftritte
                  von FFighter Gültigkeit – insbesondere für Facebook,
                  Instagram und Pinterest.{" "}
                  <a
                    href="/datenschutz"
                    className="text-[#ffd700] hover:text-[#ff8c00] transition-colors"
                  >
                    Informationen zum Datenschutz finden Sie hier.
                  </a>
                </p>
              </div>

              {/* Steuerinformationen */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  Steuerinformationen
                </h2>
                <div className="bg-black/40 rounded-lg p-6 border border-[#ffd700]/20">
                  <p className="text-white/60 text-sm mb-2">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz
                  </p>
                  <p className="font-mono text-xl text-[#ffd700]">
                    Wird beantragt
                  </p>
                </div>
              </section>

              {/* Online-Streitbeilegung */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  Online-Streitbeilegung
                </h2>
                <div className="space-y-4">
                  <p className="font-sans text-white/80">
                    Plattform der EU-Kommission zur Online-Streitbeilegung:
                  </p>
                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <a
                      href="https://ec.europa.eu/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffd700] hover:text-[#ff8c00] transition-colors font-mono"
                    >
                      https://ec.europa.eu/odr
                    </a>
                  </div>
                  <p className="font-sans text-white/80 italic">
                    Wir sind zur Teilnahme an einem Streitbeilegungsverfahren
                    vor einer Verbraucherschlichtungsstelle weder verpflichtet
                    noch bereit.
                  </p>
                </div>
              </section>

              {/* Urheberrecht */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  Urheberrecht
                </h2>
                <div className="space-y-4 text-white/80 font-sans">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                  <p>
                    Downloads und Kopien dieser Seite sind nur für den privaten,
                    nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
                    auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                    die Urheberrechte Dritter beachtet.
                  </p>
                  <p>
                    Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                  </p>
                </div>
              </section>

              {/* Haftung */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="font-sans text-white/80">
                  Die Inhalte unserer Seiten werden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen. Eine
                  vertragliche Verpflichtung zur Haftung auch ohne Verschulden
                  ist ausgeschlossen. Für Schäden, die durch die Nutzung oder
                  Nichtnutzung der angebotenen Informationen entstehen, haftet
                  der Betreiber nicht, soweit er keine vorsätzliche oder grobe
                  Fahrlässigkeit begangen hat.
                </p>
              </section>

              {/* Kontaktformular */}
              <div className="glass rounded-lg p-6 border border-[#ffd700]/20 mt-12">
                <h3 className="font-mono font-bold text-[#ffd700] mb-4">
                  Kontaktieren Sie uns
                </h3>
                <p className="text-white/80 font-sans mb-4">
                  Für Fragen, Anmerkungen oder Meldungen bezüglich des
                  Impressums kontaktieren Sie uns gerne:
                </p>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10 font-mono text-sm space-y-2">
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:michael@medvidov.com"
                      className="text-[#ffd700] hover:text-[#ff8c00] transition-colors"
                    >
                      michael@medvidov.com
                    </a>
                  </p>
                  <p>Telefon: +49-15678 443874</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    </ScanlineProvider>
  );
}
