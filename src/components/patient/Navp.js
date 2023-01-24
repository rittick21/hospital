import React from "react";
import { Link } from "react-router-dom";

export default function Navp(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         <Link className="navbar-brand" to="/">
            <strong>
              {props.title}
              <span
                style={{ fontSize: "27px", color: "red", fontWeight: "bolder" }}
              >
                +
              </span>{" "}
              👩🏻‍⚕️
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" aria-current="page" to="/appoinment">
                  Book Appoinment
                </Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="/status">
                  Application Status
                </Link>
              </li>
            </ul>
            <div className="d-flex" style={{ cursor: "pointer" }}>
             <Link to="/profile">
                <img
                  className="setImg rounded"
                  src="https://tse4.mm.bing.net/th?id=OIP._VoTfUzENldEmDbFEcQi4QHaHa&pid=Api&P=0"
                  alt="..."
                />
                <span className="mx-1">
                  <strong> Rittick Roy</strong>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
