import React, { useState } from 'react';

import styles from './AddTransaction.module.scss';

const AddTransaction = () => {
  const [type, setType] = useState('income');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    console.log(type, name, amount);
  };
  return (
    <div className={styles.addTransaction}>
      <form onSubmit={onSubmit}>
        <div className={styles.formControl}>
          <div className={styles.select}>
            <select
              name="type"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <input
            name="name"
            type="text"
            placeholder="Transaction name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            className={styles.inputAmount}
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <input type="submit" value="Add" hidden />
      </form>
    </div>
  );
};

export default AddTransaction;
