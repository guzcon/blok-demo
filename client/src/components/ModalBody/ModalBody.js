import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalBody.module.css';

const ModalBody = ({children}) => (
  <div className={styles.modal_body}>
    {children}
  </div>
)

ModalBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalBody;
