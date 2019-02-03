import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import styles from './NotFound.module.css';

const NotFound = (props) => (
  <React.Fragment>
    <Header title="Oops... not the right place!" />
    <p className={styles.error_container}>Let's go back <Link to="/">home</Link>. </p>
  </React.Fragment>
)

export default NotFound;
