import { Download } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#accueil"
          className="flex items-center gap-2.5 rounded-md font-display text-xl font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <img src="/logo.png" className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm font-bold text-paper" />
          Pahae
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="#applications"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink sm:block"
          >
            Applications
          </a>
          <a
            href="#telechargements"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <Download size={16} />
            Télécharger
          </a>
        </nav>
      </div>
    </header>
  );
}
