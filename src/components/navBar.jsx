import React, {useState} from 'react';

import AppTitle from './appTitle';
import SearchField from './fields/search';
import { SmallIcon } from './icons';
import NavigationItem from './navItem';

const NavigationBar = () =>{
    return(
        <section>
            <div className="top-tab">
                <AppTitle />
                {/* <SearchField icon="search-outline" /> */}
                <SmallIcon icon="earth-outline" />
            </div>
            
            <div className="lower-top-tab">
                <NavigationItem icon="home-outline" title="Home" />
                <NavigationItem icon="person-outline" title="Profile" />
                <NavigationItem icon="add-outline" title="Create" />
                <NavigationItem icon="notifications-outline" title="Notifications" />
            </div>
        </section>
    )
}

export default NavigationBar;
