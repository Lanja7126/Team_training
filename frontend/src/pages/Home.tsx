import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        
        <h1 className="hero-title">L'éducation de qualité pour tous</h1>
        
        <p className="hero-subtitle">
          Notre plateforme soutient l'Objectif de Développement Durable n°4 avec des
          cours accessibles, modernes et adaptés à tous les apprenants.
        </p>



        <div className="hero-actions">

          
          <Link to="/cours" className="btn-primary">
            Explorer les cours
          </Link>
          
          <Link to="/contact" className="btn-secondary">
            Découvrir notre mission
          </Link>
          
        </div>
      </div>
      
      <div className="hero-stats">
        
        <div className="stat-item">
          <span className="stat-number">250+</span>
          <span className="stat-label">Cours disponibles</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Apprenants</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Satisfaction</span>
        </div>
      </div>
      
    </div>

  );
};

export default Home;
