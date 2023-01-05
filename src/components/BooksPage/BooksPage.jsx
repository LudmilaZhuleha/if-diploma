import React, {useState} from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import BooksList from '../BooksList/BooksList';
import styles from './BooksPage.module.css';
import Icon from '../Icon/Icon';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import MenuItemList from "../MenuItemList/MenuItemList";
import {useSelector} from "react-redux";
import AvailableBooks from "../AvailableBooks/AvailableBooks";
import {useNavigate} from "react-router-dom";
// import {sanitize} from "../../helpers/sanitize";


const BooksPage = () => {

  const[settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen =()=>{
    setSettingsOpen(!settingsOpen);
  }
  const[availableOpen, setAvailableOpen] = useState(false);
  const handleAvailable =()=>{
    setAvailableOpen(true);
  }
  const navigate = useNavigate();
  const goToOrders =()=>{
    navigate('/orders');
  }
  const name = useSelector(state => state.setUserReducer.username);
  return (
    <>
      <div className={styles.container}>
        <Header
          logo={<Icon id="logo" type="logo" />}
          searchbar={<SearchBar onclick={handleAvailable}/>}
          menu={
            <Menu
              books={<MenuItem type="active">All Books</MenuItem>}
              orders={<MenuItem type="item-account" onClick={goToOrders}>Orders</MenuItem>}
              account={<Icon id="account-logo" type="account-logo" />}
              list={<Icon id="open-arrow" type="open-arrow" onClick={handleSettingsOpen} />}
            />}
        />
        {settingsOpen && (<MenuItemList accountName ={name}/>)}
        <MainContent style="content">
          <Section type="section-books">
            {availableOpen && (<AvailableBooks />)}
          </Section>
          <Section type="section-books">
            <h2>All Books</h2>
            <BooksList />
          </Section>
          {/*<Button style="primary">Show more</Button>*/}
        </MainContent>
      </div>
      <div style={{ backgroundColor: '#d3ebf9', margin: '' }}>
        <Footer />
      </div>
    </>
  );
};
export default BooksPage;
