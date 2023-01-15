import React from 'react';
import styles from './MenuItem.module.css';
// eslint-disable-next-line react/prop-types
const MenuItem = ({ type, children, ...props }) => {
  return (
    <div className={styles[type]} {...props}>
      {children}
    </div>
  );
};
export default MenuItem;
