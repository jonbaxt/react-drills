import React, { Component } from 'react';
import './App.css';
// Create an app where there is an array of data on state that is then shown on the DOM as a list. 
// The array of data can be as simple as an array of strings. 
// The list can be as simple as a list of <h2> elements.
class App extends Component {
  constructor(){
    super()
    this.state = {
      myList: ['Pigs', 'Turkeys', 'Goats']
    }
  }
  
  //Didn't need to refer to example code for this one.
  render() {
    const headWord = <h2>This is my list! All Mine!</h2>
    let listElements = this.state.myList.map( (item) => {
     return <p> {item}  </p>
    })

    return (
      <div className="App">
        <header>
          {headWord}
        </header>

        <main>
          <img id='left-image' src='https://http.cat/401' alt='https://http.cat/404' />
          <span id='container'>  {listElements} </span>      
          <img id='right-image'src='https://http.cat/305' alt='https://http.cat/415' />
           </main>
      </div>
    );
  }
}

export default App;
