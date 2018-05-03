import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Link } from 'react-router-dom';

import router from './router';
// import Home from './Home';
// import Signup from './Signup';
// import Details from './Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HashRouter>
              <div>
              <nav>
                <ul>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/details'>Details</Link>
                </ul>
              </nav>
              
              {/* <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/signup' component={Signup} />
                  <Route path='/details' component={Details} />
                </Switch> */}
              
              {router}
                

              </div>
          </HashRouter>
        </div>

      </div>
    );
  }
}

export default App;
