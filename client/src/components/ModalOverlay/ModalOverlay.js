import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

const ModalOverlay = ({closePortal}) => (
  <div className={styles.modal_overlay} onClick={closePortal}/>
)

ModalOverlay.propTypes = {
  closePortal: PropTypes.func.isRequired
}

export default ModalOverlay;
