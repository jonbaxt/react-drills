import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor(){
    super()
    this.state = {list: []};
    
    this.taskUpdate = this.taskUpdate.bind( this );
  }

  taskUpdate(props){
    this.setState({list: [...this.state.list, props]})
  }

  render() {
    return (
      <div className="App">
          <h2>My to-do list:</h2>
          <NewTask add={this.taskUpdate} />
          <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
