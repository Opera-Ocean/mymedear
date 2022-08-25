import React from 'react';

export const BaseIcon = ({icon}) =>{
    return(
        <ion-icon style={{
            color: '#272a2d', 
            height: '24px',
            width: '24px', 
            marginRight: '5%'
            }} name={icon}></ion-icon>
    )
}
