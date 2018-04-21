import React, { Component } from 'react';
import './App.css';

//Create an app where there is an array of data on state that is then shown on the DOM as a list. 
// The array of data can be as simple as an array of strings. 
// The list can be as simple as a list of <h2> elements.
class App extends Component {
  constructor(){
    super()
    this.state = {
      myStuff: ['Books', 'Candy', 'Calculator', 'T-Shirt', 'Toms Sandwich that he still didnt eat', 'Cookies', 'Milk', 'Root Beer']
    }

  }

  render() {
  const createList = this.state.myStuff.map( (item) => {
  return <p>{item}</p>
  });
    
    return (
      <div className="App">
        <h1>My Stuff That I Have Right Now:</h1>
        {createList}
      </div>
    );
  }
}

export default App;
