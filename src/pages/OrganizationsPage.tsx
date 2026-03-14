import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { ExternalLink } from "lucide-react";

const organizations = [
  {
    abbrev: "COURAGE",
    name: "Confederation for Unity, Recognition and Advancement of Government Employees",
    description: "Founded in 1986, COURAGE is the largest confederation of government employee unions in the Philippines. It advocates for living wages, job security, workers' rights, and democratic governance. COURAGE represents employees across various government departments and agencies.",
    focus: ["Workers' rights advocacy", "Salary standardization campaigns", "Anti-contractualization efforts"],
  },
  {
    abbrev: "ACT",
    name: "Alliance of Concerned Teachers",
    description: "ACT is a progressive teachers' organization that champions the welfare and rights of public school teachers and education workers. It actively campaigns for increased education funding, better teacher compensation, and improved working conditions.",
    focus: ["Teacher welfare", "Education funding", "Professional development"],
  },
  {
    abbrev: "GEAP",
    name: "Government Employees Association of the Philippines",
    description: "GEAP serves as a broad-based organization representing government workers from various agencies. It focuses on collective bargaining, policy advocacy, and providing services to its members.",
    focus: ["Collective bargaining", "Policy advocacy", "Member services"],
  },
  {
    abbrev: "PSLINK",
    name: "Public Services Labor Independent Confederation",
    description: "PSLINK is a confederation of public sector unions affiliated with international labor organizations. It promotes good governance, social dialogue, and the strengthening of public services through organized labor.",
    focus: ["International solidarity", "Social dialogue", "Public service excellence"],
  },
];

export default function OrganizationsPage() {
  return (
    <PageLayout>
      <div className="container py-16 md:py-24">
        <AnimatedSection>
          <SectionHeader
            title="Public Sector Organizations"
            subtitle="A comprehensive directory of major government employee unions and associations in the Philippines."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {organizations.map((org, i) => (
            <AnimatedSection key={org.abbrev} delay={i * 0.1}>
              <div className="flex flex-col rounded-lg bg-card p-6 md:p-8 shadow-card ring-1 ring-inset ring-foreground/5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-ui shrink-0">
                    {org.abbrev.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{org.abbrev}</h3>
                    <p className="text-xs text-muted-foreground">{org.name}</p>
                  </div>
                </div>
                <p className="text-ui text-muted-foreground leading-relaxed mb-4">{org.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">Key Focus Areas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {org.focus.map((f) => (
                      <span key={f} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="#" className="mt-auto inline-flex items-center gap-1 text-ui font-medium text-primary hover:underline">
                  Visit website <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
