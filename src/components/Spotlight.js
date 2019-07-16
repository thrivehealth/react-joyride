import React from 'react';
import PropTypes from 'prop-types';

const JoyrideSpotlight = ({ onClickSpotlight, styles }) => (
  <div
    key="JoyrideSpotlight"
    className="react-joyride__spotlight"
    style={styles}
    onClick={onClickSpotlight}
  />
);

JoyrideSpotlight.propTypes = {
  onClickSpotlight: PropTypes.func,
  styles: PropTypes.object.isRequired,
};

export default JoyrideSpotlight;
