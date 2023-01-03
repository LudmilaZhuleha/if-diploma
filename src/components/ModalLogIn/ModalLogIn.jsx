import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './ModalLogIn.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../store/actions";

// eslint-disable-next-line react/prop-types
const ModalLogIn = () => {
  const[userName, setUserName] = useState('User name');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(state => state.setUserReducer.username);
  const pass = useSelector(state => state.setUserReducer.password);

  const authorized =()=>{
    if(userName === name && password === pass) {
      dispatch(logIn(true));
      navigate("/books");
    }
    else {
      navigate("/");
      alert("Please, Sign up first!");
    }
  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.modal}>
        <Button style="close_login">
          <Icon id="close-btn" type="close" />
        </Button>
        <h2>Log in to Fox Library</h2>
        <label>Username:</label>
        <Input type="text" style="modal-field" onChange={(e)=>{setUserName(e.target.value)}} value={userName}/>
        <label>Password:</label>
        <Input type="password" style="modal-field-last" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        <Button style="primary-lg" onClick={authorized}>Log in</Button>
      </form>
    </div>
  );
};
export default ModalLogIn;
