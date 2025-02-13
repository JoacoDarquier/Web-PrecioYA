function LastUpdate({ timestamp }) {
    return (
        <div className="last-update">
            <span className="material-icons">update</span>
            <span>Última actualización: {timestamp}</span>
        </div>
    );
}

export default LastUpdate; 