// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { fetchExchangeRates } from './api';
import NavBar from './components/NavBar';
import ExchangeRateTable from './components/ExchangeRateTable';
import CurrencyConverter from './components/CurrencyConverter';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('EUR'); // Default base currency
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    const getExchangeRates = async () => {
      const data = await fetchExchangeRates(baseCurrency);
      setExchangeRates(data);
    };
    getExchangeRates();
  }, [baseCurrency]);

  return (
    <Router>
      <div className="App">
        <NavBar baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} />
        <Switch>
          <Route path="/" exact>
            <CurrencyConverter exchangeRates={exchangeRates} />
          </Route>
          <Route path="/exchange-rates">
            <ExchangeRateTable exchangeRates={exchangeRates} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

