import React from 'react';

import { CustomButton } from '../../components/buttons';
import '../users/users.css';

const Status = () =>{
    return(
        <div className="panel">
            <h5> Status </h5> 
            <hr />

            <div className="status">
                <CustomButton otherStyle={{
                    backgroundColor: "green",
                    paddingRight: "15px",
                    paddingLeft: "15px"
                }} text="Available" />

                <CustomButton otherStyle={{
                    backgroundColor: "indigo",
                    paddingRight: "15px",
                    paddingLeft: "15px"
                }}
                 text="Priority Only" />

                <CustomButton otherStyle={{
                    backgroundColor: "indigo",
                    paddingRight: "15px",
                    paddingLeft: "15px"
                }}
                 text="Business Only" />

                <CustomButton otherStyle={{
                    backgroundColor: "brown",
                    paddingRight: "15px",
                    paddingLeft: "15px"
                }}
                 text="Busy" />
            </div>
            
          </div>
    )
}

export default Status;
