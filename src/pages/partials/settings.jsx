import React from 'react';
import { useNavigate } from "react-router-dom";

import { BaseIcon } from '../../components/icons';
import '../users/users.css';

const Settings = () =>{

    const navigate = useNavigate();

    const SettingsItem = ({icon, title, handleClick}) =>{
        return(
            <div className="row">
                <a onClick={handleClick} className="row">
                    <BaseIcon icon={icon} />
                    <h5> {title} </h5>
                    <BaseIcon icon="chevron-forward" />
                </a>
            </div>
        )
    }

    return(
        <div className="panel">
            <h5> Settings </h5> 
            <hr />

            <div className="">
                <SettingsItem icon="globe-outline" title="Edit Public Profile"
                handleClick={(navigate("/public"))} />
                <SettingsItem icon="analytics-outline" title="Your Analytics" />
                <SettingsItem icon="happy-outline" title="Privacy" />
                <SettingsItem icon="card-outline" title="Billing" />
            </div>
        </div>
    )
}

export default Settings;

