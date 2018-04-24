import React from 'react';
import Todo from './Todo';

export default function List(props) {
    let theList = props.tasks.map((element, index) => {
        return (<Todo key={index} task={element} />)
    });
    return (
        <div>{theList}</div>
    )
}