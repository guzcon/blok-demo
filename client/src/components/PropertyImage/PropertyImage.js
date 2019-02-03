import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertyImage.module.css';

// this component can be used with or without the label, with assigned width 
// Label class is use if parent component needs access for styling
const PropertyImage = ({imgLink, imgAlt, imgWidth, labelText, labelClass}) => (
  <div className={styles.image_wrap}>
    <img className={styles.image} src={`${imgLink}?w=${imgWidth}`} alt={imgAlt} />
    {labelText &&
      <span className={labelClass ? `${labelClass} ${styles.label}` : styles.label}>{labelText}</span>
    }
  </div>
)

PropertyImage.propTypes = {
  imgLink: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgWidth: PropTypes.number,
  labelText: PropTypes.string,
  labelClass: PropTypes.string
}

PropertyImage.defaultProps = {
  imgWidth: 600,
  labelText: '',
  labelClass: ''
}

export default PropertyImage;
