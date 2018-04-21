import React, { Component } from 'react';
import './App.css';
//Create an app where there is an array of data on state that is then shown on the DOM as a list. 
//There should also be a way for the user to filter what's shown in the list. 
//The array of data can be as simple as an array of strings. The list can be as simple as a list of <h2> elements.
class App extends Component {
  constructor() {
    super()
    this.state = {
      supernatural: ['Dean', 'Sam', 'Castiel', 'Satan', 'Lucifer', 'Monster', 'Demons'],
      textInBoxComponent: ''
    }
  }
  createList(userInput) {
    this.setState({ textInBoxComponent: userInput });
  }

  render() {
    /*
        let foodsToDisplay = this.state.foods.filter( (element, index) => {
          return element.includes( this.state.filterString );
        }).map( (element, index) => {
          return <h2 key={ index }>{ element }</h2>
        })*/

    let updatedList = this.state.supernatural.filter((character, index) => {
      return character.includes(this.state.textInBoxComponent);
    }).map((character, index) => {
      return <li key={index}>{character}</li>;
    })

    return (
      <div className="App">
        <header>
        </header>
        <main>
          <input type='text' onChange={ (kaching) => this.createList((kaching.target.value))} />
          {updatedList}
        </main>

      </div>
    );
  }
}

export default App;
