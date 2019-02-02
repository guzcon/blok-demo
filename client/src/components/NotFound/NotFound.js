import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = (props) => (
  <div>
    <p className={styles.error_container}>Please try a different URL or come back <Link to="/">Home</Link>. </p>
  </div>
)

export default NotFound;
