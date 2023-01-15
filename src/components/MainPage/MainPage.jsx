import React, { useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import mainBgImage from '../../assets/main-bg-image.png';
import styles from './MainPage.module.css';
import Section from '../Section/Section';
import Button from '../Button/Button';
import ModalSignUp from '../ModalSignUp/ModalSignUp';
import ModalLogIn from '../ModalLogIn/ModalLogIn';
import Icon from '../Icon/Icon';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';

// eslint-disable-next-line react/prop-types
const MainPage = () => {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleIsLogIn = () => {
    setIsLogInOpen(true);
  };
  const handleIsSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <Header
          logo={<Icon id="logo" type="logo" />}
          searchbar={
            <SearchBar
              onclick={() => {
                alert('Please, log in first!');
              }}
            />
          }
          menu={
            <Menu
              login={
                <MenuItem type="item-login" onClick={handleIsLogIn}>
                  Log in
                </MenuItem>
              }
              signup={
                <MenuItem type="item-login" onClick={handleIsSignUp}>
                  Sign Up
                </MenuItem>
              }
            />
          }
        />
        <MainContent>
          <Section type="section-main" style={{ backgroundImage: `url(${mainBgImage})` }}>
            <h1>Build your library</h1>
            <p>Over 400.000 books from fiction to the business literature</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Button style="primary" onClick={handleIsSignUp}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's start
            </Button>
          </Section>
        </MainContent>
      </div>
      <div style={{ backgroundColor: '#d3ebf9' }}>
        <Footer />
      </div>
      {isSignUpOpen && <ModalSignUp />}
      {isLogInOpen && <ModalLogIn />}
    </>
  );
};
export default MainPage;
