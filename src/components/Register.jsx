import React from "react";
import { registerUser } from "../api/ajaxHelper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sideBooks from "../assets/form-books.jpg";

export default function Register({ setToken }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      firstname,
      lastname,
      email,
      password,
    };
    const token = await registerUser(userObj);
    setToken(token);
    navigate("/account");

    console.log(userObj);
  }

  return (
    <div className="register">
      <div className="content">
        <img className="side-pic" src={sideBooks} />
        <form className="form-style" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              placeholder="First Name"
              type="name"
              value={firstname}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Last Name"
              type="text"
              value={lastname}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
