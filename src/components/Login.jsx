import React from "react";
import { loginUser } from "../api/ajaxHelper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginSide from "../assets/login.jpg";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      email,
      password,
    };
    const token = await loginUser(userObj);
    setToken(token);
    navigate("/account");

    console.log(userObj);
  }

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <img className="login-side-img" src={loginSide} />
          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              <input
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </label>
            <label>
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
