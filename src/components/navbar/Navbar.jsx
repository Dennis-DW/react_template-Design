// import React from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo1.png";
import React, { useState } from "react";
// BEM --> block Element Modifier

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#Web3?"> WEB3?</a>
    </p>
    <p>
      <a href="#possibility">Blockcchain</a>
    </p>
    <p>
      <a href="#features">Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
    <p>
      <a href="#footer">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <a href="#landing">
    <div className="web3__navbar">
      <div className="web3__navbar-links">
        <div className="web3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="web3__navbar-links-container">
        <Menu/>
        </div>
      </div>
      <div className="web3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Join Free</button>
      </div>
      <div className="web3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="web3__navbar-menu-container scale-up-bottom">
            <div className="web3__navbar-menu-container-links">
             <Menu/>
            </div>
            <div className="web3__navbar-menu-container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </a>
  );
};

export default Navbar;
