[README (1).md](https://github.com/user-attachments/files/28952855/README.1.md)
# 🎭 Golden Vibes Party — Système de billetterie numérique

Système complet de gestion d'invitations avec QR codes, connecté à Firebase et hébergé sur Netlify.

---

## 📁 Structure du projet

```
📁 projet/
  ├── index.html        → Page d'accueil avec navigation
  ├── admin.html        → Gestion des invités (ajout / suppression)
  ├── carte.html        → Génération des cartes d'invitation + QR codes
  ├── invitation.html   → Page de vérification à l'entrée (scan QR)
  ├── firebase.js       → Configuration et connexion Firebase
  └── README.md         → Documentation du projet
```

---

## 🔄 Flux d'utilisation

```
1. admin.html     → Tu ajoutes le nom de l'invité
                    → Code unique généré automatiquement (ex: INV-47382)
                    → Sauvegardé dans Firebase

2. carte.html     → Tu recherches l'invité par nom
                    → Tu génères sa carte Black & Gold avec QR code
                    → Tu télécharges l'image PNG
                    → Tu envoies par WhatsApp ou Email

3. Jour J         → L'invité présente sa carte
                    → Le vigile scanne le QR code
                    → invitation.html s'ouvre automatiquement
                    → ✅ "Accès autorisé" ou ❌ "Accès refusé"
```

---

## ⚙️ Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| HTML / CSS / JS | Interface utilisateur |
| Firebase Firestore | Base de données en temps réel |
| QRCode.js | Génération des QR codes |
| html2canvas | Export de la carte en image PNG |
| Netlify | Hébergement gratuit du site |

---

## 🌐 Liens du projet

- **Site en ligne** : https://goldenvibespartyl1math-info-eco.netlify.app
- **Admin** : https://goldenvibespartyl1math-info-eco.netlify.app/admin.html
- **Générer une carte** : https://goldenvibespartyl1math-info-eco.netlify.app/carte.html
- **Vérification** : https://goldenvibespartyl1math-info-eco.netlify.app/invitation.html

---

## 🔥 Configuration Firebase

Le fichier `firebase.js` contient la configuration du projet Firebase.
La base de données Firestore utilise une collection `invites` avec la structure suivante :

```json
{
  "nom": "Aya Koné",
  "code": "INV-47382",
  "valide": true,
  "createdAt": 1720000000000
}
```

---

## 🛡️ Règles Firestore

Les règles suivantes sont configurées dans Firebase Console :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /invites/{document} {
      allow read, write: if true;
    }
  }
}
```

---

## ✨ Fonctionnalités

- ✅ Génération de codes uniques par invité
- ✅ QR codes personnalisés par invitation
- ✅ Carte d'invitation téléchargeable en PNG
- ✅ Envoi rapide via WhatsApp ou Email
- ✅ Vérification en temps réel via Firebase
- ✅ Recherche flexible (insensible aux accents et à la casse)
- ✅ Capitalisation automatique des noms
- ✅ Design Black & Gold responsive

---

## 📅 Événement

**Golden Vibes Party**
📆 04 Juillet 2026 · 18h00
📍 Xizang Resto Lounge, Non loin du terrain d'Angré
👗 Dress code : Black & Gold

---

## 👨‍💻 Développé par

Blehiri — L3  Informatique · UNISAT Abidjan
