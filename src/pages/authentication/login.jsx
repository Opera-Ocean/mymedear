import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from "react-hook-form";

import NetworkDisplay from "../../components/networkDisplay";
import Field from "../../components/fields/input";
import { CustomButton, SocialButton } from "../../components/buttons";
import SocialSignup from "../partials/social";
import "./auth.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [meDearData, setMeDearData] = useState({});

  const { login } = useAuth();

  /* const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("meDearData", JSON.stringify(value));
    } catch (error) {
      console.log("Error! Could not process login successfully");
      console.log(error);
    }
  };

  const getLoginData = async () => {
    setIsLoading(true);
    await fetch("https://mymedear.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.ID > 0) {
          storeData();
          setMeDearData(data);
          storeData(data);
          console.log("Successfully logged in");
          // navigation.navigate("Home", { data: data });
        } else {
          /* else if(email === '' || password === ''){
            console.log('Cannot enter leave any field blank.')
        } 
          console.log("Wrong credentials");
        }
      })
      .catch(() => {
        console.log("Network error! Check your internet");
        setIsLoading(false);
      }); 
  }; */

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    return login(data)
      .then((res) => {
        console.log(res);
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section>
      <NetworkDisplay />

      <div className="panel">
        <h1>Login</h1>
      </div>

      <form className="panel" onSubmit={handleSubmit(onSubmit)}>
        <Field
          icon="user-outline"
          type="text"
          place="Username"
          register={register}
          name="username"
          required
        />
        <Field
          icon="lock-closed-outline"
          type="password"
          place="Password"
          register={register}
          name="password"
          required
        />
        <div className="centered-button">
          <CustomButton
            otherStyle={{
              paddingRight: "10px",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
            text="Login"
            type="submit"
          />
        </div>
      </form>

      <SocialSignup authText="New Member?" auth="Signup" />
    </section>
  );
};

export default Login;
