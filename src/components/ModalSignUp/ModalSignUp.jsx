import React, {useState} from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './ModalSignUp.module.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {saveUserBirthday, saveUserEmail, saveUserName, saveUserPassword} from "../../store/actions";

const ModalSignUp = () => {
  const[userName, setUserName]= useState('');
  const[birthday, setBirthday]= useState('');
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignUp =()=> {
    dispatch(saveUserName(userName));
    dispatch(saveUserBirthday(birthday));
    dispatch(saveUserEmail(email));
    dispatch(saveUserPassword(password));
    navigate("/");
  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.modal}>
        <Button style="close_signup">
          <Icon id="close-btn" type="close" />
        </Button>
        <h2>Welcome to Fox Library</h2>
        <label>Username</label>
        <Input style="modal-field" onChange={(e)=>{setUserName(e.target.value)}} value={userName}/>
        <label>Your birthday</label>
        <Input style="modal-field" onChange={(e)=>{setBirthday(e.target.value)}} value={birthday}/>
        <label>Email</label>
        <Input style="modal-field" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
        <label>Password</label>
        <Input style="modal-field-last" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        <Button style="primary-lg" onClick={userSignUp}>Sign Up</Button>
      </form>
    </div>
  );
};
export default ModalSignUp;
