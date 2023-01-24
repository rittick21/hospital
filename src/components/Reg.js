import React from "react";
import { Link } from "react-router-dom";

export default function Reg(props) {
  return (
    <>
      <div className="box">
        <div className="container">
        <div className="heading">{props.heading}</div>
          <form action="/">
            <div className="card-details">
              <div className="card-box">
                <span className="details">Name</span>
                <input type="text" placeholder="Full name" />
              </div>
              <div className="card-box">
                <span className="details">Address</span>
                <input type="text" placeholder="Address" />
              </div>
              <div className="card-box">
                <span className="details">Contact No</span>
                <input type="number" placeholder="+91-XXXXXXXXXX" />
              </div>
              <div className="circle-form">
                <span className="circle-title">Gender</span>
                <select name="Gender" id="">
                  <option defaultValue={"Gender"}>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Others</option>
                </select>
              </div>
              <div className="card-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="card-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Your Password" />
              </div>
              <div className="card-box">
                <span className="details">Confirm password</span>
                <input type="password" placeholder="Enter password again" />
              </div>
              <div className="button">
                <input className="button btn-primary" type="submit" value="Register" />
              </div>
            </div>
          </form>
          <p className="p-2 text-center">If you already have an account then <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </>
  );
}
