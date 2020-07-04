import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import styles from './IncomeAndExpenses.module.scss';

const IncomeAndExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let totalIncome = '';
  let totalExpense = '';

  if (transactions) {
    const amounts = transactions.map(t => t.amount);
    totalIncome = amounts
      .filter(item => item > 0)
      .reduce((acc, curr) => acc + curr, 0);

    totalExpense =
      amounts.filter(item => item < 0).reduce((acc, curr) => acc + curr, 0) *
      -1;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <span>Income</span>
        <span className={styles.income}>
          ${Math.abs(totalIncome).toFixed(2)}
        </span>
      </div>
      <div className={styles.box}>
        <span>Expense</span>
        <span className={styles.expense}>
          ${Math.abs(totalExpense).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default IncomeAndExpenses;
