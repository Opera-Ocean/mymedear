import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import NetworkDisplay from "../../components/networkDisplay";
import Field from "../../components/fields/input";
import {CustomButton, SocialButton} from "../../components/buttons";
import './auth.css';

const Signup = () =>{
  const[isLoading, setIsLoading] = useState(false);
  const[email, setEmail] = useState();
  const[username, setUsername] = useState();
  const[password, setPassword] = useState();
  const[meDearData, setMeDearData] = useState({});

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('meDearData', JSON.stringify(value))
    } catch (error) {
      console.log("Error! Could not process login successfully");
      console.log(error)
    }
  }

const getLoginData = async () =>{
    setIsLoading(true);
    await fetch('https://mymedear.com/auth/signup', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        username: username,
        password: password
        }),
    })

    .then((response) => response.json())
    .then(data => {
        setIsLoading(false);
        if (data.ID > 0) {
            storeData();
            setMeDearData(data);
            storeData(data);
            console.log("Successfully logged in");
            // navigation.navigate("Home", { data: data });
        }
        /* else if(email === '' || password === ''){
            console.log('Cannot enter leave any field blank.')
        } */
        else {
            console.log("Wrong credentials");
        }
    })
    .catch(() => {
        console.log("Network error! Check your internet");
        setIsLoading(false);
    });

}
      return(
        <section>
          <NetworkDisplay />

          <div className="container">
            <h1>Sign up</h1>
          </div>

          <form className="container" method="POST">
            <Field icon="person-outline" type="text" place="Username" />
            <Field icon="mail-outline" type="email" place="Email" />
            <Field icon="lock-closed-outline" type="password" place="Password" />
            <div className="centeredButton">
              <CustomButton text="Signup" />
            </div>
          </form>

          <div className="social-signup">
            <h2>OR</h2>
            <SocialButton icon="logo-google" text="Login with Google" />
            <SocialButton icon="logo-facebook" text="Login with Facebook" />
          </div>

          <div className="social-signup">
            <h4> Already have an account? </h4>
            <a href="#"> Login </a>
          </div>

        </section>
      )
}

export default Signup;
