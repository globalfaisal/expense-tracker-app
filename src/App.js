import React, { useEffect, useContext } from 'react';

import Header from './components/Header/Header';
import AddTransaction from './components/AddTransaction/AddTransaction';

import { GlobalContext } from './context/GlobalContext';

import './App.css';
import TransactionList from './components/TransactionList/TransactionList';

const App = () => {
  const { getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container ">
          <AddTransaction />
          <TransactionList />
        </div>
      </main>
    </div>
  );
};

export default App;
