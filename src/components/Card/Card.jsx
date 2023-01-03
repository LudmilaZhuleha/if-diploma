import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './Card.module.css';
import {addToOrders, addToWaitingList, returnFromOrders} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {CARD_BTN} from "../../../constants";
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Card = ({card, buttonType}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart =(item)=>{
    if (item.status === 'available')
      dispatch(addToOrders(item));
    if (item.status === 'taken')
      dispatch(addToWaitingList(item));
  }
  // const addToCartWaitingList = (item)=>{
  //   dispatch(addToWaitingList(item));
  // }
  const orders = useSelector(state=>state.ordersReducer.orders);

  const deleteBookFromOrders =(id)=>{
    return orders.filter((item)=> {
      return id !== item.id});
  }
  const returnBookFromOrders =(id)=>{
    dispatch(returnFromOrders(deleteBookFromOrders(id)));
  }

  const checkBookStatus =()=>{
    alert('This book will be available from 22/12/2022');
    navigate("/orders");
  }
  const renderButton = (buttonType)=>{
    switch(buttonType) {
      case CARD_BTN.ORDER:
        return (<Button clickHandler={()=>addToCart(card)} style="small">Order</Button>);
      case CARD_BTN.BACK:
        // eslint-disable-next-line react/prop-types
        return (<Button clickHandler={()=>returnBookFromOrders(card.id)} style="small">Return</Button>);
      case CARD_BTN.CHECK_STATUS:
        return (<Button clickHandler={()=>checkBookStatus()} style="small">Check status</Button>);
      default:
        return null;
    }
  }
  return (
    <div className={styles.container_horizontal}>
      {/* eslint-disable-next-line react/prop-types */}
      <img width="122" height="185" src={card.imageUrl} alt={card.name} />
      <div className={styles.wrap_horizontal}>
        {/* eslint-disable-next-line react/prop-types */}
        {card.status === 'available' ? (<Button style="outline_available">{card.status}</Button>) : (<Button style="outline_taken">{card.status}</Button>)}
        {/* eslint-disable-next-line react/prop-types */}
        <h3 className={styles.card_title_bold}>{card.name}</h3>
        {/* eslint-disable-next-line react/prop-types */}
        <p className={styles.card_title}>by {card.author}</p>
        <div className={styles.starwrap}>
          {
            [...Array(5)].map((star, i)=>{
              // eslint-disable-next-line react/prop-types
              if(i < card.rating) return (<Icon id="star" type="star-active" key={i} />);
               else return (<Icon id="star" type="star" key={i} />);
              })
          }
        </div>
        {renderButton(buttonType)}
      </div>
    </div>
  );
};
export default Card;
