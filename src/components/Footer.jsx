import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTiktok
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-contenido">

                <div className="footer-marca">
                    <h2>Voltrix</h2>

                    <p>
                        Tus mejores productos de tecnologia e innovación para tu día a día.
                    </p>
                </div>

                <div className="footer-seccion">
                    <h3>AYUDA</h3>

                    <a href="#">Cómo comprar</a>
                    <a href="#">Medios de pago</a>
                    <a href="#">Envíos</a>
                    <a href="#">Contacto</a>
                </div>

                <div className="footer-seccion">
                    <h3>POLÍTICAS</h3>

                    <a href="#">Política de envíos</a>
                    <a href="#">Devoluciones</a>
                    <a href="#">Privacidad</a>
                    <a href="#">Términos y condiciones</a>
                </div>

            </div>

            <div className="footer-redes">

                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube />
                </a>

                <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTiktok />
                </a>

            </div>

            <div className="footer-final">
                <p>© 2026, Voltrix Argentina</p>
            </div>

        </footer>
    );
}

export default Footer;