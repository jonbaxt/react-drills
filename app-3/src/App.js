import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      shortList: ['one', 'two', 'three', 'got', 'you'],
      current: ''
    }
  }
  alterState(theChange){
    this.setState({current: theChange})
  }
  
  render() {
    let displayUpdatedList = this.state.shortList.filter( (value, index) => {
      return value.includes(this.state.current);
    }).map( (value, index) => {
      return <p id={index}>{value}</p>
    })

    return (
      <div className="App">
        <input type='text' onChange={(newTextChar) => this.alterState(newTextChar.target.value)} />
        {displayUpdatedList}
      </div>
    );
  }
}

export default App;
