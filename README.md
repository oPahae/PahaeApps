# Pahae Apps

Site vitrine Next.js (Pages Router) pour présenter et télécharger les applications.

## Lancement

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Ajouter les applications

1. Copiez les fichiers dans `public/apps` avec ces noms exacts :
   - `pahaePoster.exe`
   - `pahaeVideoPlayer.exe`
   - `pahaeMusic.apk`
2. Découpez-les en morceaux de 20 Mo :

```bash
npm run split
```

Chaque fichier crée un dossier (`public/apps/pahaePoster`, etc.) contenant les morceaux et un `manifest.json`.
Le navigateur télécharge les morceaux, les recolle et propose le fichier complet.

3. Envoyez sur GitHub : seuls les morceaux sont versionnés, les fichiers `.exe` et `.apk` d'origine sont ignorés par `.gitignore`.

```bash
git add .
git commit -m "Ajout des applications"
git push
```

Pour une nouvelle version, remplacez le fichier d'origine puis relancez `npm run split`.
En production, relancez `npm run build` puis `npm start` après chaque changement.

Les noms, versions et textes se modifient dans `data/apps.jsx`.
