import React from 'react';
import styles from '../OrdersList/OrdersList.module.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { CARD_BTN } from '../../../constants';

// eslint-disable-next-line react/prop-types
const WaitingList = ({ waitings }) => {
  return (
    <div className={styles.cards}>
      {/* eslint-disable-next-line react/prop-types */}
      {waitings.length > 0
        // eslint-disable-next-line react/prop-types
        ? waitings.map((item) => {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <Card card={item} buttonType={CARD_BTN.CHECK_STATUS} />
              </Link>
            );
          })
        : null}
    </div>
  );
};
export default WaitingList;
