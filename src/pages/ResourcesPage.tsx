import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { FileText, GraduationCap, ClipboardList, Download } from "lucide-react";

const categories = [
  {
    icon: FileText,
    title: "Government Labor Laws",
    items: [
      "Executive Order No. 180 (Full Text)",
      "1987 Philippine Constitution – Labor Provisions",
      "Republic Act No. 6713 – Code of Conduct for Public Officials",
      "Civil Service Commission Memorandum Circulars",
    ],
  },
  {
    icon: GraduationCap,
    title: "Research Papers & Studies",
    items: [
      "Public Sector Unionism in the Philippines: A Historical Analysis",
      "Collective Negotiation in Government: Best Practices",
      "The Impact of CNA Incentives on Employee Productivity",
      "Comparative Study of Public Sector Labor Relations in ASEAN",
    ],
  },
  {
    icon: ClipboardList,
    title: "Policy Documents",
    items: [
      "PSLMC Resolution No. 1 – Accreditation Guidelines",
      "PSLMC Resolution No. 2 – CNA Framework",
      "CSC Guidelines on Employee Organization Activities",
      "DBM Circular on CNA Incentive Computation",
    ],
  },
  {
    icon: Download,
    title: "Training Materials",
    items: [
      "Union Leadership Training Manual",
      "Collective Negotiation Skills Workshop Guide",
      "Understanding Your Rights as a Government Employee",
      "How to Organize: A Step-by-Step Guide",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className="container py-16 md:py-24">
        <AnimatedSection>
          <SectionHeader
            title="Resources"
            subtitle="Access downloadable documents, research materials, and training guides on public sector unionism."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <div className="rounded-lg bg-card p-6 shadow-card ring-1 ring-inset ring-foreground/5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="flex items-center gap-2 text-ui text-muted-foreground hover:text-primary transition-colors py-1">
                        <Download className="h-3.5 w-3.5 shrink-0" />
                        {item}
                      </a>
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
