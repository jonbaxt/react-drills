import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo';

class App extends Component {
constructor(){
  super();
    this.state = {
      list: [],
      input: ''
    }
  this.addTask = this.addTask.bind( this );
}
inputChange(newInput){
  this.setState({input: newInput});
}

addTask(){
  this.setState({
    list: [...this.state.list, this.state.input],
    input: ''
  })
}

  render() {
    let list = this.state.list.map( (el, index) => {
      return ( <Todo key={ index } task={ el }  /> )      
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div className='Workspace'>
        
        <input value={this.state.input}
        placeholder='New task'
        onChange={(newInput) => this.inputChange(newInput.target.value)} />
        <button onClick={this.addTask }>Add</button>
        
        </div>
          <br /><br />
          { list }
      </div>
    );
  }
}

export default App;

// Create an app that displays a to-do list. 
// You will need two components, the App component and a Todo functional component. 
// The App component should be responsible for getting new tasks and storing the list of tasks. 
// The Todo component should be responsible for display the tasks from the App component in a list-like fashion. 
// The App component should pass down a tasks array into the Todo component as a prop.