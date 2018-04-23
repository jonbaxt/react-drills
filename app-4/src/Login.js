import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            password: ''
        }
        this.displayPassword = this.displayPassword.bind( this );
    }

    setName(element){
        this.setState({ name: element });
    }

    setPassword(element){
        this.setState({ password: element });
    }

    displayPassword(){
        this.setState({
            name: '',
            password: ''
        });

        alert(`Username: ${this.state.name}  Password: ${this.state.password}`);
        
  
    }

    render(){
        return(
            <div>
                <p>
                Username: <input value={this.state.name} type='text' onChange={ (e) => this.setName(e.target.value)} /> 
                Password: <input value={this.state.password} type='text' onChange={ (e) => this.setPassword(e.target.value)} /> 
                <button onClick={ () => this.displayPassword() }>Login</button>
                </p>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg'} alt='' />
            </div>
        )
    }
}

export default Login;