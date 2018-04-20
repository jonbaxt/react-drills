import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//Create a basic react app where you type in a text box and it shows up as text on the DOM.
class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }

  }


  updateText(t){
    this.setState({text: t})
  }

  render() {

    return (
      <div className="App">
        <input type='text' classKey='textBox' onChange={(t) => this.updateText(t.target.value)} />
        <p id='par'>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
