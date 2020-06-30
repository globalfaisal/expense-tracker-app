import React from 'react';

import styles from './Balance.module.scss';

const Balance = ({ title }) => (
  <div className={styles.balance}>
    <h4>{title || 'Balance'}</h4>
    <h1>$389</h1>
  </div>
);

export default Balance;
