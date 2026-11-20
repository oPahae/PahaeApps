import fs from "fs";
import path from "path";
import Head from "next/head";
import { apps } from "../data/apps";
import Header from "../components/header";
import Hero from "../components/hero";
import AppSection from "../components/appSection";
import Downloads from "../components/downloads";
import Footer from "../components/footer";

export async function getStaticProps() {
  const downloads = {};

  apps.forEach((app) => {
    const manifestPath = path.join(process.cwd(), "public", "apps", app.id, "manifest.json");
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const megabytes = manifest.size / 1048576;
      downloads[app.id] = {
        available: true,
        size: `${megabytes.toFixed(1).replace(".", ",")} Mo`,
      };
    } else {
      downloads[app.id] = { available: false, size: null };
    }
  });

  return {
    props: {
      downloads,
      year: new Date().getFullYear(),
    },
  };
}

export default function Home({ downloads, year }) {
  const items = apps.map((app) => ({ ...app, ...downloads[app.id] }));

  return (
    <>
      <Head>
        <title>Pahae - Applications à télécharger</title>
        <meta
          name="description"
          content="PahaePoster, PahaeVideoPlayer et PahaeMusic : une boîte à outils pour développeurs, un lecteur vidéo Windows et un lecteur de musique Android."
        />
      </Head>
      <Header />
      <main>
        <Hero apps={items} />
        <div id="applications" className="scroll-mt-16">
          {items.map((app, index) => (
            <AppSection key={app.id} app={app} reverse={index % 2 === 1} />
          ))}
        </div>
        <Downloads apps={items} />
      </main>
      <Footer year={year} />
    </>
  );
}
