import { useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchDolares } from '../services/api';
import customStyles from '../styles/reactSelectStyles';

function Calculadora() {
    const [dolares, setDolares] = useState([]);
    const [selectedDolar, setSelectedDolar] = useState(null);
    const [cantidad, setCantidad] = useState('');
    const [resultado, setResultado] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains('dark-mode'));

    useEffect(() => {
        const fetchData = async () => {
            const dolaresData = await fetchDolares();
            setDolares(dolaresData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedDolar && cantidad) {
            const dolar = dolares.find(d => d.nombre === selectedDolar.value);
            if (dolar) {
                setResultado(cantidad * dolar.venta);
            }
        } else {
            setResultado(0);
        }
    }, [selectedDolar, cantidad, dolares]);

    useEffect(() => {
        const handleDarkModeToggle = () => {
            setIsDarkMode(document.body.classList.contains('dark-mode'));
        };

        window.addEventListener('dark-mode-toggle', handleDarkModeToggle);

        return () => {
            window.removeEventListener('dark-mode-toggle', handleDarkModeToggle);
        };
    }, []);

    const dolarOptions = dolares.map(dolar => ({
        value: dolar.nombre,
        label: dolar.nombre
    }));

    const formatNumber = (number) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
        }).format(number);
    };

    return (
        <div className="calculadora-container">
            <h1>Calculadora Financiera</h1>
            <div className="calculadora-form">
                <div className="form-group">
                    <label htmlFor="dolar-type">Tipo de Dólar</label>
                    <Select
                        id="dolar-type"
                        options={dolarOptions}
                        value={selectedDolar}
                        onChange={setSelectedDolar}
                        placeholder="Selecciona un tipo de dólar"
                        styles={customStyles(isDarkMode)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        placeholder="Cantidad"
                        min="0"
                        step="0.01"
                    />
                </div>
                <div className="form-group resultado">
                    <label>Resultado</label>
                    <p>{formatNumber(resultado)}</p>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;