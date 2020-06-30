import React from 'react';

import Header from './components/Header/Header';
import IncomeAndExpenses from './components/IncomeAndExpenses/IncomeAndExpenses';

import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <div
      style={{
        position: 'absolute',
        top: '190px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <IncomeAndExpenses />
    </div>
  </div>
);

export default App;
