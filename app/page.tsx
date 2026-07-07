import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { StatsBanner } from "@/components/landing/stats-banner";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { TrustSection } from "@/components/landing/trust-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <div className="mesh-bg font-sans text-[16px] leading-6 text-[#241915]">
      <Nav />
      <Hero />
      <StatsBanner />
      <FeaturesSection />
      <HowItWorks />
      <TrustSection />
      <SiteFooter />
    </div>
  );
}
