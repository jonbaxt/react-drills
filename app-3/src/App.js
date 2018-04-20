import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Create an app where there is an array of data on state that is then shown on the DOM as a list. 
// There should also be a way for the user to filter what's shown in the list.
// The array of data can be as simple as an array of strings. 
// The list can be as simple as a list of <h2> elements.

class App extends Component {
  constructor(){
    super()
    this.state = {
      myData : ['pink-flamingos', 'sonic', 'tails', 'knuckles', 'hedgehogs', 'dandilions'],
      currentWord: ''
    }
  }

  getCharacter(char){
    this.setState({currentWord: char})



  }

  render() {
  
    var myList = this.state.myData.map( (value, index) => {
      return <p key={'item' + index}>Item {index+1}: {value}</p>
    });

    return (
      <div className="App">
        <input type='text' keyword='Search List' onChange={ () => this.getCharacter( (character) => character.target.value )} />
          {myList}
      </div>
    );
  }
}

export default App;
