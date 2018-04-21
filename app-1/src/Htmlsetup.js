import React, { Component } from 'react';

//Create a basic react app where you type in a text box and it shows up as text on the DOM.
class Htmlsetup extends Component {
    constructor(){
        super()

        this.state = {
            textSniffer: '',
            
        }
    }

    setText(newText){
        this.setState({textSniffer: newText});
    }

    clearText(){
        this.setState({textSniffer: ''});
        
    }

    render() {
    
        let editableText = <p id='edit-text'>{this.state.textSniffer}</p>
        return (
            <div>
                <header>
                    <h1>My Magical Page</h1>
                    <h2>That makes text</h2>
                </header>
                <main> 
                    <input id='text-box' type='text' onChange={ (val) => this.setText(val.target.value) }/>
                    <button onClick={ () => this.clearText() }>Clear Text</button>
                    {editableText}
                </main>
                <footer> </footer>
            </div>
        );
    }
}
export default Htmlsetup;