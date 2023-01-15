import React from 'react';
import styles from './OrdersPage.module.css';
import Header from '../Header/Header';
import Icon from '../Icon/Icon';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import MenuItemList from '../MenuItemList/MenuItemList';
import MainContent from '../MainContent/MainContent';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrdersList from '../OrdersList/OrdersList';
import WaitingList from '../WaitingList/WaitingList';

const OrdersPage = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => {
    setSettingsOpen(!settingsOpen);
  };
  const navigate = useNavigate();
  const goToAllBooks = () => {
    navigate('/books');
  };
  const name = useSelector((state) => state.setUserReducer.username);
  const orders = useSelector((state) => state.ordersReducer.orders);
  const waitings = useSelector((state) => state.ordersReducer.waitingList);

  return (
    <div>
      <div className={styles.container}>
        <Header
          logo={<Icon id="logo" type="logo" />}
          searchbar={<SearchBar />}
          menu={
            <Menu
              books={
                <MenuItem type="item-account" onClick={goToAllBooks}>
                  All Books
                </MenuItem>
              }
              orders={<MenuItem type="active">Orders</MenuItem>}
              account={<Icon id="account-logo" type="account-logo" />}
              list={<Icon id="open-arrow" type="open-arrow" onClick={handleSettingsOpen} />}
            />
          }
        />
        {settingsOpen && <MenuItemList accountName={name} />}
        <MainContent style="content">
          <Section type="section-orders">
            <h2 className={styles.orders_title}>Waiting for</h2>
            {waitings.length > 0 ? (
              <WaitingList waitings={waitings} />
            ) : (
              <p className={styles.orders_text}>Oops! You are not waiting for any book </p>
            )}
          </Section>
          <Section type="section-orders">
            <h2 className={styles.orders_title}>List of your Books</h2>
            {orders.length > 0 ? (
              <OrdersList orders={orders} />
            ) : (
              <p className={styles.orders_text}>Oops! You are not having any books </p>
            )}
          </Section>
        </MainContent>
      </div>
      <div style={{ backgroundColor: '#d3ebf9' }}>
        <Footer />
      </div>
    </div>
  );
};
export default OrdersPage;
