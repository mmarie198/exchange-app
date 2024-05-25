// CurrencyConverter.js
import React, { useState } from 'react';

const CurrencyConverter = ({ exchangeRates }) => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const handleConvert = () => {
    // Check if amount is valid
    if (isNaN(amount) || amount === '') {
      alert('Please enter a valid amount.');
      return;
    }

    // Check if exchangeRates is available
    if (!exchangeRates || !exchangeRates.rates) {
      alert('Exchange rates data is not available.');
      return;
    }

    // Convert amount
    const rate = exchangeRates.rates[targetCurrency];
    const converted = parseFloat(amount) * rate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <div className="currency-converter">
      <h2>Conversion Calulator:</h2>
      <div className="converter-form">
        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" value={amount} onChange={handleAmountChange} />

        <label htmlFor="baseCurrency">From:</label>
        <select id="baseCurrency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {/* Render options dynamically based on available currencies */}
          {exchangeRates && exchangeRates.rates && Object.keys(exchangeRates.rates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <label htmlFor="targetCurrency">To:</label>
        <select id="targetCurrency" value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {/* Render options dynamically based on available currencies */}
          {exchangeRates && exchangeRates.rates && Object.keys(exchangeRates.rates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <button onClick={handleConvert}>Convert</button>
      </div>

      {convertedAmount && (
        <div className="conversion-result">
          <p>Converted Amount: {convertedAmount} {targetCurrency}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;


