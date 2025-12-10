import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';
import { 
    faHome, faBookOpen, faEnvelope, faGraduationCap, faChalkboardTeacher , faUser
} from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault(); 
        console.log('Recherche soumise!');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">EduPlus</div>

            <div className="navbar-links">
                <Link to="/"><FontAwesomeIcon icon={faHome} /> Accueil</Link>
                <Link to="/cours"><FontAwesomeIcon icon={faBookOpen} /> Cours</Link>
                <Link to="/enseignants"><FontAwesomeIcon icon={faChalkboardTeacher} /> Enseignants</Link>
                <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
                <Link to="/certification"><FontAwesomeIcon icon={faGraduationCap} /> Certification</Link>
                 <Link to="/signUp"><FontAwesomeIcon icon={faUser} /> SignUp</Link>
            </div>

            <div className="navbar-actions">
                
               
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    
                  
                    <input 
                        type="text" 
                        placeholder="Rechercher..." 
                        className="search-input"
                    />
                    
                </form>
                
                <select className="language-selector">
                    <option>Français</option>
                    <option>English</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;