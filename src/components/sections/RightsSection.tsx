import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { Users, UserCheck, Handshake, Shield } from "lucide-react";

const rights = [
  { icon: Users, title: "Right to Organize", description: "Government employees can form, join, or assist employee organizations of their own choosing for purposes not contrary to law." },
  { icon: UserCheck, title: "Right to Representation", description: "Registered employee organizations can represent their members in negotiations and consultations with management." },
  { icon: Handshake, title: "Right to Collective Negotiation", description: "Accredited organizations can negotiate with management on terms and conditions of employment not fixed by law." },
  { icon: Shield, title: "Protection of Labor Rights", description: "Government employees are protected against discrimination, interference, or coercion in the exercise of their organizational rights." },
];

export default function RightsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="Rights of Public Sector Workers"
            subtitle="Key rights guaranteed to government employees under Philippine law."
          />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2">
          {rights.map((right, i) => (
            <AnimatedSection key={right.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-lg bg-card p-6 shadow-card ring-1 ring-inset ring-foreground/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <right.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{right.title}</h3>
                  <p className="text-ui text-muted-foreground leading-relaxed">{right.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
