import React, { useState } from "react";
import Button from "../../components/Button";
import googleLogo from "../../assets/google.png";
import facebookLogo from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { BiInfoSquare } from "react-icons/bi";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    const errors = { ...user.errors };
    if (!value.trim() === "") {
      errors[name] = "Required Fields";
    } else {
      errors[name] = "";
    }

    setUser({ ...user, [name]: value, errors });
  };

  const isButtonDisabled = () =>
    user.email === "" ||
    user.password === "" ||
    user.errors.email !== "" ||
    user.errors.password !== "";

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login md:grid md:grid-cols-2 md:pt-36">
      <div className="details">
        <h1
          className={`
      text-4xl
      md:text-7xl
      font-bold
      `}
        >
          Hello, <br /> Welcome Back!
        </h1>
        <p className="my-9 text-black-50">
          Water is life. Water is a basic human need. In <br /> various lines of
          life, humans need water.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="text-center md:p-5 md:shadow-xl"
      >
        <Input
          onChangeAction={getUserData}
          type="text"
          placeholder="Email"
          id="userEmail"
          name="email"
          styles={`
          block 
          focus:outline-0 
          focus:border
           focus:border-main-100 
           rounded-lg 
           w-full 
           p-3
           mb-4
           ${user.errors.email && "border border-red text-red mb-2"}
           `}
        />
        {user.errors.email && (
          <span className="text-xs text-red">
            <BiInfoSquare
              className="text-red inline-block mr-1 mb-1"
              size={20}
            />
            {user.errors.email}
          </span>
        )}
        <Input
          onChangeAction={getUserData}
          type="password"
          placeholder="Password"
          id="userPassword"
          name="password"
          styles={`
        block 
        focus:outline-0 
        focus:border
         focus:border-main-100 
         rounded-lg 
         w-full 
         p-3
         ${user.errors.password && "border border-red text-red mb-2"}
         `}
        />
        {user.errors.password && (
          <span className="text-xs text-red">
            <BiInfoSquare
              className="text-red inline-block mr-1 mb-1"
              size={20}
            />
            {user.errors.password}
          </span>
        )}
        <div
          className="login-with-social-media-account
      flex items-center justify-around my-28"
        >
          <div className="cursor-pointer">
            <img
              src={googleLogo}
              alt="google-logo"
              className={`
              w-20
          inline-block
          `}
            />
          </div>
          <img
            src={facebookLogo}
            alt="facebook-logo"
            className={`
          inline-block
          w-20
          cursor-pointer
          `}
          />
        </div>
        <p className="text-center">
          Don’t have an account?
          <Link className="ml-1 text-main-100 font-semibold">
            Create Account
          </Link>
        </p>
        <Button
          disabled={isButtonDisabled()}
          styles={`
        mt-5 
        w-full 
        md:w-1/2 
        bg-main-100 
        py-4 
        text-main-0 
        rounded-full
        disabled:opacity-10
        mt-12
      `}
        >
          Get Started
        </Button>
      </form>
    </div>
  );
};

export default Login;
