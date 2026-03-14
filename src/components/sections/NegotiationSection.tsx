import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";

const steps = [
  { num: "01", title: "Formation of Employee Union", description: "Government employees initiate the formation of an employee organization within their agency or department." },
  { num: "02", title: "Registration with Civil Service", description: "The organization registers with the Civil Service Commission and the Department of Labor and Employment." },
  { num: "03", title: "Negotiation with Agency", description: "The accredited employee organization engages in collective negotiation with the agency's management." },
  { num: "04", title: "Collective Negotiation Agreement", description: "Both parties reach a Collective Negotiation Agreement (CNA) covering terms and conditions of employment." },
];

export default function NegotiationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="Collective Negotiation Process"
            subtitle="How government employees and agencies negotiate through a structured, rights-based process."
          />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="relative flex flex-col rounded-lg bg-card p-6 shadow-card ring-1 ring-inset ring-foreground/5">
                <span className="text-display font-bold text-primary/10 leading-none mb-2">{step.num}</span>
                <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                <p className="text-ui text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
