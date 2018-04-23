import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image website={'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_535,q_65,w_1024/v1/clients/norway/cacae9d5_cbab_45aa_a798_7b9182912004_6db22485-bd64-49a3-94b7-53377ac769bc.jpg'} />
      </div>
    );
  }
}

export default App;
