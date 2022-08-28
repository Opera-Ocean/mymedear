import React from 'react';

import AppTitle from './appTitle';
import './comp.css';

const NetworkDisplay = () =>{

    return(
        <div className="frameContainer">
            <iframe className="frame" 
                frameBorder="0" src="https://imgflip.com/embed/6qnagj">
            </iframe>
            <p>
                <a href="https://imgflip.com/gif/6qnagj">   
                    <AppTitle />
                </a>
            </p>
        </div>  
    )
}

export default NetworkDisplay;

