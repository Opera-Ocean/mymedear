import React from 'react';

const LinkedIn = () =>{
   const linkedInUrl = "https://ng.linkedin.com/in/";
   const page = "oceanman";
   const badge = "?trk=profile-badge";

    return(
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" 
            data-type="HORIZONTAL" data-vanity="oceanman" data-version="v1">
            <a class="badge-base__link LI-simple-link" 
                href={linkedInUrl + page + badge}>
            </a>
        </div>
    )
}

export default LinkedIn;
