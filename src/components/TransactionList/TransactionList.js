import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import TransactionItem from '../TransactionItem/TransactionItem';

import styles from './TransactionList.module.scss';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  if (!transactions || transactions.length === 0) return null;
  return (
    <div className={styles.transactionList}>
      <h4 style={{ marginBottom: '22px' }}>Transaction History</h4>

      <ul>
        {transactions.map(item => (
          <TransactionItem
            key={item.id}
            transaction={item}
            onDelete={id => deleteTransaction(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
