import React from 'react';
import PropTypes from 'prop-types';

const IconClose = ({width, height, fill}) => (
  <svg width={`${width}px`} height={`${height}px`} x="0px" y="0px"
  	 viewBox="0 0 47.971 47.971" style={{enableBackground: 'new 0 0 47.971 47.971'}}>
    <g fill={fill}>
    	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
    		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
    		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
    		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
    </g>
  </svg>
)

IconClose.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

IconClose.defaultProps = {
  width: 16,
  height: 16,
  fill: '#022640'
}

export default IconClose;
