import React from 'react';

export default function Image(props){
    return(
        <div>
            <h2>My Image</h2>
            <img src={props.website} alt=''/>
        </div>
    )
}