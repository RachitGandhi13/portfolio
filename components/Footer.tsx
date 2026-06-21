"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#F5F4F0] dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display text-[#0a0a0a] dark:text-white text-[15px] tracking-tight">
            Rachit Gandhi<span className="text-[#A87D5C]">.</span>
          </span>
          <span className="font-mono-label text-black/35 dark:text-white/35">
            © {year} — All rights reserved
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="font-mono-label text-black/35 dark:text-white/35">
            Crafted with restraint
          </span>
          <button
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono-label text-black/70 dark:text-white/70 hover:text-[#A87D5C] dark:hover:text-[#E8E4D9] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
