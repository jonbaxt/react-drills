import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newTask: ''
    }
    this.updateList = this.updateList.bind( this );
  }

  setTask(theTask) {
    this.setState({
      newTask: theTask
    })
  }

  updateList(){
    this.setState({
      list: [...this.state.list, this.state.newTask],
      newTask: ''
    })
  }

  render() {
    let list = this.state.list.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })
  
    return (
      <div className="App">
      <h1>My to-do list:</h1>
        <input value={this.state.newTask}
        placeholder='New task'
        onChange={ (elem) => this.setTask(elem.target.value)} />
        <button onClick={this.updateList}>Add</button>
      <br />
        { list }         
      </div>

    )
  }
}

export default App;
