import React from 'react';
import styles from '../OrdersList/OrdersList.module.css';
import Card from '../Card/Card';
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
                <Card card={item} buttonType={CARD_BTN.CHECK_STATUS} key={item.id}/>
            );
          })
        : null}
    </div>
  );
};
export default WaitingList;
