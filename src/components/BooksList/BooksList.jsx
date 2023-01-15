import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './BooksList.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchedBooks } from '../../store/actions';
import { CARD_BTN } from '../../../constants';
import Button from '../Button/Button';
import {random} from "../../helpers/functions";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const currentPage = 1;
  const [booksPerPage, setBooksPerPage] = useState(4);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const showMore = () => {
    if (booksPerPage) setBooksPerPage((prev) => prev + 4);
  };

  const dispatch = useDispatch();
  const saveAllBooks = (books) => {
    dispatch(fetchedBooks(books));
  };

  useEffect(() => {
    const fetchBooks = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const dataNew = data.forEach((item) => {
        const k = random(0, 1);
        const a = random(1, 5);
        if (k === 0) item.status = 'available';
        if (k === 1) item.status = 'taken';
        item.rating = a;
      });
      console.log(dataNew);
      setBooks(data);
      saveAllBooks(data);
    };
    fetchBooks('https://if-fox-library-api.onrender.com/api/library');
  }, []);

  return (
    <div className={styles.cards}>
      {currentBooks.length > 0 ? (
        currentBooks.map((book) => {
          return (
            <Link key={book.id} to={`/${book.id}`}>
              <Card buttonType={CARD_BTN.ORDER} card={book} key={book.id} />
            </Link>
          );
        })
      ) : (
        <p className={styles.loading}>...LOADING</p>
      )}
      <Button clickHandler={showMore} style="primary">
        Show more
      </Button>
    </div>
  );
};
export default BooksList;
