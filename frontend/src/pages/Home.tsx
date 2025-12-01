import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
  return (
    <header className="Navbar">
        <div className="logo">
            <a href="#">APP</a>
        </div>
        <nav className="menu">
            <ul>
                <li><Link to="/signup"><i className="fa-solid fa-user-plus" style={{ marginRight: "0.5rem" }}></i>Sign Up</Link></li>
                <li><Link to="/login"><i className="fa-solid fa-arrow-right-to-bracket" style={{marginRight: "0.5rem"}}></i>Login</Link></li>
            </ul>
      </nav>
    </header>
  );
};

export default Home;
