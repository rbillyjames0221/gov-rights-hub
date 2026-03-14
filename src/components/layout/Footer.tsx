import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Laws & Policies", path: "/laws" },
  { label: "Organizations", path: "/organizations" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="text-xs font-bold text-primary-foreground">PS</span>
              </div>
              <span className="text-ui font-bold text-foreground">Public Sector Unionism PH</span>
            </div>
            <p className="text-ui text-muted-foreground max-w-xs">
              A resource hub for understanding the rights, organizations, and policies supporting
              government employees in the Philippines.
            </p>
          </div>

          <div>
            <h4 className="text-ui font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ui text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-ui font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-ui text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-ui text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ui text-muted-foreground">
            © 2026 Public Sector Unionism PH. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-ui">Facebook</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-ui">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-ui">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
