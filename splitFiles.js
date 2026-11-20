const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const partSize = 20 * 1024 * 1024;
const appsDir = path.join(__dirname, "public", "apps");

const targets = [
  { id: "pahaePoster", file: "PahaePoster Setup 1.0.0.exe" },
  { id: "pahaeVideoPlayer", file: "PahaeVideoPlayer Setup 1.0.0.exe" },
  { id: "pahaeMusic", file: "pahaeMusicPlayer.apk" },
];

const readFully = (fd, buffer, position) => {
  let filled = 0;
  while (filled < buffer.length) {
    const read = fs.readSync(fd, buffer, filled, buffer.length - filled, position + filled);
    if (read === 0) break;
    filled += read;
  }
  return filled;
};

targets.forEach(({ id, file }) => {
  const source = path.join(appsDir, file);

  if (!fs.existsSync(source)) {
    console.log(`Ignore ${file} : fichier introuvable dans public/apps`);
    return;
  }

  const outDir = path.join(appsDir, id);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const total = fs.statSync(source).size;
  const fd = fs.openSync(source, "r");
  const hash = crypto.createHash("sha1");
  const buffer = Buffer.alloc(partSize);
  const parts = [];
  let offset = 0;

  while (offset < total) {
    const filled = readFully(fd, buffer, offset);
    const chunk = buffer.subarray(0, filled);
    const partName = `${parts.length}.bin`;
    fs.writeFileSync(path.join(outDir, partName), chunk);
    hash.update(chunk);
    parts.push(partName);
    offset += filled;
  }

  fs.closeSync(fd);

  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify({ name: file, size: total, hash: hash.digest("hex").slice(0, 12), parts })
  );

  console.log(`${file} : ${parts.length} morceaux dans public/apps/${id}`);
});
