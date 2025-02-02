function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-disclaimer">
                    <p className="disclaimer-text">
                        La información proporcionada en este sitio es solo para fines informativos y no constituye asesoramiento financiero. 
                        Las decisiones de inversión deben tomarse con precaución y bajo su propia responsabilidad.
                    </p>
                </div>
                <div className="footer-bottom">
                    <div className="footer-info">
                        <span>© 2025 PrecioYA</span>
                        <span className="separator">|</span>
                        <span>Desarrollado por <a href="https://www.mangoit.com.ar/" target="_blank" rel="noopener noreferrer">MangoIT</a></span>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/JoacoDarquier" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span className="material-icons">code</span>
                        </a>
                        <a href="https://www.linkedin.com/company/man6oit" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span className="material-icons">business</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 