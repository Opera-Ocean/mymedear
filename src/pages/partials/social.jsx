import React from 'react';

import { SocialButton } from '../../components/buttons';

const SocialSignup = ({authText, auth}) =>{
    return(
        <section>
            <div className="social-signup">
                <h2>OR</h2>
                <SocialButton icon="logo-google" text="Login with Google" />
                <SocialButton icon="logo-facebook" text="Login with Facebook" />
            </div>

            <div className="social-signup">
                <h4> {authText} </h4>
                <a href="#"> {auth} </a>
            </div>
        </section>
    )
}

export default SocialSignup;
    