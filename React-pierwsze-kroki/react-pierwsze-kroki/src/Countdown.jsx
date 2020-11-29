import React from "react";

import PropTypes from "prop-types";

// 'props' jako argument funkcji
const Countdown = props => (
    <div className="countdown">
          <b>{props.name}</b> - {props.time}
    </div>
);

Countdown.propTypes = {
    name: PropTypes.number,
    time: PropTypes.string
  };
export default Countdown;