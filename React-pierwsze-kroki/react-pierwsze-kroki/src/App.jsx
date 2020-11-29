import React, {Component} from "react";

import Countdown from './Countdown' 

class App extends Component {
  render() {
    return (
      <div>
        <Countdown name ="śniadanie" time="7:00" />
        <Countdown name ="obiad" time="15:00" />
      </div>
    );
  }
}

export default App;