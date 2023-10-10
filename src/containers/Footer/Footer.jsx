import React from "react";
import web3Logo from "../../assets/logo1.png";
import "./Footer.css";

const Footer = () => (
  <div className="web3__footer section__padding" id="footer">
    <div className="web3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>
      <button class="btn" type="button">
        <strong>Request Early Access</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>

    <div className="web3__footer-links">
      <div className="web3__footer-links_logo">
        <img src={web3Logo} alt="web3_logo" />
        <p>
          Created @denny's_wamb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="web3__footer-links_div">
        <h4>Links</h4>
        <p>Github</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="web3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="web3__footer-links_div">
        <h4>Get in touch</h4>
        <p>IDEAINC.LIMITED Created @denny's_wamb,</p>
        <p>085-132567</p>
        <p>info@ideainc.net</p>
      </div>
    </div>

    <div className="web3__footer-copyright">
      <p>@2023 web3. All rights reserved.</p>
    </div>
    
  </div>
);

export default Footer;
