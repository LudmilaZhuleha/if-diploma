import React from 'react';
import styles from './Icon.module.css';

// eslint-disable-next-line react/prop-types
const Icon = ({ id, type, ...props }) => {
  return (
    <svg className={styles[type]} {...props}>
      <use xlinkHref={`./images/sprite.svg#${id}`} />
    </svg>
  );
};
export default Icon;
