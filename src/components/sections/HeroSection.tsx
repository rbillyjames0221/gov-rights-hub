import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";
import { ArrowRight, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="container relative py-20 md:py-28 lg:py-36">
        <AnimatedSection className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-ui font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Empowering 1.7M+ Government Employees
          </div>
          <h1 className="text-display font-bold text-foreground">
            Public Sector Unionism in the Philippines
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Understanding the rights, organizations, and policies that support government employees.
            A comprehensive resource for civil servants and public sector workers.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-ui font-semibold text-primary-foreground transition-all duration-150 hover:bg-primary/90 active:scale-95"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/laws"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-ui font-semibold text-secondary-foreground ring-1 ring-inset ring-border transition-all duration-150 hover:bg-muted active:scale-95"
            >
              <BookOpen className="h-4 w-4" /> Explore Laws
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
