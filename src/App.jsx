import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CategoryButtons from './components/CategoryButtons'
import Card from './components/Card'
import { fetchDolares, fetchCriptomonedas, fetchDolaresCripto } from './services/api'
import Footer from './components/Footer'
import Noticias from './pages/Noticias'
import Calculadora from './pages/Calculadora'
import LastUpdate from './components/LastUpdate'
import TerminosCondiciones from './pages/TerminosCondiciones'
function App() {
  const [category, setCategory] = useState("Dólares");
  const [dolares, setDolares] = useState([]);
  const [criptomonedas, setCriptomonedas] = useState({});
  const [dolaresCripto, setDolaresCripto] = useState({});
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString(undefined, { 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }));

  useEffect(() => {
    const fetchData = async () => {
      setLastUpdate(new Date().toLocaleString(undefined, { 
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }));
      
      switch (category) {
        case "Dólares":
          const dolaresData = await fetchDolares();
          console.log('Datos de dólares con variaciones:', dolaresData);
          setDolares(dolaresData);
          break;
        case "Dólar Cripto":
          const dolaresCriptoData = await fetchDolaresCripto();
          setDolaresCripto(dolaresCriptoData);
          break;
        case "Criptomonedas":
          const criptomonedasData = await fetchCriptomonedas();
          setCriptomonedas(criptomonedasData);
          break;
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [category]);

  const renderCards = () => {
    switch (category) {
      case "Dólares":
        return dolares.map(dolar => (
          <Card
            key={dolar.nombre}
            title={dolar.nombre}
            buy={dolar.compra}
            sell={dolar.venta}
            variation={dolar.variation}
          />
        ));
      case "Dólar Cripto":
        return Object.entries(dolaresCripto).map(([exchange, data]) => (
          <Card
            key={exchange}
            title={exchange.toUpperCase()}
            buy={data.bid}
            sell={data.ask}
            variation={0}
          />
        ));
      case "Criptomonedas":
        return Object.entries(criptomonedas).map(([crypto, data]) => (
          <Card
            key={crypto}
            title={crypto.charAt(0).toUpperCase() + crypto.slice(1)}
            buy={data.usd}
            sell={data.usd}
            variation={data.variation}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <CategoryButtons setCategory={setCategory} />
            <div className="cards-container">
              {renderCards()}
            </div>
            <LastUpdate timestamp={lastUpdate} />
          </>
        } />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App