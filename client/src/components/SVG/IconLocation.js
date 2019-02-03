import React from 'react';
import PropTypes from 'prop-types';

const IconLocation = ({width, height, fill}) => (
  <svg width={`${width}px`} height={`${height}px`} x="0px" y="0px"
  	 viewBox="0 0 60 60" style={{enableBackground: 'new 0 0 60 60'}}>
    <g fill={fill}>
    	<path d="M42.117,43.007c-0.55-0.067-1.046,0.327-1.11,0.876s0.328,1.046,0.876,1.11C52.399,46.231,58,49.567,58,51.5
    		c0,2.714-10.652,6.5-28,6.5S2,54.214,2,51.5c0-1.933,5.601-5.269,16.117-6.507c0.548-0.064,0.94-0.562,0.876-1.11
    		c-0.065-0.549-0.561-0.945-1.11-0.876C7.354,44.247,0,47.739,0,51.5C0,55.724,10.305,60,30,60s30-4.276,30-8.5
    		C60,47.739,52.646,44.247,42.117,43.007z"/>
    	<path d="M29.823,54.757L45.164,32.6c5.754-7.671,4.922-20.28-1.781-26.982C39.761,1.995,34.945,0,29.823,0
    		s-9.938,1.995-13.56,5.617c-6.703,6.702-7.535,19.311-1.804,26.952L29.823,54.757z M30,12c3.86,0,7,3.141,7,7s-3.14,7-7,7
    		s-7-3.141-7-7S26.14,12,30,12z"/>
    </g>
  </svg>

)

IconLocation.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

IconLocation.defaultProps = {
  width: 25,
  height: 25,
  fill: '#022640'
}

export default IconLocation;
