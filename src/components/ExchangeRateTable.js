// ExchangeRateTable.js
import React from 'react';

const ExchangeRateTable = ({ exchangeRates }) => {
  return (
    <div className="exchange-rate-table">
      <h2>Exchange Rates</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Exchange Rate</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates && Object.entries(exchangeRates.rates).map(([currency, rate]) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRateTable;

