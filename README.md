# AAPI - Site Web

## Structure du Projet

```
Site_dombo/
├── assets/
│   ├── css/
│   │   ├── base/
│   │   └── components/
│   ├── images/
│   └── js/
├── components/
├── legal/
└── pages/
```

## Technologies Utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- TailwindCSS
- GSAP (animations)

## Installation

1. Cloner le repository
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## Composants

### Header (`components/header.html`)
Navigation principale et menu mobile.

### Footer (`components/footer.html`)
Pied de page avec liens et informations de contact.

### Card (`components/card.html`)
Composant réutilisable pour les sections équipe et activités.

## Styles

Les styles sont organisés en deux catégories :
- Base : styles fondamentaux
- Components : styles spécifiques aux composants

## Performance

- Images optimisées en WebP
- Lazy loading des images
- Minification des assets
- Cache via Service Worker

## SEO

- Métadonnées optimisées
- Structure sémantique
- robots.txt et sitemap.xml

## Accessibilité

- Navigation au clavier
- Attributs ARIA
- Contraste conforme aux normes WCAG

## Maintenance

Pour mettre à jour le site :
1. Modifier les fichiers source
2. Tester localement
3. Optimiser les assets
4. Déployer
