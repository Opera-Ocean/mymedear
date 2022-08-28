import React from 'react';

import { BaseIcon } from '../icons';
import '../comp.css';

const Field = ({icon, type, place, value, handleClick}) =>{
    return(
        <div className="field-container">
            <input className="field" type={type} placeholder={place} value={value} onClick={handleClick} />
            <BaseIcon icon={icon} />
        </div>
    )
}

export default Field;
