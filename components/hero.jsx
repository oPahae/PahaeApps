import { ArrowDown, Download } from "lucide-react";

const frame =
  "overflow-hidden rounded-xl bg-ink ring-1 ring-black/15 shadow-[0_30px_80px_-20px_rgba(14,16,20,0.5)]";

export default function Hero({ apps }) {
  const [poster, video, music] = apps;

  return (
    <section id="accueil" className="overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          Des applications simples, rapides et bien finies.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
          Une boîte à outils pour développeurs, un lecteur vidéo pour Windows et un lecteur de
          musique pour Android. Téléchargez-les directement ici.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#telechargements"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <Download size={18} />
            Télécharger
          </a>
          <a
            href="#applications"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium transition-colors hover:border-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <ArrowDown size={18} />
            Découvrir les applications
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 aspect-[16/6.6] w-full max-w-6xl sm:mt-20">
        <div
          className={`${frame} absolute left-[19%] top-0 w-[62%] motion-safe:animate-rise motion-safe:[animation-delay:100ms]`}
        >
          <img
            src={poster.image}
            width={poster.width}
            height={poster.height}
            alt={poster.alt}
            className="block h-auto w-full"
          />
        </div>
        <div
          className={`${frame} absolute left-0 top-[24%] z-10 w-[42%] motion-safe:animate-rise motion-safe:[animation-delay:280ms]`}
        >
          <img
            src={video.image}
            width={video.width}
            height={video.height}
            alt={video.alt}
            className="block h-auto w-full"
          />
        </div>
        <div
          className={`${frame} absolute right-[3%] top-[10%] z-20 w-[15%] rounded-[1.1rem] motion-safe:animate-rise motion-safe:[animation-delay:460ms] sm:rounded-3xl`}
        >
          <img
            src={music.image}
            width={music.width}
            height={music.height}
            alt={music.alt}
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
