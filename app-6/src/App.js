import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.updateList = this.updateList.bind( this );
  }
  updateList(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input:''
    })
  }
  updateInput(props){
    this.setState({input: props})
  }

  render() {
    let item = this.state.list.map( (element, index) =>{
    return (<Todo key={index} item={element} /> )
    } )

    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <input value={this.state.input}
            placeholder='Type Task Here'
            onChange={(elemnnt) => this.updateInput(elemnnt.target.value)}/>
        <button onClick={this.updateList}>Add</button>
        <br />
        {item}
      </div>
    );
  }
}

export default App;
