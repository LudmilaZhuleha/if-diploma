import React from 'react';
import List from '../List/List';
import { about, help } from '../../../constants';
import Socials from '../Socials/Socials';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul>
        <h3>About Fox Library</h3>
        <List list={about} />
      </ul>
      <ul>
        <h3>Help</h3>
        <List list={help} />
      </ul>
      <ul>
        <h3>My account</h3>
        <li>Edit profile</li>
        <li>My orders</li>
      </ul>
      <ul>
        <h3>Stay connected</h3>
        <Socials />
      </ul>
    </div>
  );
};
export default Footer;
