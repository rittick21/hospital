import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="box">
      <div className="container">
        <div className="heading">Login with your account</div>
        <form action="/">
          <div className="card-details">
            <div className="card-box">
              <span className="details">Select</span>
              <select name="user" id="">
                <option defaultValue={"Select"}>select</option>
                <option value="admin">Admin</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <div className="card-box">
              <span className="details">Email</span>
              <input type="email" placeholder="Email address" />
            </div>
            <div className="card-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Your password" />
              <div className="paragraph">
                <p className="p-1" style={{ color: "rgb(116, 116, 116)" }}>
                  At least 8 characters
                </p>
              </div>
            </div>
            <div className="button">
              <input
                className="button btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </div>
          <div className="text-center">
          <a href="/">Forgot password?</a>
          <p>If you don't have any account then <Link to="/">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
