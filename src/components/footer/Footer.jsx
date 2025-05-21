import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instagramIcon from '../..//assets/icons/instagram.png';
import githubIcon from '../..//assets/icons/github.png';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>© 2025 AnimeVerse. Todos los derechos reservados.</p>
                    <p>
                        Política de Privacidad y Cookies: Este sitio utiliza cookies para garantizar la mejor experiencia al usuario. No almacenamos información personal sin tu consentimiento explícito.
                    </p>
                    <p>
                        Condiciones de Venta: Todo el contenido proporcionado en AnimeVerse es de carácter informativo. No se realizan transacciones comerciales a través del sitio. El acceso y uso implican la aceptación de nuestras normas.
                    </p>
                </div>
                <div className="footer-right">
                    <div className="social-info">
                        <p>Síguenos en redes para novedades, noticias de anime, lanzamientos y actualizaciones del proyecto:</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className="icon-img" />
                        </a>
                        <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="icon-img" />
                        </a>
                        <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="icon-img" />
                        </a>
                        <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="icon-img" />
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/tuusuario" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.figma.com" className="footer-link" target="_blank" rel="noopener noreferrer">Figma</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
