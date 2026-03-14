import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container py-16 md:py-24 max-w-3xl">
        <AnimatedSection>
          <SectionHeader
            title="About Public Sector Unionism"
            subtitle="Understanding the history, significance, and future of government employee organizations in the Philippines."
          />
        </AnimatedSection>

        <div className="space-y-10">
          <AnimatedSection delay={0.1}>
            <div className="prose prose-slate max-w-none">
              <h3 className="text-h2 font-bold text-foreground mb-4">Overview</h3>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                Public sector unionism in the Philippines represents the organized effort of government employees to protect and advance their rights, welfare, and working conditions. Unlike private sector unions, public sector organizations operate within a distinct legal framework defined by the Constitution, Executive Order No. 180, and Civil Service rules.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                These organizations play a crucial role in ensuring that the voices of over 1.7 million government workers are heard in policy-making processes that directly affect their employment, benefits, and professional development.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div>
              <h3 className="text-h2 font-bold text-foreground mb-4">History of Unionism in the Philippines</h3>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                The labor movement in the Philippines has deep historical roots, dating back to the early 20th century. While private sector unionism gained momentum during the American colonial period, public sector unionism took a more significant form after the 1986 People Power Revolution.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                The 1987 Constitution explicitly recognized the right of government employees to organize, and Executive Order No. 180, signed by President Corazon Aquino in 1987, provided the implementing framework for public sector employee organizations.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Since then, numerous government employee organizations have been established, advocating for better working conditions, fair compensation, job security, and the protection of civil service rights.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="text-h2 font-bold text-foreground mb-4">Importance of Public Sector Unions</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Democratic Governance", desc: "Unions ensure that government employees participate meaningfully in decisions affecting public service delivery." },
                  { title: "Workers' Welfare", desc: "They advocate for fair compensation, safe working conditions, and adequate benefits for civil servants." },
                  { title: "Accountability", desc: "Employee organizations serve as a check on management practices and promote transparency in government agencies." },
                  { title: "Professional Development", desc: "Unions support capacity-building programs and training opportunities for their members." },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-card p-5 shadow-card ring-1 ring-inset ring-foreground/5">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-ui text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}
