function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1>
                    <span className="highlight">Cotizaciones</span> en Tiempo Real
                </h1>
                <p>Consultá las cotizaciones actualizadas del dólar blue, oficial, MEP, CCL y cripto en Argentina. Información en tiempo real con actualización automática cada minuto.</p>
                <div className="header-stats">
                    <div className="stat-item">
                        <span className="material-icons">update</span>
                        <span>Tiempo real</span>
                    </div>
                    <div className="stat-item">
                        <span className="material-icons">currency_exchange</span>
                        <span>Múltiples cotizaciones</span>
                    </div>
                    <div className="stat-item">
                        <span className="material-icons">trending_up</span>
                        <span>Variaciones</span>
                    </div>
                </div>
                <a 
                    href="https://chromewebstore.google.com/detail/precioya-cotizaciones-arg/dafgedpmapidfeadbfolepjgneopoebk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="extension-button"
                >
                    <span className="material-icons">extension</span>
                    Descarga nuestra extensión para Chrome
                </a>
            </div>
        </header>
    );
}

export default Header;