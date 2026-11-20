import { useState } from "react";
import { AlertCircle, Clock, Download, Loader2 } from "lucide-react";

async function downloadApp(app, onProgress) {
  const base = `/apps/${app.id}`;
  const manifestResponse = await fetch(`${base}/manifest.json`, { cache: "no-store" });
  if (!manifestResponse.ok) throw new Error("manifest");
  const manifest = await manifestResponse.json();

  const blobs = [];
  let received = 0;

  for (const part of manifest.parts) {
    const response = await fetch(`${base}/${part}?v=${manifest.hash}`);
    if (!response.ok) throw new Error(part);
    const blob = await response.blob();
    blobs.push(blob);
    received += blob.size;
    onProgress(Math.round((received / manifest.size) * 100));
  }

  if (received !== manifest.size) throw new Error("size");

  const url = URL.createObjectURL(new Blob(blobs, { type: "application/octet-stream" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = manifest.name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

export default function DownloadButton({ app, tone = "dark" }) {
  const [state, setState] = useState("idle");
  const [progress, setProgress] = useState(0);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  if (!app.available) {
    const disabled =
      tone === "dark"
        ? "bg-line text-muted focus-visible:outline-ink"
        : "bg-white/10 text-white/50 focus-visible:outline-white";
    return (
      <span aria-disabled="true" className={`${base} ${disabled} cursor-not-allowed`}>
        <Clock size={18} />
        Bientôt disponible
      </span>
    );
  }

  const active =
    tone === "dark"
      ? "bg-ink text-paper hover:bg-ink/85 focus-visible:outline-ink"
      : "bg-white text-ink hover:bg-white/85 focus-visible:outline-white";

  const start = async () => {
    setState("loading");
    setProgress(0);
    try {
      await downloadApp(app, setProgress);
      setState("idle");
    } catch (error) {
      setState("error");
    }
  };

  return (
    <button
      type="button"
      onClick={start}
      disabled={state === "loading"}
      className={`${base} ${active} disabled:cursor-wait disabled:opacity-80`}
    >
      {state === "loading" && <Loader2 size={18} className="animate-spin" />}
      {state === "error" && <AlertCircle size={18} />}
      {state === "idle" && <Download size={18} />}
      {state === "loading" && `Téléchargement ${progress} %`}
      {state === "error" && "Échec, réessayer"}
      {state === "idle" && app.action}
    </button>
  );
}
