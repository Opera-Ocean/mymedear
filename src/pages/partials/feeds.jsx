import React from 'react';

import AppTitle from '../../components/appTitle';
import '../styles.css';

export const Instagram = () =>{
    return(
        <section>
            <div className="network">
                <AppTitle text="Instagram" />
            </div>
            <div class="tagembed-container" style={{width:'100%', height:'100%', overflow: 'auto'}}>
                <div class="tagembed-socialwall" data-wall-id="62014" 
                    view-url="https://widget.tagembed.com/62014?view">
                </div> 
            </div>
        </section>
    )
}

export const Twitter = () =>{
    return(
        <section>
            <div className="network">
                <AppTitle text="Twitter" />
            </div>
            <iframe src="https://widget.taggbox.com/106905" 
            style={{width:'100%', height:'600px', border:'none'}}>
            </iframe>
        </section>
    )
}
