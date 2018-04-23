import React from 'react';

export default function Image( prop ){
    return(
        <div>
            <img src={prop.theImage} alt=''/>
         </div>
    )
}