# 📧 Guide Complet - Configuration Email avec Gmail

## 1️⃣ CRÉER UN APP PASSWORD GMAIL

### ✅ Procédure étape par étape :

1. **Accès au compte Google**
   - Allez sur: https://myaccount.google.com
   - Connectez-vous avec thierry.temgoua98@gmail.com

2. **Activer l'authentification à 2 facteurs** (si pas encore fait)
   - Menu gauche → **Sécurité**
   - Cherchez **"Authentification à deux facteurs"**
   - Cliquez sur **"Activer"** et suivez les étapes

3. **Générer un App Password**
   - Retournez à **Sécurité**
   - Scroll jusqu'à **"Mots de passe d'application"**
   - Sélectionnez **Appareil** : "Mail" et "Windows"
   - Google génère un mot de passe de **16 caractères**
   - ⚠️ **Copiez ce mot de passe immédiatement** (il n'apparaîtra plus)

---

## 2️⃣ CONFIGURER LE FICHIER `.env.local`

Votre fichier `.env.local` a été mise à jour avec :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=thierry.temgoua98@gmail.com
SMTP_PASS=⬅️ REMPLACER PAR L'APP PASSWORD GOOGLE
SMTP_FROM=thierry.temgoua98@gmail.com
ADMIN_EMAIL=thierry.temgoua98@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### ⚠️ À faire :

**Remplacez `SMTP_PASS=votre_app_password_ici` par le mot de passe généré par Google**

Exemple :

```
SMTP_PASS=abcd efgh ijkl mnop
```

(sans espaces ou avec, Google vous montre le format)

---

## 3️⃣ TESTER EN LOCAL

### Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur: **http://localhost:3000**

### Tester le formulaire

1. Allez sur la page **"Contact"**
2. Remplissez le formulaire
3. Cliquez sur **Envoyer**

### ✅ Vérifier les emails

**Vous devriez recevoir :**

1. **Email au client** (accusé de réception)
   - Objet: "Confirmation de votre message — MD Transition"
   - Contient: récapitulatif du message, type de besoin

2. **Email à l'admin** (notification)
   - Objet: "[MD Transition] Nouvelle demande de [Nom] — [Type de besoin]"
   - Contient: tableau avec tous les détails
   - Option de répondre directement

---

## 4️⃣ STRUCTURE DES EMAILS ENVOYÉS

### Email Client (Confirmation)

```
Bonjour [Prénom],

Merci pour votre message ! J'ai bien reçu votre demande concernant [Type de Besoin]...

Récapitulatif de votre message:
- Type de besoin: [sélection du formulaire]
- Message: [le texte du message]
```

### Email Admin (Notification)

```
Nouvelle demande de contact

Tableau:
| Nom complet | [Prénom] [Nom] |
| Email | [email@example.com] |
| Téléphone | [numéro optionnel] |
| Type de besoin | [type sélectionné] |
| Message | [contenu du message] |
| Date | [date/heure France] |

[Bouton Répondre au client]
```

---

## 5️⃣ TROUBLESHOOTING

### ❌ "Authentification échouée"

- Vérifiez que SMTP_USER et SMTP_PASS sont corrects
- L'App Password doit être généré (pas le mot de passe du compte)
- Essayez sans espaces : `SMTP_PASS=abcdefghijklmnop`

### ❌ "Trop de requêtes"

- Rate limiting actif: max 3 requêtes/minute par IP
- Attendre 60 secondes ou essayer depuis une autre adresse IP

### ❌ Email non reçu après 2-3 minutes

- Vérifier les spam/courrier indésirable
- Vérifier les logs dans la console (npm run dev)
- S'assurer que ADMIN_EMAIL = SMTP_USER pour les tests

---

## 6️⃣ DÉPLOIEMENT EN PRODUCTION AVEC OVH

### ℹ️ Informations OVH

Vous avez un domaine + serveur de messagerie chez OVH. Voici comment configurer pour la production :

#### **1. Accès à votre compte OVH**

- Allez sur: https://www.ovh.com/manager/web/
- Authentifiez-vous avec vos identifiants OVH
- Sélectionnez votre domaine dans le menu **"Noms de domaine"**

#### **2. Configuration SMTP OVH**

**Voici les paramètres OVH :**

| Paramètre            | Valeur                                 |
| -------------------- | -------------------------------------- |
| **SMTP Host**        | ssl0.ovh.net                           |
| **SMTP Port**        | 465 (SSL) ou 587 (TLS)                 |
| **Authentification** | OUI (obligatoire)                      |
| **Utilisateur**      | Votre adresse email OVH                |
| **Mot de passe**     | Le mot de passe de votre adresse email |

#### **3. Trouver votre adresse email OVH**

- Dans le manager OVH: **Noms de domaine** → Votre domaine
- Allez à **Email** → **Comptes email**
- Vous verrez vos adresses email disponibles (ex: `contact@md-transition.fr`)

#### **4. Créer une adresse email dédiée (recommandé)**

Si vous n'en avez pas, créez-en une pour les envois automatiques:

- Manager OVH → **Email** → **Ajouter un compte**
- Exemple: `noreply@md-transition.fr` ou `contact@md-transition.fr`
- Définissez un mot de passe fort

### Configuration pour `.env.production`

Créez un fichier `.env.production` à la racine (ou modifiez votre `.env` de production):

```env
# ⚠️ EMAIL PRODUCTION - OVH ⚠️
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=465
SMTP_USER=contact@md-transition.fr
SMTP_PASS=votre_mot_de_passe_ovh
SMTP_FROM=contact@md-transition.fr

# Configuration du site
NEXT_PUBLIC_SITE_URL=https://md-transition.fr
ADMIN_EMAIL=contact@md-transition.fr
NODE_ENV=production
```

### ⚠️ Points importants pour OVH

1. **Port 465 (SSL) est recommandé** - C'est le plus sûr
   - Si port 465 ne fonctionne pas, essayez **587** avec `secure: false`

2. **Le mot de passe doit être exact** - Pas d'espaces, caractères spéciaux respectés

3. **Authentification obligatoire** - Contrairement à Gmail, OVH demande toujours l'auth

4. **Limite d'envoi** - OVH limite généralement à 300 emails/heure par compte

5. **Email de provenance** - L'email SMTP_FROM doit être une adresse valide sur votre domaine

### ✅ Vérifier la configuration

Une fois en production, testez:

```bash
# Faire un test d'envoi via le formulaire
# Vérifiez les logs de votre serveur
# L'email doit arriver dans les 30 secondes
```

---

## 7️⃣ MODIFICATION DU CODE POUR TLS vs SSL (OVH)

Si vous utilisez **Port 587** au lieu de 465, modifiez le code:

Dans [src/lib/email.ts](src/lib/email.ts), l'option `secure` est déjà paramétrée:

```typescript
secure: process.env.NODE_ENV === "production", // true en prod = SSL (465)
```

**Pour utiliser TLS (587) en production:**

Changez `secure: false` dans [src/lib/email.ts](src/lib/email.ts):

```typescript
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465", // SSL seulement si port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}
```

---

## 📞 RÉSUMÉ COMPLET

### **Local (Tests - Gmail)**

| Variable             | Valeur                      |
| -------------------- | --------------------------- |
| SMTP_HOST            | smtp.gmail.com              |
| SMTP_PORT            | 587                         |
| SMTP_USER            | thierry.temgoua98@gmail.com |
| SMTP_PASS            | [App Password Google]       |
| ADMIN_EMAIL          | thierry.temgoua98@gmail.com |
| NEXT_PUBLIC_SITE_URL | http://localhost:3000       |

### **Production (OVH - Domaine)**

| Variable             | Valeur                   |
| -------------------- | ------------------------ |
| SMTP_HOST            | ssl0.ovh.net             |
| SMTP_PORT            | 465                      |
| SMTP_USER            | contact@md-transition.fr |
| SMTP_PASS            | [Mot de passe OVH]       |
| ADMIN_EMAIL          | contact@md-transition.fr |
| NEXT_PUBLIC_SITE_URL | https://md-transition.fr |
| NODE_ENV             | production               |

---

## ✅ Checklist Déploiement en Production

- [ ] Créer/confirmer une adresse email sur OVH (contact@md-transition.fr)
- [ ] Tester la connexion SMTP localement avec `.env.local`
- [ ] Créer `.env.production` avec paramètres OVH
- [ ] Tester le formulaire sur le serveur de staging
- [ ] Vérifier que les emails arrivent sans spam
- [ ] Configurer les headers SPF/DKIM/DMARC chez OVH (pour améliorer la délivrabilité)
- [ ] Déployer en production

✅ **C'est tout ce qu'il faut !** Le code est déjà configuré correctement.
