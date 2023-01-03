import React, {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";
import Header from "../Header/Header";
import MenuItemList from "../MenuItemList/MenuItemList";
import {useDispatch, useSelector} from "react-redux";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./SettingsPage.module.css";
import {saveUserPassword} from "../../store/actions";
import {useNavigate} from "react-router-dom";
import Icon from "../Icon/Icon";

const SettingsPage = () => {
  const[settingsOpen, setSettingsOpen] = useState(false);
  const[newPass, setNewPass] = useState('');

  const handleSettingsOpen =()=>{
    setSettingsOpen(!settingsOpen);
  }
  const name = useSelector(state => state.setUserReducer.username);
  const birthday = useSelector(state => state.setUserReducer.birthday);
  const pass = useSelector(state => state.setUserReducer.password);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changePass =()=>{
    if(newPass.length>0){
      dispatch(saveUserPassword(newPass));
      navigate("/books");
    } else {
      navigate("/books");
    }
  }
  const goToOrders =()=>{
    navigate('/orders');
  }
  const goToAllBooks =()=>{
    navigate('/books');
  }

  return (
    <>
      <div className={styles.container}>
        <Header
          logo={<Icon id="logo" type="logo" />}
          searchbar={<SearchBar />}
          menu={
            <Menu
              books={<MenuItem type="active" onClick={goToAllBooks}>All Books</MenuItem>}
              orders={<MenuItem type="item-account" onClick={goToOrders}>Orders</MenuItem>}
              account={<Icon id="account-logo" type="account-logo" />}
              list={<Icon id="open-arrow" type="open-arrow" onClick={handleSettingsOpen} />}
            />}
        />
        {settingsOpen && (<MenuItemList accountName ={name}/>)}
        <MainContent style="content">
          <h2 className={styles.title}>Settings</h2>
          <Icon id="user-foto" type="settings_icon"/>
          <Button style="small">Change photo</Button>
            <form action="/" className={styles.wrapper}>
              <label htmlFor="/">Username:</label>
              <Input style="modal-field" value={name} />
              <label htmlFor="/">Birthday:</label>
              <Input style="modal-field" value={birthday}/>
              <label htmlFor="/">Password:</label>
              <Input style="modal-field" value={pass}/>
              <label htmlFor="/">New Password:</label>
              <Input style="modal-field" value={newPass} onChange={(e)=>{setNewPass(e.target.value)}}/>
              <Button onClick={changePass} style="settings_button">Save</Button>
            </form>
        </MainContent>
      </div>
      <div style={{ backgroundColor: '#d3ebf9' }}>
        <Footer />
      </div>
    </>
  );
};
export default SettingsPage;