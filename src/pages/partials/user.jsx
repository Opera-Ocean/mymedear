import React from 'react';

import { LargeIcon } from '../../components/icons';
import '../users/users.css';

const UserDisplay = () =>{
    return(
        <div className="user-display">
            <div className="pic">
                <img className="userProfileImage"
                src="https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_960_720.jpg"
                alt="content creator" />
            </div>

            <div className="username">
                <h2> John Doe </h2>
                <h5> Content creator </h5>
            </div>

            <LargeIcon icon="create-outline" />
        </div>
    )
}

export default UserDisplay;
