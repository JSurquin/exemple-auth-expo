# 📱 Application Tinder Clone avec React Native & Expo

## 📚 Introduction

Bienvenue dans ce projet d'application mobile inspirée de Tinder ! Ce projet a été créé pour vous aider à comprendre le développement mobile moderne avec React Native et Expo.

## 🛠 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (installé avec Node.js)
- [Git](https://git-scm.com/) pour la gestion de versions
- Un éditeur de code (nous recommandons [VS Code](https://code.visualstudio.com/))

## 🚀 Installation et démarrage

### 1. Installation des dépendances

```bash
npm install
```

Cette commande installe toutes les bibliothèques nécessaires définies dans le package.json.

### 2. Lancement du projet

```bash
npx expo start
```

Cette commande démarre le serveur de développement Expo.

## 📱 Comment tester l'application ?

### Option 1 : Sur votre téléphone

1. Téléchargez l'application "Expo Go" sur :
   - [App Store](https://apps.apple.com/app/expo-go/id982107779) pour iOS
   - [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) pour Android
2. Scannez le QR code qui apparaît dans votre terminal

### Option 2 : Sur simulateur

- Pour iOS : Installez [Xcode](https://apps.apple.com/app/xcode/id497799835) (Mac uniquement)
- Pour Android : Installez [Android Studio](https://developer.android.com/studio)

## 📂 Structure du projet

```
/
├── app/                    # Dossier principal de l'application
│   ├── (private)/         # Routes privées (nécessitant authentification)
│   │   └── (tabs)/        # Navigation par onglets
│   └── (public)/          # Routes publiques
├── components/            # Composants réutilisables
├── constants/            # Constants (couleurs, dimensions...)
├── hooks/               # Hooks personnalisés
├── lib/                # Utilitaires et fonctions
└── store/              # État global de l'application
```

## 🔑 Fonctionnalités principales

- 🔐 Authentification complète
- 👤 Gestion des profils utilisateurs
- 🔄 Navigation par onglets
- 📱 Interface responsive
- 🎨 Thème clair/sombre

## 💡 Concepts clés à comprendre

### React Native

- Composants natifs vs Web
- Style avec StyleSheet
- Gestion du layout avec Flexbox

### Expo

- Système de routage (Expo Router)
- Gestion des assets
- Utilisation des API natives

### Architecture

- Navigation imbriquée (Stack + Tabs)
- Gestion de l'état global
- Sécurisation des routes

## 🔍 Guide de développement

### Ajouter une nouvelle page

1. Créez un nouveau fichier dans `app/`
2. Le nom du fichier sera l'URL (ex: `profile.tsx` = `/profile`)
3. Utilisez le composant `Stack.Screen` pour la navigation

### Modifier le style

1. Utilisez `StyleSheet.create()`
2. Respectez le thème dans `constants/Colors`
3. Pensez responsive avec `Dimensions.get()`

## 🐛 Débogage

- Secouez votre appareil pour ouvrir le menu développeur
- Utilisez `console.log()` pour déboguer
- Activez "Debug Remote JS" pour utiliser Chrome DevTools

## 📚 Ressources utiles

- [Documentation React Native](https://reactnative.dev/)
- [Documentation Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 🤝 Contribution

1. Créez une branche (`git checkout -b feature/maFeature`)
2. Committez vos changements (`git commit -m 'feat: ajout de maFeature'`)
3. Poussez vers la branche (`git push origin feature/maFeature`)
4. Ouvrez une Pull Request

## ❓ Besoin d'aide ?

- Consultez la [documentation officielle](https://docs.expo.dev/)
- Rejoignez le [Discord Expo](https://chat.expo.dev/)
- Posez vos questions sur [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
