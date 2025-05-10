import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Cambia el estado de visibilidad
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    AnimeVerse
                </Link>

                {/* Ícono de hamburguesa (solo visible en pantallas pequeñas) */}
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* Símbolo del menú hamburguesa */}
                </div>

                {/* Menú de navegación para pantallas grandes */}
                <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
                    <Link to="/news" className="nav-link">
                        Novedades
                    </Link>
                    <Link to="/animelist" className="nav-link">
                        Listado
                    </Link>
                    <Link to="/favoritos" className="nav-link">
                        Favoritos
                    </Link>
                    <Link to="/buscar" className="nav-link">
                        Buscar
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
