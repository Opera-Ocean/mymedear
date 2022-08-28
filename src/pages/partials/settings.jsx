import React from 'react';

import { BaseIcon } from '../../components/icons';
import '../users/users.css';

const Settings = () =>{

    const SettingsItem = ({icon, title}) =>{
        return(
            <div className="row">
                <BaseIcon icon={icon} />
                <h5> {title} </h5>
                <BaseIcon icon="chevron-forward" />
            </div>
        )
    }

    return(
        <div className="panel">
            <h5> Settings </h5> 
            <hr />

            <div className="">
                <SettingsItem icon="globe-outline" title="Edit Public Profile" />
                <SettingsItem icon="analytics-outline" title="Your Analytics" />
                <SettingsItem icon="happy-outline" title="Privacy" />
                <SettingsItem icon="card-outline" title="Billing" />
            </div>
        </div>
    )
}

export default Settings;

