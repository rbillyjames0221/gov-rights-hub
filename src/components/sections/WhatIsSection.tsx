import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { BookOpen, Target, Star } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Definition",
    description:
      "Public sector unionism refers to the organized collective action of government employees to protect their rights, welfare, and working conditions through recognized employee organizations.",
  },
  {
    icon: Target,
    title: "Purpose",
    description:
      "It serves as a mechanism for government workers to participate in the formulation of policies affecting their employment, negotiate for better terms, and ensure accountability in public service.",
  },
  {
    icon: Star,
    title: "Importance",
    description:
      "Public sector unions play a vital role in promoting democratic governance, ensuring fair labor practices, and bridging the gap between employees and management in government agencies.",
  },
];

export default function WhatIsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="What is Public Sector Unionism?"
            subtitle="A cornerstone of democratic governance that empowers government employees to collectively advocate for their rights and welfare."
          />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="group flex flex-col rounded-lg bg-card p-6 shadow-card ring-1 ring-inset ring-foreground/5 transition-all duration-200 hover:shadow-card-hover hover:ring-primary/20">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="text-ui text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
