import React from 'react';
import Todo from './Todo';

export default function List(props){
    let list = props.tasks.map( ( element, index ) => {
        return (
          <Todo key={ index } task={ element } />
        )
      })
   
      return (
        <div>
          { list }
        </div>
      )
}
// Need to focus more on how to construct this, since this is where prop is created and passed around next time.