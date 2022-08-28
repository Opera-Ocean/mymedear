import React from 'react';

export const LargeIcon = ({icon}) =>{
    return(
        <ion-icon style={{
            color: '#272a2d', 
            height: '40px',
            width: '40px', 
            marginRight: '5%'
            }} name={icon}></ion-icon>
    )
}

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

export const SmallIcon = ({icon}) =>{
    return(
        <ion-icon style={{
            color: '#272a2d', 
            height: '18px',
            width: '18px', 
            marginRight: '5%'
            }} name={icon}></ion-icon>
    )
}
