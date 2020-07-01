import React from 'react';
import Header from './components/Header/Header';
import AddTransaction from './components/AddTransaction/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

const App = () => (
  <GlobalProvider>
    <div className="app">
      <Header />
      <AddTransaction />
    </div>
  </GlobalProvider>
);

export default App;
