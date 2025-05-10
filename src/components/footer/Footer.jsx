import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>© 2023 AnimeVerse. Todos los derechos reservados.</p>
                    <p>Política de Privacidad y Cookies | Condiciones de Venta</p>
                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/tuusuario" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.figma.com" className="footer-link" target="_blank" rel="noopener noreferrer">Figma</a>
                        <a href="https://www.example.com" className="footer-link" target="_blank" rel="noopener noreferrer">Inspiration</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;