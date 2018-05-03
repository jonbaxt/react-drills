import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  
  componentDidMount(){
    
    // axios.get(`https://anapioficeandfire.com/api/characters`)
    // axios.get(`https://swapi.co/api/people`)
    axios.get(`/api/pokemon/` + 25)
    .then( (ret) => {
      console.log(ret)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
