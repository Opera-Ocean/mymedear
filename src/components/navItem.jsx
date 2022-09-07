import React from 'react';

import "./comp.css";
import { BaseIcon } from './icons';

const NavigationItem = ({icon, title, handleClick}) =>{
    return(
        <div>
            <a onClick={handleClick}>
                <BaseIcon icon={icon} />
                <p className="icon-text"> {title} </p>
            </a>
        </div>
    )
}

export default NavigationItem;
