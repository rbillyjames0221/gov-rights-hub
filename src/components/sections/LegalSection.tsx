import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { ArrowRight } from "lucide-react";

const laws = [
  {
    tag: "Constitutional Provision",
    title: "1987 Philippine Constitution",
    description:
      "Section 8, Article III guarantees the right of the people, including those employed in the public and private sectors, to form unions.",
  },
  {
    tag: "Executive Order",
    title: "Executive Order No. 180",
    description:
      "Provides guidelines for the exercise of the right of government employees to organize and defines the framework for collective negotiations.",
  },
  {
    tag: "Civil Service Rules",
    title: "Civil Service Commission Rules",
    description:
      "Implementing rules and regulations governing the accreditation, registration, and operation of public sector employee organizations.",
  },
];

export default function LegalSection() {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="Legal Foundations in the Philippines"
            subtitle="The legal framework that upholds the rights of government employees to organize and collectively negotiate."
          />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {laws.map((law, i) => (
            <AnimatedSection key={law.title} delay={i * 0.1}>
              <Link
                to="/laws"
                className="group relative flex flex-col rounded-lg p-6 bg-background transition-all duration-200 ring-1 ring-inset ring-foreground/5 hover:ring-primary/30 hover:shadow-card-hover"
              >
                <div className="mb-4 text-xs font-bold tracking-widest uppercase text-primary">
                  {law.tag}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{law.title}</h3>
                <p className="text-ui text-muted-foreground leading-relaxed mb-6">{law.description}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-ui font-medium text-primary group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
