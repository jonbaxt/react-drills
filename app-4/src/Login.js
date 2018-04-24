import React, {Component} from 'react';

class Login extends Component{
constructor(){
    super()
    this.state = {
        name: '',
        password: ''
    }
    this.displayUser = this.displayUser.bind( this );
}
setName(newName){
    this.setState({ name: newName });
}
setPassword(newPass){
    this.setState({ password: newPass });
}
displayUser(){
    alert(`Username: ${this.state.name} Password: ${this.state.password}`);
}
       render(){
        return(
            <div>
                <h1>Logging On?</h1>
                <p>Please enter the folowing:</p>
                <p> Your username:
                <input onChange={ (elemental) => this.setName(elemental.target.value)} type='text' />
                and your password: 
                <input onChange={ (elemental) => this.setPassword(elemental.target.value)} type='text' />
                <button
                onClick={this.displayUser}>Login</button>
                </p>
                </div>

        )

    }


}

export default Login;