import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../../context/GlobalContext';
import InputField from '../InputField/InputField';

import styles from './AddTransaction.module.scss';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const resetForm = () => {
    setText('');
    setAmount('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount,
      created_at: new Date().toISOString(),
    };
    addTransaction(newTransaction);
    resetForm();
  };

  return (
    <div className={styles.addTransaction}>
      <h4 style={{ marginBottom: '22px' }}>Add New Transaction</h4>
      <form onSubmit={onSubmit}>
        <div className={styles.formControl}>
          <InputField
            name="text"
            type="text"
            placeholder="What transaction?"
            value={text}
            onChange={e => setText(e.target.value)}
            className={styles.inputText}
          />
          <InputField
            name="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className={styles.inputAmount}
            helperText="Positive for income | Negative for expense"
          />
        </div>
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default AddTransaction;
