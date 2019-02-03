import React from 'react';
import PropTypes from 'prop-types';
import PropertyImage from '../PropertyImage/PropertyImage';
import PropertySummary from '../PropertySummary/PropertySummary';
import styles from './PropertyTeaser.module.css';

const PropertyTeaser = ({item, openPortal}) => (
  <div className={styles.item} onClick={openPortal}>
    <PropertyImage
      imgLink={item.hero}
      imgAlt={item.title}
      imgWidth={600}
      labelText={item.price}
      labelClass={styles.img_label}
    />
    <div className={styles.card_info}>
      <PropertySummary item={item} addressClass={styles.address} />
    </div>
  </div>
)

PropertyTeaser.propTypes = {
  item: PropTypes.object.isRequired,
  openPortal: PropTypes.func.isRequired
}

export default PropertyTeaser;
