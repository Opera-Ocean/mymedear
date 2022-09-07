import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import NetworkDisplay from "../../components/networkDisplay";
import Field from "../../components/fields/input";
import SocialSignup from "../partials/social";
import useAuth from "../../hooks/useAuth";
import { CustomButton, SocialButton } from "../../components/buttons";

import "./auth.css";


const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [meDearData, setMeDearData] = useState({});

  const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    return login(data)
      .then((res) => {
        console.log(res);
        if (res) {
          navigate("/profile");
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
