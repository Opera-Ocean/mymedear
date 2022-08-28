import React from 'react';

import { BaseIcon } from './icons';
import './comp.css';

export const CustomButton = ({otherStyle, text}) =>{
    return(
        <button className='button'
            style={otherStyle}>
            {text} 
        </button>
    )
}

export const SocialButton = ({icon, text}) =>{
    return(
        <button className='socialButton'>
            <BaseIcon icon={icon} />
            {text}
        </button>
    )
}
