import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footerColumns, profile, socialLinks } from "../data/portfolio";
import { BrandMark } from "./BrandMark";
import { Container } from "./Container";

const socialIcons = {
  LinkedIn: Linkedin,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-20">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:items-start">
        <div>
          <BrandMark variant="footer" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{profile.footer}</p>
          <ul className="mt-5 flex flex-wrap items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label];
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="grid size-10 place-items-center rounded-full border border-line text-muted no-underline transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon width={16} height={16} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted">NAVIGATE</p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-2">
                {column.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-muted no-underline hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </nav>

        <div className="space-y-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-muted no-underline hover:text-ink"
          >
            <Mail size={15} className="text-accent" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 text-muted no-underline hover:text-ink"
          >
            <Phone size={15} className="text-accent" />
            {profile.phoneDisplay}
          </a>
          <p className="flex items-start gap-2 text-muted">
            <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
            <span>{profile.address}</span>
          </p>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
