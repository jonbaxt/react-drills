import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Toast notification dependencies
import { ToastContainer, toast } from 'react-toastify';
//import  toast  from 'react-toastify';

class App extends Component {
  constructor() {
    super()

    this.state = {
      movieName: [],
      input: '',
      error: false
    }
    // this.state.getText = this.state.getText.bind( this );
    this.saveInput = this.saveInput.bind(this);
    this.getText = this.getText.bind(this);
  }

  // displayError(){

  // }

  saveInput(e) {
    this.setState({ input: e })
  }

  getText() {
    let promise = axios.get('https://swapi.co/api/' + this.state.input + '/').then( (response) => {
      
      this.setState({ movieName: response.data.results })
    })
  }


  render() {

        let formattedOutput = this.state.movieName.map((e, i) => {
          if (this.state.input === 'films') {
            return (

              <div key={i}>
                <p>Film: Stars Wars Episode {e.episode_id}: {e.name} <br /> Directed by: {e.director}, Produced by: {e.producer}, Year Released: {e.release_date}  </p>

              </div>
            )
          } else if (this.state.input === 'people') {
            return (
              <div key={i}>
                <p>Name: {e.name}, Sex: {e.gender}, Year of Birth: {e.birth_year}, Eye Color: {e.eye_color} </p>
              </div>
            )
          } else if (this.state.input === 'planets') {
            return (
              <div key={i}>
                <p>Planet: {e.name}, Terrain: {e.terrain}, Population: {e.population} </p>
              </div>
            )
          }
        });


    return (
      <div className = "App" >
            <h3>Star Wars Facts</h3>
            <h4>Type in either, films, people, or planets to get information</h4>

            <input type='text'
              onChange={(e) => this.saveInput(e.target.value)}
              value={this.state.input}
              placeholder='Type in a search' />

            <button onClick={this.getText}>Find Data</button>
            <div className="output">
        { formattedOutput }
            </div>
      </div>
    );
  }
}

export default App;
