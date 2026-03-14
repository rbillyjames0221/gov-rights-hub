import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { FileText, GraduationCap, ClipboardList, Download } from "lucide-react";

const resources = [
  { icon: FileText, title: "Government Labor Laws", description: "Full text of relevant labor laws and executive orders." },
  { icon: GraduationCap, title: "Research Papers", description: "Academic studies on public sector unionism in the Philippines." },
  { icon: ClipboardList, title: "Policy Documents", description: "Official policy guidelines and implementing rules." },
  { icon: Download, title: "Training Materials", description: "Educational materials for union leaders and members." },
];

export default function ResourcesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="Learn More"
            subtitle="Access educational resources, legal documents, and training materials."
          />
        </AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((res, i) => (
            <AnimatedSection key={res.title} delay={i * 0.08}>
              <Link
                to="/resources"
                className="group flex items-start gap-3 rounded-lg bg-card p-5 shadow-card ring-1 ring-inset ring-foreground/5 transition-all duration-200 hover:ring-primary/20 hover:shadow-card-hover"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <res.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-ui mb-1">{res.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{res.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
