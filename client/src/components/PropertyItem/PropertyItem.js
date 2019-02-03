import React from 'react';
import styles from './PropertyItem.module.css';

const PropertyItem = ({item}) => (
  <div className={styles.item}>
    <a className={styles.item_link} href="#">
      <div className={styles.image_wrap}>
        <img className={styles.image} src={`${item.hero}?w=600`} alt={item.title} />
        <span className={styles.price}>{item.price}</span>
      </div>
      <div className={styles.text}>
        <h3 className={styles.address}>{item.street_address}</h3>
        <p className={styles.city}>{item.locality}, {item.city}</p>
        <div className={styles.info}><span className={styles.area}>{item.area}</span> {item.rooms} rooms</div>
      </div>
    </a>
  </div>
)

export default PropertyItem;
