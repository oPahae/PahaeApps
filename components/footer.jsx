export default function Footer({ year }) {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{year} Pahae</p>
        <p className="max-w-xl">
          PahaeVideoPlayer et PahaeMusic sont distribués sous licence PolyForm Noncommercial 1.0.0
          : usage non commercial uniquement.
        </p>
      </div>
    </footer>
  );
}
