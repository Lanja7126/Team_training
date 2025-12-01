import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import { db } from "./db";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// --- SIGN UP ---
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
    res.json({ message: "Utilisateur créé !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de l'inscription" });
  }
});

// --- LOGIN ---
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    const user = (rows as any)[0];
    if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Mot de passe incorrect" });

    res.json({ message: "Connexion réussie !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
