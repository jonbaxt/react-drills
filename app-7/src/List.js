import React from 'react';
import Todo from './Todo';

export default function List(props) {
    let newList = props.tasks.map((element, index) => {
        return (
        <Todo key={index} task={element} />
        )
    })

    return (
        <div>
            {newList}
        </div>
    )
}
