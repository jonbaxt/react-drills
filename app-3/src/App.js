import React, { Component } from 'react';
import './App.css';

// Create an app where there is an array of data on state that is then shown on the DOM as a list. 
// There should also be a way for the user to filter what's shown in the list.
// The array of data can be as simple as an array of strings. 
// The list can be as simple as a list of <h2> elements.

// Step 1: Clarify - Understand the question
/*    -We need an array of data that is on the DOM, that already contains data presented as a list.
      -The filter of the list is needed to to start filtering the list to look for elements on the state
          that match the the first letters being typed into the text box.
      - Array of strings is data
      - List can be h2 elements.*/
// Step 2: What data structures are needed
/*    -Structures:
        -Array of Different strings
          -a map to pass the strings to the component in the browser.
          -a filter to filter out the strings not containing the words need to go to the console.
        -Another variable to catch information being typed to the text box
        -h2 tags with ids for callbacks
        
*/
// Step 3: Create sample data
/*        myData : ['tortoise', 'sonic', 'tails', 'kit-kats', 'knuckles', 'hedgehogs', 'hair', 'dandilions']
          currentWord: ''
          modifiedArray: [] - to pass the variables that are only to be displayed when typing is sensed. */
// Step 4: Solve Sample Data
/*      myData ; ['tortoise', 'sonic', 'tails', 'kit-kats', 'knuckles', 'hedgehogs', 'hair', 'dandilions']
            if('t' === currentWord)--> modifiedArray: ['tortoise, 'tails']
            if('to' === currentWord)--> modifiedArray: ['tortoise']
            if('d' === currentWord)--> modifiedArray: ['dandilions']
            if('x' === currentWord)--> modifiedArray: []
*/
// Step 5: Function Signature
/*  var myList = this.state.myData.map( (value, index) => {return list and <p>


*/
// Step 6: List code constructs
/* */
// Step 7: Pseudo Code
/* */
// Step 8: Solve

class App extends Component {
  constructor(){
    super()
    this.state = {
      myData : ['tortoise', 'sonic', 'tails', 'kit-kats', 'knuckles', 'hedgehogs', 'hair', 'dandilions'],
      currentWord: '',
    }
    
  }

  updateList(char){
    this.setState({currentWord: char})
  }

  render() {
  
/*
  let foodsToDisplay = this.state.foods.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })
*/ 
    
    let myList = this.state.myData.filter( (val, ind) => {
      return val.includes( this.state.currentWord);
    }).map( (value, index) => {
      return <p key={ index }>{value}</p>
    });
/*Item {index+1}:*/


    return (
      <div className="App">
        <input id='text-box' type='text' onChange={ (character) => this.updateList( character.target.value )} />
          {myList}
      </div>
    );
  }
}

export default App;
