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
        { id: 0, name: "śniadanie", hour: "07", minute: "00" },
        { id: 1, name: "obiad", hour: "15", minute: "00" },
        { id: 2, name: "kolacja", hour: "19", minute: "00" }
      ],
      editedEvent: {
        id: 3,
        name: "",
        hour: "",
        minute: ""
      }
    };

    this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  handleEditEvent(val) {
    // this.setState({ editedEvents: val });
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvent, val)
      };
    });
  }

  render() {
    const my_events = this.state.events.map(el => {
      return (
        <Countdown
          key={el.id}
          id={el.id}
          name={el.name}
          hour={el.hour}
          minute={el.minute}
          onRemove={id => this.handleRemoveEvent(id)}
          onEditInit={id => this.handleEditInit(id)}
        />
      );
    });
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