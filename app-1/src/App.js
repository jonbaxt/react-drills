import React, { Component } from 'react';
import './App.css';
//Create a basic react app where you type in a text box and it shows up as text on the DOM.

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: ''
    }
  }
  update(newText) {
    this.setState({ messages: newText });
  }

  render() {
    // let words = this.state.messages.map((word) => {
      // return word;
    // })

    return (
      <div className="App">
        <div id='compBox'>
          <input id='text-box' type='text' onChange={(val) => this.update(val.target.value)} />
          <h2 >{this.state.messages}</h2>
        </div>
      </div>
    );
  }
}

export default App;
