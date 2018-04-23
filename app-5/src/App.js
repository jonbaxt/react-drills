import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image theImage= { 'https://i.ytimg.com/vi/43-30gLFynw/maxresdefault.jpg'} />
      </div>
    );
  }
}

export default App;
