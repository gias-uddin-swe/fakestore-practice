import React from "react";
import "./Menubar.css";

const Menubar = ({ cartCount }) => {
  return (
    <div>
      <div className="container w-100 m-auto menubar-container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-2 logo">
            <p> Logo</p>
          </div>
          <div className="col-md-6 menu-container d-flex justify-content-end">
            <li className="me-5 p-2">Home</li>
            <li className="me-5 p-2">Contact</li>
            <li className="me-5 p-2">
              Cart <b>{cartCount}</b>
            </li>
            <li className="me-5 p-2">Login</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
