import React from 'react';
import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ style, clickHandler, children, ...props }) => {
  return (
    <button className={styles[style]} onClick={clickHandler} {...props}>
      {children}
    </button>
  );
};
export default Button;
