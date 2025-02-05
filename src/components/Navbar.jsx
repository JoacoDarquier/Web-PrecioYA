import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="PrecioYa" /> 
                    <span>PrecioYA</span>
                </Link>
            </div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="material-icons">
                    {isMenuOpen ? 'close' : 'menu'}
                </span>
            </button>

            <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link">
                    <span className="material-icons">home</span>
                    Inicio
                </Link>
                <Link to="/noticias" className="nav-link">
                    <span className="material-icons">article</span>
                    Noticias
                </Link>
            </div>

            <button className="theme-toggle" onClick={toggleDarkMode}>
                <span className="material-icons">
                    {darkMode ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
        </nav>
    );
}

export default Navbar;