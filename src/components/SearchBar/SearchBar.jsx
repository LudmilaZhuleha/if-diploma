import React, { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filteredBooks } from '../../store/actions';
import {getFilteredData} from "../../helpers/functions";
// eslint-disable-next-line react/prop-types
const SearchBar = ({ onclick }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.fetchedBooksReducer.available);

  const saveFilteredBooks = (books) => {
    dispatch(filteredBooks(books));
  };
  useEffect(() => {
    const filteredList = getFilteredData(allBooks, value);
    saveFilteredBooks(filteredList);
  }, [value]);

  const search = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.flex}>
      <Icon id="search" type="search" />
      <Input
        style="search-field"
        placeholder="Search by author, title, name"
        onChange={search}
        onClick={onclick}
        value={value}
      />
    </div>
  );
};
export default SearchBar;
