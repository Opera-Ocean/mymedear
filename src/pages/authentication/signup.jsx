import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import NetworkDisplay from "../../components/networkDisplay";
import Field from "../../components/fields/input";
import SocialSignup from "../partials/social";
import useAuth from "../../hooks/useAuth";
import { CustomButton, SocialButton } from "../../components/buttons";

import "./auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [meDearData, setMeDearData] = useState({});

  const { registerUser, checkAuthenticated } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    return registerUser(data)
      .then((res) => {
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
        <h1>Sign up</h1>
      </div>

      <form className="panel" onSubmit={handleSubmit(onSubmit)}>
        <Field
          icon="person-outline"
          type="text"
          place="Username"
          register={register}
          name="username"
          required
        />
        <Field
          icon="mail-outline"
          type="email"
          place="Email"
          register={register}
          name="email"
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
            text="Signup"
            type="submit"
          />
        </div>
      </form>

      <SocialSignup authText="Already have an account?" auth="Login" />
    </section>
  );
};

export default Signup;
