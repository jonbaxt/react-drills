import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.handleAdd = this.handleAdd.bind( this );
    }
    handleInputChange(elem){
        this.setState({input: elem})
    }
    handleAdd(){
        this.props.add(this.state.input);
        this.setState({input: ''})
    }

    render(){
        return(
            <div> 
                <input value={this.state.input}
                placeholder='Enter new task' 
                onChange={ (el) => this.handleInputChange(el.target.value) }/>
                
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;