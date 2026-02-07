"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScanlineProvider } from "@/components/ScanlineToggle";
import { motion } from "framer-motion";

export default function Datenschutz() {
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
                DATENSCHUTZERKLÄRUNG
              </h1>
              <p className="text-white/70 font-mono text-lg mb-12">
                Transparenz über die Verarbeitung Ihrer personenbezogenen Daten
                gemäß DSGVO
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert max-w-none space-y-8"
            >
              {/* Inhaltsverzeichnis */}
              <div className="glass rounded-lg p-6 border border-[#ffd700]/20">
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  Inhaltsverzeichnis
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-white/80 font-mono text-sm md:text-base">
                  <li>Information über die Erhebung personenbezogener Daten</li>
                  <li>Rechte der Nutzer und Betroffenen</li>
                  <li>Informationen zur Datenverarbeitung</li>
                  <li>Datenerfassung beim Besuch unserer Website</li>
                  <li>Hosting</li>
                  <li>Cookies</li>
                  <li>Kontaktaufnahme</li>
                  <li>Newsletter</li>
                  <li>Social Media (Facebook & Instagram)</li>
                  <li>Allgemeine Verlinkung auf Profile bei Drittanbietern</li>
                  <li>„Facebook"-Social-Plug-in</li>
                  <li>Webanalyse etracker</li>
                  <li>Trusted Shops Trustbadge</li>
                  <li>Tools (FontAwesome, Google Fonts, Google Maps)</li>
                  <li>Dauer der Speicherung personenbezogener Daten</li>
                </ol>
              </div>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  1) Information über die Erhebung personenbezogener Daten und
                  Kontaktdaten des Verantwortlichen
                </h2>

                <div className="space-y-4 text-white/80">
                  <div>
                    <h3 className="text-lg font-mono font-bold text-white mb-2">
                      1.1 Willkommen
                    </h3>
                    <p className="font-sans">
                      Wir freuen uns, dass Sie unsere Website besuchen und
                      bedanken uns für Ihr Interesse. Im Folgenden informieren
                      wir Sie über den Umgang mit Ihren personenbezogenen Daten
                      bei der Nutzung unserer Website. Personenbezogene Daten
                      sind hierbei alle Daten, mit denen Sie persönlich
                      identifiziert werden können.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono font-bold text-white mb-2">
                      1.2 Verantwortlicher
                    </h3>
                    <p className="font-sans">
                      Verantwortlicher für die Datenverarbeitung auf dieser
                      Website im Sinne der Datenschutz-Grundverordnung (DSGVO)
                      ist:
                    </p>
                    <div className="bg-black/40 rounded p-4 mt-3 border border-[#ffd700]/10 font-mono text-sm">
                      <p>Michael Medvidov</p>
                      <p>Aufm Hennekamp 96</p>
                      <p>40225 Düsseldorf, Deutschland</p>
                      <p>E-Mail: michael@medvidov.com</p>
                    </div>
                    <p className="font-sans mt-3 text-xs">
                      Der für die Verarbeitung von personenbezogenen Daten
                      Verantwortliche ist diejenige natürliche oder juristische
                      Person, die allein oder gemeinsam mit anderen über die
                      Zwecke und Mittel der Verarbeitung von personenbezogenen
                      Daten entscheidet.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono font-bold text-white mb-2">
                      1.3 Verschlüsselung
                    </h3>
                    <p className="font-sans">
                      Diese Website nutzt aus Sicherheitsgründen und zum Schutz
                      der Übertragung personenbezogener Daten und anderer
                      vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an
                      den Verantwortlichen) eine SSL- bzw. TLS-Verschlüsselung.
                      Sie können eine verschlüsselte Verbindung an der
                      Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer
                      Browserzeile erkennen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 - Rechte der Nutzer */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  2) Rechte der Nutzer und Betroffenen
                </h2>
                <p className="font-sans text-white/80 mb-4">
                  Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht:
                </p>

                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10 space-y-3">
                  <ul className="list-disc list-inside space-y-2 text-white/80 text-sm">
                    <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO)</li>
                    <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO)</li>
                    <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO</li>
                    <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO)</li>
                    <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO)</li>
                  </ul>

                  <p className="text-white/80 text-sm mt-4">
                    Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten.
                  </p>
                </div>

                <div className="bg-[#ff4500]/10 rounded p-4 border border-[#ff4500]/30 mt-4">
                  <h4 className="font-mono font-bold text-[#ff4500] mb-3">
                    WIDERSPRUCHSRECHT
                  </h4>
                  <p className="text-white/80 text-sm">
                    Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
                  </p>
                </div>
              </section>

              {/* Section 3 - Informationen zur Datenverarbeitung */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  3) Informationen zur Datenverarbeitung
                </h2>
                <p className="font-sans text-white/80">
                  Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.
                </p>
              </section>

              {/* Section 4 - Datenerfassung */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  4) Datenerfassung beim Besuch unserer Website
                </h2>
                <p className="font-sans text-white/80 mb-4">
                  Bei der bloß informatorischen Nutzung unserer Website, also
                  wenn Sie sich nicht registrieren oder uns anderweitig
                  Informationen übermitteln, erheben wir nur solche Daten, die
                  Ihr Browser an unseren Server übermittelt (sog.
                  „Server-Logfiles"). Wenn Sie unsere Website aufrufen, erheben
                  wir die folgenden Daten, die für uns technisch erforderlich
                  sind, um Ihnen die Website anzuzeigen:
                </p>

                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10 space-y-4">
                  <div>
                    <h4 className="font-mono font-bold text-[#25D366] mb-2">
                      Erfasste Daten:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-white/80 text-sm">
                      <li>Unsere besuchte Website</li>
                      <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                      <li>Menge der gesendeten Daten in Byte</li>
                      <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                      <li>Verwendeter Browser</li>
                      <li>Verwendetes Betriebssystem</li>
                      <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono font-bold text-[#25D366] mb-2">
                      Rechtsgrundlage:
                    </h4>
                    <p className="text-white/80 text-sm">
                      Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO
                      auf Basis unseres berechtigten Interesses an der
                      Verbesserung der Stabilität und Funktionalität unserer
                      Website.
                    </p>
                  </div>

                  <p className="text-white/80 text-sm italic">
                    Eine Weitergabe oder anderweitige Verwendung der Daten
                    findet nicht statt. Wir behalten uns allerdings vor, die
                    Server-Logfiles nachträglich zu überprüfen, sollten konkrete
                    Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                  </p>
                </div>
              </section>

              {/* Section 5 - Hosting */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  5) Hosting
                </h2>
                <p className="font-sans text-white/80">
                  Unser Online-Shop wird von der Strato AG gehostet. Alle auf
                  unserer Website erhobenen Daten werden auf den Servern von
                  Strato verarbeitet. Weitere Informationen zum Datenschutz bei
                  Strato finden Sie auf deren Website:{" "}
                  <a
                    href="https://www.strato.de/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffd700] hover:text-[#ff8c00] transition-colors"
                  >
                    www.strato.de/datenschutz
                  </a>
                </p>
              </section>

              {/* Section 6 - Cookies */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  6) Cookies
                </h2>

                <div className="space-y-4">
                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h3 className="font-mono font-bold text-[#25D366] mb-3">
                      Cookie Manager
                    </h3>
                    <p className="text-white/80 text-sm">
                      Zur Einholung einer Einwilligung zum Einsatz von technisch nicht notwendigen Cookies auf der Website, setzt der Anbieter einen Cookie-Manager ein. Bei dem Aufruf der Website wird ein Cookie mit den Einstellungsinformationen auf dem Endgerät des Nutzers abgelegt, sodass bei einem weiteren Besuch die Abfrage in Bezug auf die Einwilligung nicht erfolgen muss.
                    </p>
                  </div>

                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h4 className="font-mono font-bold text-[#25D366] mb-2">
                      a) Sitzungs-Cookies/Session-Cookies
                    </h4>
                    <p className="text-white/80 text-sm mb-3">
                      Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und gespeichert werden.
                    </p>
                    <p className="text-white/80 text-sm mb-3">
                      Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.
                    </p>
                    <p className="text-white/80 text-sm">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden. Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
                    </p>
                    <p className="text-white/80 text-sm mt-2 italic">
                      Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.
                    </p>
                  </div>

                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h4 className="font-mono font-bold text-[#25D366] mb-2">
                      b) Drittanbieter-Cookies
                    </h4>
                    <p className="text-white/80 text-sm">
                      Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet. Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.
                    </p>
                  </div>

                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h4 className="font-mono font-bold text-[#25D366] mb-2">
                      c) Beseitigungsmöglichkeit
                    </h4>
                    <p className="text-white/80 text-sm mb-2">
                      Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen.
                    </p>
                    <ul className="space-y-1 text-sm text-white/80 mb-3">
                      <li>• Internet Explorer: Browser-Einstellungen</li>
                      <li>• Firefox: Browser-Einstellungen</li>
                      <li>• Chrome: Browser-Einstellungen</li>
                      <li>• Safari: Browser-Einstellungen</li>
                      <li>• Opera: Browser-Einstellungen</li>
                    </ul>
                    <p className="text-xs text-[#ff4500] italic">
                      Hinweis: Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 - Kontaktaufnahme */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  7) Kontaktanfragen / Kontaktmöglichkeit
                </h2>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                  <p className="text-white/80 text-sm mb-3">
                    Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b) DSGVO.
                  </p>
                  <p className="text-white/80 text-sm">
                    Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.
                  </p>
                </div>
              </section>

              {/* Section 8 - Newsletter */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  8) Newsletter
                </h2>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                  <p className="text-white/80 text-sm mb-3">
                    Falls Sie sich für unseren kostenlosen Newsletter anmelden, werden die von Ihnen hierzu abgefragten Daten, also Ihre E-Mail-Adresse sowie – optional – Ihr Name und Ihre Anschrift, an uns übermittelt. Gleichzeitig speichern wir die IP-Adresse des Internetanschlusses von dem aus Sie auf unseren Internetauftritt zugreifen sowie Datum und Uhrzeit Ihrer Anmeldung.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    Die dabei erhobenen Daten verwenden wir ausschließlich für den Newsletter-Versand – sie werden deshalb insbesondere auch nicht an Dritte weitergegeben.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a) DSGVO.
                  </p>
                  <p className="text-white/80 text-sm">
                    Die Einwilligung in den Newsletter-Versand können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen oder den in jedem Newsletter enthaltenen Abmeldelink betätigen.
                  </p>
                </div>
              </section>

              {/* Section 9 - Social Media */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  9) Social Media (Facebook & Instagram)
                </h2>

                <div className="space-y-4">
                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h3 className="font-mono font-bold text-white mb-3">Facebook</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der Plattform Facebook.
                    </p>
                    <p className="text-white/80 text-sm mb-3">
                      Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland, verantwortlich.
                    </p>
                    <p className="text-white/80 text-sm mb-2">
                      Der Datenschutzbeauftragte von Facebook kann über ein Kontaktformular erreicht werden:
                    </p>
                    <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00] text-sm break-all">
                      https://www.facebook.com/help/contact/540977946302970
                    </a>
                    <p className="text-white/80 text-sm mt-3 mb-2">
                      Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt:
                    </p>
                    <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00] text-sm break-all">
                      https://www.facebook.com/legal/terms/page_controller_addendum
                    </a>
                    <p className="text-white/80 text-sm mt-3">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer Produkte und Leistungen.
                    </p>
                  </div>

                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h3 className="font-mono font-bold text-white mb-3">Instagram</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der Plattform Instagram.
                    </p>
                    <p className="text-white/80 text-sm mb-3">
                      Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland, verantwortlich.
                    </p>
                    <p className="text-white/80 text-sm">
                      Die Verarbeitung erfolgt analog zu Facebook. Weitere Informationen finden Sie in der Datenrichtlinie von Instagram:
                    </p>
                    <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00] text-sm break-all">
                      https://help.instagram.com/519522125107875
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 10 - Verlinkung */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  10) Allgemeine Verlinkung auf Profile bei Drittanbietern
                </h2>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                  <p className="text-white/80 text-sm mb-3">
                    Der Anbieter setzt auf der Website eine Verlinkung auf die nachstehend aufgeführten sozialen Netzwerke ein.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität der Website.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    Die Einbindung der Plugins erfolgt dabei über eine verlinkte Grafik. Erst durch einen Klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-white font-mono text-sm">Folgende soziale Netzwerke sind vom Anbieter verlinkt:</p>
                    <div className="text-white/80 text-sm">
                      <p><strong>Facebook:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland</p>
                      <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00] text-xs">
                        Datenschutzerklärung
                      </a>
                    </div>
                    <div className="text-white/80 text-sm">
                      <p><strong>Instagram:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland</p>
                      <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00] text-xs">
                        Datenschutzerklärung
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11 - Facebook Plugin */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  11) „Facebook"-Social-Plug-in
                </h2>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                  <p className="text-white/80 text-sm mb-3">
                    In unserem Internetauftritt setzen wir das Plug-in des Social-Networks Facebook ein. Bei Facebook handelt es sich um einen Internetservice der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    <strong>Rechtsgrundlage:</strong> Im Falle einer von Ihnen erteilten Einwilligung ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in der Qualitätsverbesserung unseres Internetauftritts.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    Weitergehende Informationen über die möglichen Plug-ins sowie über deren jeweilige Funktionen hält Facebook unter <a href="https://developers.facebook.com/docs/plugins/" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">developers.facebook.com/docs/plugins</a> für Sie bereit.
                  </p>
                  <p className="text-white/80 text-sm">
                    Weitergehende Informationen über die Erhebung und Nutzung von Daten sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Facebook in den Datenschutzhinweisen bereit: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">facebook.com/policy.php</a>
                  </p>
                </div>
              </section>

              {/* Section 12 - etracker */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  12) Webanalyse etracker
                </h2>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                  <p className="text-white/80 text-sm mb-3">
                    In unserem Internetauftritt setzen wir etracker ein. Hierbei handelt es sich um einen Webanalysedienst der etracker GmbH, Erste Brunnenstr. 1, 20459 Hamburg.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    etracker dient uns zur Analyse des Nutzungsverhaltens unseres Internetauftritts. <strong>Rechtsgrundlage:</strong> Im Falle einer von Ihnen erteilten Einwilligung ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    Zur Analyse des Nutzungsverhaltens speichert etracker Cookies über Ihren Internet-Browser auf Ihrem Endgerät und erstellt dabei ein pseudonymes Nutzungsprofil. Die dabei verarbeiteten Daten werden allerdings nicht ohne Ihre gesonderte Zustimmung zu Ihrer persönlichen Identifikation verwendet.
                  </p>
                  <p className="text-white/80 text-sm">
                    Darüber hinaus haben Sie die Möglichkeit, die Analyse Ihres Nutzungsverhaltens im Wege des sog. Opt-outs zu beenden: <a href="http://www.etracker.de/privacy?et=V23Jbb" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">etracker.de/privacy</a>
                  </p>
                </div>
              </section>

              {/* Section 13 - Trusted Shops */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  13) Einbindung des Trusted Shops Trustbadge
                </h2>
                <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                  <p className="text-white/80 text-sm mb-3">
                    Zur Anzeige des Trusted Shops Gütesiegels und unserer gegebenenfalls darüber erhaltenen Bewertungen sowie zur Bewerbung der von Trusted Shops angebotenen Leistungen nach einer Bestellung, setzen wir das Trusted Shops „Trustbadge" ein.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    „Trustbadge" ist ein Produkt der Trusted Shops GmbH, Subbelrather Str. 15C, 50823 Köln, für das wir gemeinsam – nach Art. 26 DSGVO – mit der Trusted Shops GmbH datenschutzrechtlich Verantwortlicher sind.
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    <strong>Rechtsgrundlage:</strong> Der Einsatz dient der Wahrung des im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen unsererseits an einer optimalen Vermarktung durch Ermöglichung eines sicheren Einkaufs gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO.
                  </p>
                  <p className="text-white/80 text-sm">
                    Weitere Informationen zum Datenschutz der Trusted Shops GmbH: <a href="https://www.trustedshops.de/impressum-datenschutz/#datenschutz" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">trustedshops.de/datenschutz</a>
                  </p>
                </div>
              </section>

              {/* Section 14 - Tools */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  14) Tools und Sonstiges
                </h2>

                <div className="space-y-4">
                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h3 className="font-mono font-bold text-white mb-3">FontAwesome</h3>
                    <p className="text-white/80 text-sm mb-2">
                      Um Schriften und visuelle Elemente unseres Internetauftritts darstellen zu können, setzen wir die externen Schriftarten von FontAwesome ein. Bei FontAwesome handelt es sich um einen Dienst der Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA.
                    </p>
                    <p className="text-white/80 text-sm mb-2">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
                    </p>
                    <p className="text-white/80 text-sm">
                      Weitere Informationen: <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">fontawesome.com/privacy</a>
                    </p>
                  </div>

                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h3 className="font-mono font-bold text-white mb-3">Google Fonts</h3>
                    <p className="text-white/80 text-sm mb-2">
                      In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="text-white/80 text-sm mb-2">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
                    </p>
                    <p className="text-white/80 text-sm">
                      Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">policies.google.com/privacy</a>
                    </p>
                  </div>

                  <div className="bg-black/40 rounded p-4 border border-[#ffd700]/10">
                    <h3 className="font-mono font-bold text-white mb-3">Google Maps</h3>
                    <p className="text-white/80 text-sm mb-2">
                      In unserem Internetauftritt setzen wir Google Maps zur Darstellung unseres Standorts sowie zur Erstellung einer Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="text-white/80 text-sm mb-2">
                      <strong>Rechtsgrundlage:</strong> Im Falle einer von Ihnen erteilten Einwilligung ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in der Optimierung der Funktionalität unseres Internetauftritts.
                    </p>
                    <p className="text-white/80 text-sm">
                      Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ffd700] hover:text-[#ff8c00]">policies.google.com/privacy</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section>
                <h2 className="text-2xl font-mono font-bold text-[#ffd700] mb-4">
                  15) Dauer der Speicherung personenbezogener Daten
                </h2>
                <p className="font-sans text-white/80">
                  Die Dauer der Speicherung von personenbezogenen Daten ist
                  abhängig vom jeweiligen Verarbeitungszweck und von den
                  geltenden gesetzlichen Aufbewahrungsfristen. Sofern nicht
                  anders angegeben, werden Ihre Daten gelöscht, sobald sie für
                  den Verarbeitungszweck nicht mehr erforderlich sind.
                </p>
              </section>

              {/* Contact Info */}
              <div className="glass rounded-lg p-6 border border-[#ffd700]/20 mt-12">
                <h3 className="font-mono font-bold text-[#ffd700] mb-4">
                  Fragen zur Datenschutzerklärung?
                </h3>
                <p className="text-white/80 font-sans mb-3">
                  Für weitere Informationen oder bei Fragen zur vollständigen
                  Datenschutzerklärung mit allen 15 Abschnitten gemäß DSGVO
                  kontaktieren Sie uns bitte direkt:
                </p>
                <div className="bg-black/40 rounded p-3 border border-[#ffd700]/10 font-mono text-sm">
                  <p>E-Mail: michael@medvidov.com</p>
                  <p>Telefon: +49-15678 443874</p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-white/50 text-xs font-mono mt-8">
                <p>Muster-Datenschutzerklärung der Anwaltskanzlei Weiß & Partner</p>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    </ScanlineProvider>
  );
}