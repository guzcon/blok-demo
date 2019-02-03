import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertySummary.module.css';

// this component doesn't have any outer padding / margin / background on purpose, to keep it versatile in different layout
const PropertySummary = ({item, addressClass}) => (
  <div>
    <h3 className={addressClass ? `${addressClass} ${styles.address}` : styles.address}>{item.street_address}</h3>
    <p className={styles.city}>{item.locality}, {item.city}</p>
    <div className={styles.info}><span className={styles.area}>{item.area}</span> {item.rooms > 1 ? `${item.rooms} huonetta` : `${item.rooms} huone`}</div>
  </div>
)

PropertySummary.propTypes = {
  item: PropTypes.object.isRequired,
  addressClass: PropTypes.string
}

PropertySummary.defaultProps = {
  addressClass: ''
}

export default PropertySummary;
