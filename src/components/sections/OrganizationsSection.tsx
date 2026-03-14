import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { ExternalLink } from "lucide-react";

const orgs = [
  {
    abbrev: "COURAGE",
    name: "Confederation for Unity, Recognition and Advancement of Government Employees",
    description: "A confederation of government employee unions advocating for workers' rights, benefits, and welfare in the public sector.",
  },
  {
    abbrev: "ACT",
    name: "Alliance of Concerned Teachers",
    description: "A militant teachers' organization advancing the rights and welfare of public school teachers and education workers.",
  },
  {
    abbrev: "GEAP",
    name: "Government Employees Association of the Philippines",
    description: "A broad-based organization of government workers focused on collective bargaining, policy advocacy, and member services.",
  },
];

export default function OrganizationsSection() {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="Major Government Employee Organizations"
            subtitle="Key unions and associations championing the welfare of public sector workers."
          />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {orgs.map((org, i) => (
            <AnimatedSection key={org.abbrev} delay={i * 0.1}>
              <div className="flex flex-col rounded-lg bg-background p-6 ring-1 ring-inset ring-foreground/5 transition-all duration-200 hover:shadow-card-hover hover:ring-primary/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-ui">
                  {org.abbrev.slice(0, 2)}
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{org.abbrev}</h3>
                <p className="text-xs text-muted-foreground mb-2">{org.name}</p>
                <p className="text-ui text-muted-foreground leading-relaxed mb-4 flex-1">{org.description}</p>
                <Link
                  to="/organizations"
                  className="inline-flex items-center gap-1 text-ui font-medium text-primary hover:underline"
                >
                  Learn more <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
