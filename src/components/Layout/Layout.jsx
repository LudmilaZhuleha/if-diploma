import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Icon from '../Icon/Icon';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import Footer from '../Footer/Footer';
import styles from '../../styles/general.module.css';

const Layout = () => {
  const navigate = useNavigate();
  const goToAllBooks = () => {
    navigate('/books');
  };
  const goToOrders = () => {
    navigate('/orders');
  };

  return (
    <>
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
              orders={
                <MenuItem type="active" onClick={goToOrders}>
                  Orders
                </MenuItem>
              }
              account={<Icon id="account-logo" type="account-logo" />}
              list={<Icon id="open-arrow" type="open-arrow" />}
            />
          }
        />
        <Outlet />
      </div>
      <div style={{ backgroundColor: '#d3ebf9' }}>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
