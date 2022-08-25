import React from 'react';

import { BaseIcon } from '../icons';
import '../comp.css';

const Field = ({icon, type, place, value, handleClick}) =>{
    return(
        <div className="fieldContainer">
            <BaseIcon icon={icon} />
            <input className="field" type={type} placeholder={place} value={value} onClick={handleClick} />
        </div>
    )
}

export default Field;
