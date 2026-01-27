import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CharacterShowcase } from "@/components/CharacterShowcase";
import { ArenaShowcase } from "@/components/ArenaShowcase";
import { GameplayDemo } from "@/components/GameplayDemo";
import { InvestorSection } from "@/components/InvestorSection";
import { FundingMeter } from "@/components/FundingMeter";
import { RewardsTiers } from "@/components/RewardsTiers";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScanlineProvider } from "@/components/ScanlineToggle";

export default function Home() {
  return (
    <ScanlineProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        <Hero />
        <Features />
        <CharacterShowcase />
        <ArenaShowcase />
        <GameplayDemo />
        <InvestorSection />
        <FundingMeter />
        <RewardsTiers />
        <FAQ />
        <Footer />
      </main>
    </ScanlineProvider>
  );
}
