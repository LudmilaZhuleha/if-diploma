import React from 'react';
import styles from './OrdersList.module.css';
import Card from '../Card/Card';
import { CARD_BTN } from '../../../constants';
// eslint-disable-next-line react/prop-types
const OrdersList = ({ orders }) => {
  return (
    <div className={styles.cards}>
      {/* eslint-disable-next-line react/prop-types */}
      {orders.length > 0
        // eslint-disable-next-line react/prop-types
        ? orders.map((item) => {
            return (
              <Card buttonType={CARD_BTN.BACK} card={item} key={item.id}/>
            );
          })
        : null}
    </div>
  );
};
export default OrdersList;
