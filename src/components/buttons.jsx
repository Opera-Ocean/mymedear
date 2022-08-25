import React from 'react';

import { BaseIcon } from './icons';
import './comp.css';

export const CustomButton = ({text}) =>{
    return(
        <button className='button'>
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
