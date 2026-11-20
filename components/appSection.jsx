import { HardDrive, Info, Tag } from "lucide-react";
import DownloadButton from "./downloadButton";

const chip =
  "inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-sm text-muted";

export default function AppSection({ app, reverse }) {
  const Icon = app.icon;
  const PlatformIcon = app.platformIcon;

  return (
    <article id={app.id} className="scroll-mt-16 border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${app.tile}`}
          >
            <Icon size={24} />
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {app.name}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{app.tagline}</p>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            {app.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <li key={feature.title} className="flex gap-4 py-4">
                  <FeatureIcon size={20} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">{feature.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{feature.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className={chip}>
              <PlatformIcon size={14} />
              {app.platform}
            </span>
            <span className={chip}>
              <Tag size={14} />
              Version {app.version}
            </span>
            {app.size && (
              <span className={chip}>
                <HardDrive size={14} />
                {app.size}
              </span>
            )}
          </div>

          <div className="mt-6">
            <DownloadButton app={app} />
          </div>
          <p className="mt-4 flex max-w-md gap-2 text-sm leading-relaxed text-muted">
            <Info size={16} className="mt-0.5 shrink-0" />
            {app.note}
          </p>
        </div>

        <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          <div
            className={`flex items-center justify-center overflow-hidden rounded-[2rem] ${app.stage} ${
              app.portrait ? "px-6 py-10 sm:py-14" : "p-5 sm:p-10"
            }`}
          >
            <img
              src={app.image}
              width={app.width}
              height={app.height}
              alt={app.alt}
              loading="lazy"
              className={
                app.portrait
                  ? "block h-auto w-[62%] max-w-[300px] rounded-[1.75rem] shadow-2xl ring-1 ring-white/15"
                  : "block h-auto w-full rounded-xl shadow-2xl ring-1 ring-white/10"
              }
            />
          </div>
        </div>
      </div>
    </article>
  );
}
