import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './BooksList.module.css';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {fetchedBooks} from "../../store/actions";
import {CARD_BTN} from "../../../constants";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const saveAllBooks =(books)=>{
    dispatch(fetchedBooks(books));
  }
  const random =(min,max)=>{
    const rand = min+Math.random()*(max+1-min);
    return Math.floor(rand);
  }
  useEffect(() => {
    const fetchBooks = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const dataNew = data.forEach((item)=>{
        const k= random(0,1);
        const a = random(1,5);
        if(k===0) item.status = 'available';
        if(k===1) item.status = 'taken';
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
      {books.length > 0 ? (
        books.map((book) => {
          return (
            <Link key={book.id} to={`/${book.id}`}>
              <Card buttonType={CARD_BTN.ORDER} card={book} key={book.id}/>
            </Link>
          );
        })
      ) : (
        <p>not found</p>
      )}
    </div>
  );
};
export default BooksList;
