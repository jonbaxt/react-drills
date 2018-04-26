import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: ''
    }
  }
  
  handleTextBox(typing){
    this.setState({input: typing});
  }

  saveInput(newInput){
    this.setState({list: [...this.state.list, newInput],
                  input: ''
    })
  }

  render() {
    let displayList = this.state.list.map( (listItem, index) => {
       return <p key={index}>{`Item ${index+1}: ${listItem}`}</p>
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Type Something</h2>
          </div>
            <input type='text'
              placeholder='Type here'
              value={this.state.input}
              onChange={ (newElement) => this.handleTextBox(newElement.target.value)} />
            <button onClick={() => this.saveInput(this.state.input)}>Submit</button>
            <br />
            { displayList }
      </div>
    );
  }
}

export default App;
