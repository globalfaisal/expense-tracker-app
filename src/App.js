import React from 'react';

import Header from './components/Header/Header';
import AddTransaction from './components/AddTransaction/AddTransaction';

import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <AddTransaction />
  </div>
);

export default App;
