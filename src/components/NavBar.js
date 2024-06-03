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
    </nav>
  );
};

export default NavBar;
