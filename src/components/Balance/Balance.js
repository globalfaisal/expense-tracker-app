import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalContext';

import styles from './Balance.module.scss';

const Balance = ({ title }) => {
  const { transactions } = useContext(GlobalContext);

  let totalBalance = '';
  if (transactions) {
    const amounts = transactions.map(t => t.amount);
    totalBalance = amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  }

  return (
    <div className={styles.balance}>
      <h4>{title || 'Balance'}</h4>
      <h1>${totalBalance || '0'}</h1>
    </div>
  );
};

export default Balance;
