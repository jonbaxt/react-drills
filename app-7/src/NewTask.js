import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            newTask: ''
        }
        this.handleAdd = this.handleAdd.bind( this );
    }
    setTask(props) {
        this.setState({
            newTask: props
        })
    }
    // handleAdd(props) {
    handleAdd() {
        this.props.add(this.state.newTask);
        this.setState({
            newTask: ''
        })
    }

    render() {

        return (
            <div>
                <input value={this.state.newTask}
                    placeholder='New task'
                    onChange={(elem) => this.setTask(elem.target.value)} />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}
export default NewTask;