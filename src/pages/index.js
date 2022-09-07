import React from 'react';
import { useNavigate } from "react-router-dom";

import NavigationBar from '../components/navBar';
import NetworkDisplay from '../components/networkDisplay';
import { CustomButton } from '../components/buttons';
import { Instagram, Twitter } from './partials/feeds';
import './styles.css';

const IndexPage = () =>{
    const navigate = useNavigate();
    const toLogin = () =>{
        navigate("/login");
    }

    return(
        <div className="feeds">
            <NavigationBar />
            <NetworkDisplay />
            <CustomButton text="Continue" otherStyle={{alignSelf: "center"}}
                handleClick={toLogin} />
            <Instagram />
            <Twitter />
        </div>
    )
}

export default IndexPage;
