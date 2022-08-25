import React from 'react';

const Youtube = () =>{

    const networkUrl = "https://www.youtube.com/";
    const page = "nasdaily";

    return(
        <div class="fb-page" data-href={networkUrl + page} data-tabs="timeline" data-width="" data-height=""
            data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite={networkUrl + page} class="fb-xfbml-parse-ignore">
               <a href={networkUrl + page}> Nas </a></blockquote>
        </div>
    )
}

export default Youtube;
