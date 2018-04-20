import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//Create an app where there is an array of data on state that is then shown on the DOM as a list. 
//The array of data can be as simple as an array of strings. 
//The list can be as simple as a list of <h2> elements.
class App extends Component {
  constructor(){
    super()
    this.state = {
      data: ['Puppies', 'Dogs', 'Cats', 'Chickens', 'Geese', 'The Famer in the Dale']
    }
  }

  render() {
    var displayList = this.state.data.map( (value) => {
      return ( <h2>{value}</h2> )
      }
      )

    return (
      <div className="App">
        {displayList}
      </div>
    )
  }
}

export default App;
