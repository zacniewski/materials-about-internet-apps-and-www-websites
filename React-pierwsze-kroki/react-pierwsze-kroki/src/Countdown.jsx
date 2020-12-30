import React from "react";

import "./Countdown.css"

import PropTypes from "prop-types";

// 'props' jako argument funkcji
const Countdown = props => (
  <div className="countdown">
    <strong>{props.name}</strong> - {props.hour}:{props.minute}
  </div>
);

// warningi widoczne w konsoli przeglądarki
Countdown.propTypes = {
  name: PropTypes.string,
  hour: PropTypes.string,
  minute: PropTypes.string
  };
export default Countdown;