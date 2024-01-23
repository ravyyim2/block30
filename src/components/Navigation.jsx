import React from "react";
import { Link } from "react-router-dom";
import bookLogo from "../assets/books.png";

export default function Navigation() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1>
            {" "}
            <img id="logo-image" src={bookLogo} />
            Book Buddy
          </h1>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/Login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
