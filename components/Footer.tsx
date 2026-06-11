import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink border-t-2 border-cream/8 py-5 px-6 md:px-10 lg:px-14">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="font-display text-cream text-2xl tracking-wider">
            RG<span className="text-[#E8300A]">.</span>
          </span>
          <span className="text-[8px] font-mono text-cream/20 uppercase tracking-[0.4em]">
            © 2026 {personalInfo.name}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[8px] font-mono text-cream/15 uppercase tracking-[0.4em]">Issue 01</span>
          <span className="text-[8px] font-mono text-cream/15 uppercase tracking-[0.4em]">Vol. I</span>
          <span className="text-[8px] font-mono text-cream/15 uppercase tracking-[0.4em]">Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
