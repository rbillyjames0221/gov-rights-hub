import { useState } from "react";
import AnimatedSection from "../shared/AnimatedSection";
import SectionHeader from "../shared/SectionHeader";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", org: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "", org: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <SectionHeader
            title="Get in Touch"
            subtitle="Have questions about public sector unionism? Send us a message."
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-card p-6 md:p-8 shadow-card ring-1 ring-inset ring-foreground/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-ui font-medium text-foreground">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-ui text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Juan dela Cruz"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-ui font-medium text-foreground">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-ui text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="juan@email.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-ui font-medium text-foreground">Organization (Optional)</label>
              <input
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-ui text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Agency or organization name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-ui font-medium text-foreground">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-ui text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-ui font-semibold text-primary-foreground transition-all duration-150 hover:bg-primary/90 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
