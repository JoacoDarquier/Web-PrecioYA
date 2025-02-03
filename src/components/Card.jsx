function PriceCard({ title, buy, sell, variation }) {
    return (
        <div className="price-card" itemScope itemType="https://schema.org/PriceSpecification">
            <div className="card-header">
                <h3 itemProp="name">{title}</h3>
            </div>
            <div className="price-container">
                <div className="price-box">
                    <span className="price-label">Compra</span>
                    <span className="price-value" itemProp="price">${buy}</span>
                    <meta itemProp="priceCurrency" content="ARS" />
                </div>
                <div className="price-divider"></div>
                <div className="price-box">
                    <span className="price-label">Venta</span>
                    <span className="price-value" itemProp="price">${sell}</span>
                    <meta itemProp="priceCurrency" content="ARS" />
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