import React from 'react';

import styles from './AddTransaction.module.scss';

const AddTransaction = () => (
  <div className={styles.addTransaction}>
    <form>
      <div className={styles.formControl}>
        <div className={styles.select}>
          <select name="type">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <input name="name" type="text" placeholder="Transaction name" />
        <input
          name="amount"
          type="text"
          placeholder="Amount"
          className={styles.inputAmount}
        />
      </div>
    </form>
  </div>
);

export default AddTransaction;
