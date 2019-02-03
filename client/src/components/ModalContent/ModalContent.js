import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalContent.module.css';

const ModalContent = ({children}) => (
  <div className={styles.modal_content}>
    {children}
  </div>
)

ModalContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalContent;
