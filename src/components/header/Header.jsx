import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { signal } from "@preact/signals";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/logo.png" alt="" />
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile == true ? (
                <i className="fa fa-times" />
              ) : (
                <i className="fa fa-bars" />
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-users"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
