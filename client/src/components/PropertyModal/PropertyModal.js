import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import ModalContent from '../ModalContent/ModalContent';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import PropertyImage from '../PropertyImage/PropertyImage';
import PropertySummary from '../PropertySummary/PropertySummary';
import IconLocation from '../SVG/IconLocation';
import styles from './PropertyModal.module.css';

// though this is the only place ModalOverlay, ModalContent, ModalHeader and ModalBody be used
// these four components are refactored to form solid structure for a modal implementation, if needed in the future
const PropertyModal = ({item, closePortal}) => (
  <React.Fragment>
    <ModalOverlay closePortal={closePortal}/>

    <ModalContent>
      <ModalHeader title={item.title} closePortal={closePortal}/>
      <ModalBody>
        <PropertyImage
          imgLink={item.hero}
          imgAlt={item.title}
          imgWidth={600}
          labelText={item.new_construction ? 'New construction' : ''}
        />

        <div className={styles.summary}>
          <PropertySummary item={item} />
          <div className={styles.price}>{item.price}</div>
        </div>

        <p>{item.layout}</p>

        <a className={styles.map_link} href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`}
          target="_blank" rel="noopener noreferrer">
          <IconLocation />
          <span className={styles.map_link_label}>Katso kartalla</span>
        </a>
      </ModalBody>
    </ModalContent>
  </React.Fragment>
);

PropertyModal.propTypes = {
  item: PropTypes.object.isRequired,
  closePortal: PropTypes.func.isRequired
}

export default PropertyModal;
