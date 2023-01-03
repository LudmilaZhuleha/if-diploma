import React from 'react';
import styles from './Menu.module.css';

// eslint-disable-next-line react/prop-types
const Menu = ({ login, signup, books, orders, account, list }) => {
  return (
    <ul className={styles.flex}>
      <li>{login}</li>
      <li>{signup}</li>
      <li>{books}</li>
      <li>{orders}</li>
      <li>{account}</li>
      <li className={styles.last_child}>{list}</li>
    </ul>
  );
};
export default Menu;
