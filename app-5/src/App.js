import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Picture Call to Component Function:</h1>
        <Image myImage='https://http.cat/405' />
      </div>
    );
  }
}

export default App;
