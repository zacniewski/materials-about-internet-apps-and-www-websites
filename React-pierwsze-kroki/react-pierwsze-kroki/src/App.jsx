import React, {Component} from "react";

import "./App.css"
import Countdown from './Countdown' 
import EditEvent from "./EditEvent";

class App extends Component {
  constructor() {
    super();
    // tu umieszczamy dane, które wcześniej były ustalone na sztywno
    this.state = {
      events: [
        { id: 0, name: "śniadanie", time: "07:00" },
        { id: 1, name: "obiad", time: "15:00" },
        { id: 2, name: "kolacja", time: "19:30" }
      ]
    };

    this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  handleEditEvent(val) {
    this.setState({ editedEvents: val });
  }

  render() {
    const my_events = this.state.events.map(el => {
      return <Countdown key={el.id} name={el.name} time={el.time} />
    })
    return (
      <div className="app"> 
        {my_events} 
        <EditEvent 
          onInputChange={val => this.handleEditEvent(val)} 
          onSave={() => alert("Klik działa bez zarzutu!")}
        />
      </div>
    );
  }
}

export default App;