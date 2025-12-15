import { useState } from "react";
import './SignUp.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faEnvelope,
  faLock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

<div className="signup-container">
      <div className="left">
        <h2>EduPlus</h2>

        <h1>Rejoignez notre communauté éducative</h1>
        <p>
          Accédez à des centaines de cours de qualité et développez vos
          compétences.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Accès à tous les cours
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Certifications reconnues
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Support personnalisé
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Apprentissage à votre rythme
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="card">
          <h2>Créez votre compte</h2>
          <p className="subtitle">
            Commencez votre parcours d'apprentissage en quelques secondes
          </p>

          <button className="btn google">
            <FontAwesomeIcon icon={faGoogle} />
            S’inscrire avec Google
          </button>

          <button className="btn facebook">
            <FontAwesomeIcon icon={faFacebookF} />
            S’inscrire avec Facebook
          </button>

          <div className="divider">
            <span></span>
            <small>ou</small>
            <span></span>
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Votre nom complet" />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="exemple@email.com" />
          </div>

          <div className="input-group password">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Mot de passe" />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Confirmez votre mot de passe"
            />
          </div>

          <button className="btn-submit">Créer un compte</button>
</div>
</div>
</div>


