import React from 'react';
import styles from './MainContent.module.css';
// eslint-disable-next-line react/prop-types
const MainContent = ({ style, children }) => {
  return <div className={styles[style]}>{children}</div>;
};
export default MainContent;
