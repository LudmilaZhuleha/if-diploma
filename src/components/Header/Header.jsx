import React from 'react';
import styles from '../../styles/general.module.css';

// eslint-disable-next-line react/prop-types
const Header = ({ logo, searchbar, menu }) => {
  return (
    <div className={styles.flex}>
      <div>{logo}</div>
      <div>{searchbar}</div>
      <div>{menu}</div>
    </div>
  );
};
export default Header;
