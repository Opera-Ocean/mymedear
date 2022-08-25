import React from 'react';
import './styles.css';

const Site = ({unique, name, icon, color, theModal, widget}) =>{
    return(
        <React.Fragment>
            <div className="card" data-bs-toggle="modal" data-bs-target={unique}>
                <h5 className="text-center">{name}</h5>
                <ion-icon size="large" name={icon} color={color}></ion-icon>
            </div>

            <div className="modal fade" id={theModal} tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            {widget}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
}

export default Site;
