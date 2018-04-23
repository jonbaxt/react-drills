import React, { Component }  from 'react';

class Login extends Component{
    constructor(){
        super()
        this.state = {
          username: '',
          password: ''
        }
        this.loginNotify = this.loginNotify.bind( this );
      }
      setUsername(userSub){
        this.setState({username: userSub})
      }
      setPassword(userPass){
        this.setState({password: userPass})
      }
      loginNotify(name, pass){
          alert(`Username: ${this.state.username} Pasword: ${this.state.password}`);
      }

    render(){
        return(
            <div>
                <input className='usernameTextBox' type='text' onChange={ (enteredName)  => this.setUsername(enteredName.target.value)} />
                <input className='passwordTextBox' type='text' onChange={ (enterPass) => this.setPassword(enterPass.target.value)} />
                <button className='loginButton' onClick={this.loginNotify}>Login</button>
            </div>
        )
    }
}

export default Login;
