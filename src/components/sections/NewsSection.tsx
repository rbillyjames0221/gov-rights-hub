import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Salary",
    date: "March 10, 2026",
    title: "Government Worker Salary Standardization Update",
    excerpt: "The latest developments on the salary standardization law and its impact on public sector employees across all levels.",
  },
  {
    category: "Policy",
    date: "March 5, 2026",
    title: "New Labor Policy Guidelines Released",
    excerpt: "The Civil Service Commission releases updated guidelines on employee organization accreditation and collective negotiation.",
  },
  {
    category: "Union",
    date: "February 28, 2026",
    title: "National Union Congress Highlights",
    excerpt: "Key resolutions and action plans from the recent national congress of public sector employee organizations.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="Latest News"
            subtitle="Stay updated on the latest developments affecting government employees."
          />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 0.1}>
              <article className="group flex flex-col rounded-lg bg-background p-6 ring-1 ring-inset ring-foreground/5 transition-all duration-200 hover:ring-primary/20 hover:shadow-card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-ui text-muted-foreground leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-ui font-medium text-primary group-hover:translate-x-1 transition-transform">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
