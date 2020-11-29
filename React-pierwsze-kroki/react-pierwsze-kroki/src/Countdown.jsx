import React from "react";

import PropTypes from "prop-types";

// 'props' jako argument funkcji
const Countdown = props => (
    <div className="countdown">
          <b>{props.name}</b> - {props.time}
    </div>
);

// warningi widoczne w konsoli przeglądarki
Countdown.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string
  };
export default Countdown;