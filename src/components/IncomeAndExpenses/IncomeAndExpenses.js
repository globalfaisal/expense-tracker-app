import React from 'react';

import styles from './IncomeAndExpenses.module.scss';

const IncomeAndExpenses = () => (
  <div className={styles.wrapper}>
    <div className={styles.box}>
      <span>Income (+)</span>
      <span className={styles.income}>$0.00</span>
    </div>
    <div className={styles.box}>
      <span>Income (-)</span>
      <span className={styles.expense}>$0.00</span>
    </div>
  </div>
);

export default IncomeAndExpenses;
