// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ baseCurrency, setBaseCurrency }) => {
  const handleCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <nav>
      <h1>Currency Exchange App</h1>
      <ul>
        <li>
          <Link to="/">Converter</Link>
        </li>
        <li>
          <Link to="/exchange-rates">Exchange Rates</Link>
        </li>
      </ul>
      <select value={baseCurrency} onChange={handleCurrencyChange}>
        {/* Add options for currencies */}
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        {/* Add more currencies as needed */}
      </select>
    </nav>
  );
};

export default NavBar;
