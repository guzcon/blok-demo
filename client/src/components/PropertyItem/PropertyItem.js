import React from 'react';
import styles from './PropertyItem.module.css';

const PropertyItem = ({item}) => (
  <div className={styles.item}>
    <img className={styles.item_image} src={`${item.hero}?w=600`} alt={item.title} />
    <h3>{item.street_address}</h3>
    <div>Rooms: {item.room}</div>
    <div>Price: {item.price}</div>
  </div>
)

export default PropertyItem;
