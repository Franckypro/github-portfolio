# Portfolio de Francky Fouejio, Data Engineer

Site personnel d'une page : intégration de données, projets, parcours et compétences.
Thème sombre, barre latérale fixe, panneaux plein écran alternés et accent or.

## Stack

- Vite, React 19 et TypeScript
- Tailwind CSS v4 (jetons de couleur et de typographie dans `src/index.css`)
- Motion pour les animations (désactivées si le visiteur préfère moins de mouvement)
- Phosphor Icons et Simple Icons pour les icônes et les logos d'outils
- Polices auto-hébergées : Abril Fatface, Geist et Geist Mono

## Modifier le contenu

Tous les textes sont dans `src/data/profile.ts` : profil, chiffres, étapes de la méthode, projets, parcours,
compétences, diplômes et certifications. Les composants n'ont pas à être touchés pour une mise à jour.

- Photos : `src/assets/img/` (Unsplash, licence libre)
- CV téléchargeable : désactivé pour le moment (aucun PDF publié)
- Image d'aperçu pour les réseaux : `public/og-image.jpg` (1200 x 630)

## Commandes

```bash
npm install
npm run dev       # serveur local sur http://localhost:5173
npm run build     # vérification TypeScript puis build dans dist/
npm run preview   # sert le build de production
```

## Mise en ligne

Le workflow `.github/workflows/deploy.yml` construit et publie le site sur GitHub Pages à chaque push sur `main`.
Dans le dépôt GitHub : Settings > Pages > Source : **GitHub Actions**.
Le build utilise des chemins relatifs, il fonctionne donc sur `https://<compte>.github.io/` comme sur
`https://<compte>.github.io/<depot>/`.
