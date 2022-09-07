import React from 'react';

import './comp.css';

const AppTitle = ({text})  =>{
    return(
        <div className="title-container">
            <h4 className="title"> {text} </h4>
        </div>
    )
}
export default AppTitle;
