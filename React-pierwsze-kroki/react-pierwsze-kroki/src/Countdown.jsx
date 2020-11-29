
import React from "react";

// 'props' jako argument funkcji
const Countdown = (props) => (
    <div className="countdown">
          <b>{props.name}</b> - {props.time}
    </div>
);

export default Countdown;