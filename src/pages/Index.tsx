import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import LegalSection from "@/components/sections/LegalSection";
import RightsSection from "@/components/sections/RightsSection";
import OrganizationsSection from "@/components/sections/OrganizationsSection";
import NegotiationSection from "@/components/sections/NegotiationSection";
import NewsSection from "@/components/sections/NewsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <PageLayout>
      <HeroSection />
      <WhatIsSection />
      <LegalSection />
      <RightsSection />
      <OrganizationsSection />
      <NegotiationSection />
      <NewsSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
    </PageLayout>
  );
}
