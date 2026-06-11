import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/8 py-6 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-cream text-xl">
            RG<span className="text-[#E8300A]">.</span>
          </span>
          <span className="text-[10px] font-mono text-cream/25 uppercase tracking-wider">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-2.5 text-cream/25 hover:text-cream hover:bg-cream/8 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
