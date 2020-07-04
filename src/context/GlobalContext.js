import React, { createContext, useReducer } from 'react';

import { actionTypes } from './actionTypes';
import AppReducer from './AppReducer';

const initialState = { transactions: [] };

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get transactions data
  const getTransactions = () => {
    fetch('http://localhost:3001/transactions?_sort=created_at&_order=desc')
      .then(res => {
        if (res.ok) return res.json();
        throw res;
      })
      .then(data => {
        dispatch({
          type: actionTypes.GET_TRANSACTIONS,
          payload: data,
        });
      })
      .catch(err => {
        console.log(err);
        if (err instanceof Error) return err;
      });
  };
  // Add transaction action
  const addTransaction = async transaction => {
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    })
      .then(res => {
        if (res.ok) return res.json();
        throw res;
      })
      .catch(err => {
        console.log(err);
        if (err instanceof Error) return err;
      });

    dispatch({
      type: actionTypes.ADD_TRANSACTION,
      payload: transaction,
    });
  };
  // Delete transaction action
  const deleteTransaction = id => {
    fetch(`http://localhost:3001/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) return res.json();
        throw res;
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        if (err instanceof Error) return err;
      });

    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
