import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import NetworkDisplay from "../../components/networkDisplay";
import Field from "../../components/fields/input";
import {CustomButton, SocialButton} from "../../components/buttons";
import SocialSignup from "../partials/social";
import './auth.css';

const Login = () =>{
  const[isLoading, setIsLoading] = useState(false);
  const[email, setEmail] = useState();
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

          <div className="panel">
            <h1>Login</h1>
          </div>

          <form className="panel" method="POST">
            <Field icon="mail-outline" type="email" place="Email" />
            <Field icon="lock-closed-outline" type="password" place="Password" />
            <div className="centered-button">
              <CustomButton otherStyle={{
                paddingRight: "10px",
                paddingLeft: "10px",
                borderRadius: "5px"
              }}
               text="Login" />
            </div>
          </form>

          <SocialSignup authText="New Member?" auth="Signup" />

        </section>
      )
}

export default Login;
