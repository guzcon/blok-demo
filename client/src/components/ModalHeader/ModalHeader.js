import React from 'react';
import PropTypes from 'prop-types';
import IconClose from '../SVG/IconClose';
import styles from './ModalHeader.module.css';

const ModalHeader = ({title, closePortal}) => (
  <div className={styles.modal_header}>
    <h2 className={styles.modal_title}>{title}</h2>
    <button type="button" className={styles.close} onClick={closePortal}><IconClose /></button>
  </div>
)

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closePortal: PropTypes.func.isRequired
}

export default ModalHeader;
