import React from 'react';

import "./comp.css";
import { BaseIcon } from './icons';

const NavigationItem = ({icon, title}) =>{
    return(
        <div>
            <BaseIcon icon={icon} />
            <p className="icon-text"> {title} </p>
        </div>
    )
}

export default NavigationItem;
