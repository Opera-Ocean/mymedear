import React from 'react';

import AppTitle from './appTitle';
import './comp.css';

const NetworkDisplay = () =>{

    return(
        <div className="frame-container">
            <iframe className="frame" 
                frameBorder="0" src="https://imgflip.com/embed/6qnagj">
            </iframe>
            <p>
                <a style={{textDecoration: "none"}}>   
                    <AppTitle text="MyMeDear" />
                </a>
            </p>
        </div>  
    )
}

export default NetworkDisplay;

/*
    https://imgflip.com/gif/6qnagj
*/
