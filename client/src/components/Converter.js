import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Converter.css';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => {
        setCurrencies(Object.keys(res.data.rates));
        setRate(res.data.rates[toCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(res => {
          const newRate = res.data.rates[toCurrency];
          setRate(newRate);
          setResult((amount * newRate).toFixed(2));
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="converter-container">
      <div className="input-group">
        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div className="input-group">
        <label>From</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map(curr => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>To</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map(curr => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>

      <div className="result">
        <p>Exchange Rate: 1 {fromCurrency} = {rate} {toCurrency}</p>
        <h3>Total: {result} {toCurrency}</h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;
