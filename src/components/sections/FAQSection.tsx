import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can government employees form unions?",
    a: "Yes. Under Executive Order No. 180 and the 1987 Constitution, government employees have the right to form, join, or assist employee organizations of their own choosing for purposes not contrary to law.",
  },
  {
    q: "Are strikes allowed in the public sector?",
    a: "No. Government employees are prohibited from staging strikes. However, they can engage in collective negotiation and other concerted activities within the bounds of the law.",
  },
  {
    q: "What is collective negotiation?",
    a: "Collective negotiation is the process by which accredited employee organizations negotiate with management regarding terms and conditions of employment that are not fixed by law, such as working conditions, schedules, and CNA incentives.",
  },
  {
    q: "How does a union get accredited?",
    a: "An employee organization must register with the Civil Service Commission and the Department of Labor and Employment, then undergo an accreditation process including certification elections within the agency.",
  },
  {
    q: "What are CNA incentives?",
    a: "CNA (Collective Negotiation Agreement) incentives are monetary benefits negotiated between management and accredited employee organizations, funded from savings generated through cost-cutting measures and systems improvement.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <SectionHeader title="Frequently Asked Questions" />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
