import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AvailableBooks.module.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const AvailableBooks = () => {
  const filteredBooks = useSelector((state) => state.fetchedBooksReducer.filtered);
  return (
    <div className={styles.cards}>
      {filteredBooks.length < 12
        ? filteredBooks.map((item) => {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <Card card={item} key={item.id} />
              </Link>
            );
          })
        : null}
    </div>
  );
};
export default AvailableBooks;
