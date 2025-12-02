# 📂 Structure du projet
mon-projet/
│
├── backend/   → Serveur Node.js + API
└── frontend/  → Application React

# 🔧 Installation
## 1️⃣ Cloner le projet
```bash
    git clone "https://github.com/Lanja7126/Team_training"
```
Sous Linux :
```bash
    cd Team_training
```
Naviguez simplement dans le dossier Team_training via l'explorateur de fichiers ou PowerShell :
```bash
    cd Team_training
```

## 2️⃣ Installer les dépendances
### ▶️ Backend
Sous Linux ou Windows (mêmes commandes) :
```bash
    cd Team_training
```
Puis:
```bash
    npm install
```
### ▶️ Frontend
Sous Linux ou Windows (mêmes commandes) :
```bash
    cd ../frontend
```
Puis:
```bash
    npm install
```
## ▶️ Lancer l'application
### 1️⃣ Démarrer le backend
```bsh
    cd ../backend
```
```bsh
    npx ts-node-dev src/index.ts
```
➡️ Le serveur démarre généralement sur :
```bash
    http://localhost:5000
```
### 2️⃣ Démarrer le frontend
```bash
    cd ../frontend
```
```bash
    npm run dev
```
➡️ L'application React démarre sur :
```bash
    http://localhost:5173
```