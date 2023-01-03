import React from 'react';
import styles from './Input.module.css';

// eslint-disable-next-line react/prop-types
const Input = ({ style, ...props }) => {
  return <input className={styles[style]} {...props} />;
};
export default Input;
