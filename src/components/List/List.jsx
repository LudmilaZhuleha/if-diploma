import React from 'react';
import styles from './List.module.css';

// eslint-disable-next-line react/prop-types
const List = ({ list, type }) => {
  // eslint-disable-next-line react/prop-types
  const listItems = list.map((item, i) => (
    <li style={styles[type]} key={i}>
      {item}
    </li>
  ));
  return <>{listItems}</>;
};
export default List;
