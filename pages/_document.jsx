import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className="bg-paper font-sans text-ink antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
