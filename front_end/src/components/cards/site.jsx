import React from 'react';
import './styles.css';

const Site = ({name, icon, color}) =>{
    return(
        <div className="card" data-bs-toggle="modal" data-bs-target="#theModal">
           <h5 className="text-center">{name}</h5>
           <ion-icon size="large" name={icon} color={color}></ion-icon>
        </div>
    )
}

export default Site;
