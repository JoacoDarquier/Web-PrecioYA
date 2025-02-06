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

function App() {
  const [category, setCategory] = useState("Dólares");
  const [dolares, setDolares] = useState([]);
  const [criptomonedas, setCriptomonedas] = useState({});
  const [dolaresCripto, setDolaresCripto] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      switch (category) {
        case "Dólares":
          const dolaresData = await fetchDolares();
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
            variation={0}
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
        return Object.entries(criptomonedas).map(([crypto, prices]) => (
          <Card
            key={crypto}
            title={crypto.charAt(0).toUpperCase() + crypto.slice(1)}
            buy={prices.usd}
            sell={prices.usd}
            variation={0}
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
          </>
        } />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App