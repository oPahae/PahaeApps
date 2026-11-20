import { HardDrive, ShieldCheck, Tag } from "lucide-react";
import DownloadButton from "./downloadButton";

export default function Downloads({ apps }) {
  return (
    <section id="telechargements" className="scroll-mt-16 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-20">
        <h2 className="max-w-xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Choisissez votre application et installez-la.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/65">
          Les fichiers sont téléchargés directement depuis ce site.
        </p>

        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {apps.map((app) => {
            const Icon = app.icon;
            const PlatformIcon = app.platformIcon;
            return (
              <li
                key={app.id}
                className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${app.tile}`}
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold">{app.name}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-paper/60">
                      <span className="inline-flex items-center gap-1.5">
                        <PlatformIcon size={14} />
                        {app.platform}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Tag size={14} />
                        {app.version}
                      </span>
                      {app.size && (
                        <span className="inline-flex items-center gap-1.5">
                          <HardDrive size={14} />
                          {app.size}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <DownloadButton app={app} tone="light" />
              </li>
            );
          })}
        </ul>

        <p className="mt-8 flex max-w-2xl gap-2.5 text-sm leading-relaxed text-paper/60">
          <ShieldCheck size={18} className="mt-0.5 shrink-0" />
          Windows peut afficher un avertissement SmartScreen pour une application récente. Cliquez
          sur Informations complémentaires, puis sur Exécuter quand même.
        </p>
      </div>
    </section>
  );
}
