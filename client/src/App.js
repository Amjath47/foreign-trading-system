import React from 'react';
import CurrencyConverter from './components/Converter';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Foreign trading system</h1>
        <p>Live Forex rates and conversion across the globe</p>
      </header>

      <main className="app-main">
        <section className="converter-section">
          <CurrencyConverter />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Foreign Trading System | Mini Project</p>
      </footer>
    </div>
  );
}

export default App;
