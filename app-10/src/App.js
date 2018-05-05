import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/'><div className="App-header">
          <img src='https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-1.jpeg?alt=media&token=0fbf36a3-a477-49f7-aa99-2bdb1030c449' className="App-logo" alt="logo" />
          <img src='https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-1.jpg?alt=media&token=af7620f5-e9a1-4108-939c-472c48307528' className="App-logo" alt="logo" />
          <img src='https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fcombo-tee.jpg?alt=media&token=068eefa0-d83f-497f-9809-5d0272a1639d' className="App-logo" alt="logo" />
          <img src='https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-2.jpg?alt=media&token=7401ac35-408b-4f10-8749-3dd6378f4198' className="App-logo" alt="logo" />
          <img src='https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-4.jpeg?alt=media&token=1e1b81c8-a24f-4d34-85e4-153e4d00470e' className="App-logo" alt="logo" />
          <h2>Super Crazy DevMountain Store !!!!</h2>
        </div>
          </Link>
          {router}
      </div>
    );
  }
}

export default App;
