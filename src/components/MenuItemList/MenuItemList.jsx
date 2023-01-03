import React from 'react';
import styles from './MenuItemList.module.css';
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuItemList = ({accountName}) => {
  const navigate = useNavigate();
  const logOut =()=>{
    navigate("/");
  }
  const changeSettings =()=>{
    navigate("settings");
  }
  return (
    <ul className={styles.flex}>
      <li className={styles.menu_item_bold}>{accountName}</li>
      <li className={styles.menu_item} onClick={changeSettings}>Settings</li>
      <li className={styles.menu_item}>My orders</li>
      <li className={styles.menu_item_red} onClick={logOut}>Log Out</li>
    </ul>
  );
};
export default MenuItemList;
