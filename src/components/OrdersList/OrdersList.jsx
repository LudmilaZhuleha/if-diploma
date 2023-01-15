import React from 'react';
import styles from './OrdersList.module.css';
import Card from '../Card/Card';
import { CARD_BTN } from '../../../constants';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const OrdersList = ({ orders }) => {
  return (
    <div className={styles.cards}>
      {/* eslint-disable-next-line react/prop-types */}
      {orders.length > 0
        // eslint-disable-next-line react/prop-types
        ? orders.map((item) => {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <Card buttonType={CARD_BTN.BACK} card={item} />
              </Link>
            );
          })
        : null}
    </div>
  );
};
export default OrdersList;
