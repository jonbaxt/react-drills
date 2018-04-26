import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(){
   super()
   this.state = {
     list: ['Dog', 'Cat', 'Wolf', 'Bunny', 'Parakeet', 'T-Rex']
   }
 }
 
   render() {
    let renderList = this.state.list.map( (petName, index ) => {
      return <p key={index}>{`${index+1}. ${petName}`} </p>
    })
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={`https://www.partnersforhealthypets.org/healthypetcheckup/assets/pets-fcb53b73523cd42be71be807ca0d6aaf.jpg`} className="App-logo" alt="logo" />
          <h2>My Pet Shop</h2>
        </div>
          <h3>Currently in Stock</h3>
          {renderList}
      </div>
    );
  }
}

export default App;
