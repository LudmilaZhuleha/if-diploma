import React from 'react';
import {useSelector} from "react-redux";
import styles from './AvailableBooks.module.css';
import {Link} from "react-router-dom";
import Card from "../Card/Card";

const AvailableBooks = () => {
  const filteredBooks = useSelector(state => state.fetchedBooksReducer.filtered);
  return (
    <div className ={styles.cards}>
      {
        filteredBooks.map((item)=>{
          return (
            <Link key={item.id} to={`/books/$item.id}`}>
              <Card imageUrl={item.imageUrl} name={item.name} author={item.author} key={item.id} />
            </Link>
          )
        })}
    </div>
  );
};
export default AvailableBooks;