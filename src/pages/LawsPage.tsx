import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Scale, FileText, BookOpen } from "lucide-react";

const sections = [
  {
    icon: Scale,
    tag: "Constitutional Provisions",
    title: "1987 Philippine Constitution",
    items: [
      "Article III, Section 8 – Right to form unions, associations, or societies.",
      "Article IX-B, Section 2(5) – Right of government employees to self-organization.",
      "Article XIII, Section 3 – Full protection to labor, organized and unorganized.",
    ],
  },
  {
    icon: FileText,
    tag: "Executive Orders",
    title: "Executive Order No. 180 (1987)",
    items: [
      "Provides guidelines for the exercise of the right to organize of government employees.",
      "Creates the Public Sector Labor-Management Council (PSLMC).",
      "Defines the framework for registration of employee organizations.",
      "Establishes procedures for collective negotiations in government.",
    ],
  },
  {
    icon: BookOpen,
    tag: "Civil Service Rules",
    title: "CSC & PSLMC Implementing Rules",
    items: [
      "PSLMC Resolution No. 1 – Rules on accreditation of employee organizations.",
      "PSLMC Resolution No. 2 – Guidelines for collective negotiation agreements.",
      "CSC Memorandum Circulars on CNA incentives and employee rights.",
      "Rules on registration, election, and dissolution of public sector unions.",
    ],
  },
];

export default function LawsPage() {
  return (
    <PageLayout>
      <div className="container py-16 md:py-24">
        <AnimatedSection>
          <SectionHeader
            title="Laws & Policies"
            subtitle="The complete legal framework governing public sector unionism in the Philippines."
          />
        </AnimatedSection>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.1}>
              <div className="rounded-lg bg-card p-6 md:p-8 shadow-card ring-1 ring-inset ring-foreground/5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">{section.tag}</span>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-ui text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
