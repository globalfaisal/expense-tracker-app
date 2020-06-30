import React from 'react';

import Balance from '../Balance/Balance';
import IncomeAndExpenses from '../IncomeAndExpenses/IncomeAndExpenses';

import walletImageUrl from '../../images/wallet.svg';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <img src={walletImageUrl} alt="Wallet" className={styles.wallet} />
    <div className={styles.content}>
      <Balance title="Current Balance" />
      <IncomeAndExpenses />
    </div>
  </header>
);

export default Header;
