import React from 'react';
import styles from './Section.module.css';
// eslint-disable-next-line react/prop-types
const Section = ({ type, children, ...props }) => {
  return (
    <section className={styles[type]} {...props}>
      {children}
    </section>
  );
};
export default Section;
