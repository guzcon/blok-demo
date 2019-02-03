import React from 'react';
import PropTypes from 'prop-types';
import { PortalWithState } from 'react-portal';
import PropertyTeaser from '../../components/PropertyTeaser/PropertyTeaser';
import PropertyModal from '../../components/PropertyModal/PropertyModal';

const PropertyItem = ({item}) => (
  <PortalWithState closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => (
      <React.Fragment>
        <PropertyTeaser item={item} openPortal={openPortal} />
        {portal(
          <PropertyModal item={item} closePortal={closePortal}></PropertyModal>
        )}
      </React.Fragment>
    )}
  </PortalWithState>
)

PropertyItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default PropertyItem;
