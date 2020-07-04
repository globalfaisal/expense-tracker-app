import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from '../../images/icon-delete.svg';
import styles from './TransactionItem.module.scss';

const TransactionItem = ({ transaction, onDelete }) => (
  <li
    className={`${styles.transactionItem} ${
      transaction.amount < 0 ? styles.exp : styles.inc
    }`}
  >
    <div className={styles.text}>{transaction.text}</div>
    <div className={styles.amount}>
      $ {Math.abs(transaction.amount).toFixed(2)}
    </div>

    <DeleteIcon
      role="presentation"
      className={styles.btnDelete}
      onClick={() => onDelete(transaction.id)}
    />
  </li>
);

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default TransactionItem;
