// api.js
import axios from 'axios';

const BASE_URL = 'https://api.frankfurter.app';

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}/latest?from=${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
};
