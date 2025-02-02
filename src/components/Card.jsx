function PriceCard({ title, buy, sell, variation }) {
    return (
        <div className="price-card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="price-container">
                <div className="price-box">
                    <span className="price-label">Compra</span>
                    <span className="price-value">${buy}</span>
                </div>
                <div className="price-divider"></div>
                <div className="price-box">
                    <span className="price-label">Venta</span>
                    <span className="price-value">${sell}</span>
                </div>
            </div>
            <div className={`variation ${variation < 0 ? "negative" : "positive"}`}>
                <span className="material-icons">
                    {variation < 0 ? 'trending_down' : 'trending_up'}
                </span>
                <span>{variation}%</span>
            </div>
        </div>
    );
}

export default PriceCard;