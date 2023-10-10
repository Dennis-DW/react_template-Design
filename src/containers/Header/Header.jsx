import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai1.png";
import "./Header.css";

const Header = () => (
  <div className="web3__header section__padding" id="home">
    <div className="web3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with WEB3
      </h1>
      <p>
      Yet, Web 3.0 beckons for traveling assistance, making it a delightful experience.The indulgence in the way everything functions is pure joy, with continuous alteration and a boisterous attachment to the decentralized web. 
      </p>

      <div className="web3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="web3__header-content__people">
        <img src={people} />
        <p>1,900 people requested access a visit in last 48 hours</p>
      </div>
    </div>

    <div className="web3__header-image">
      <img src={ai} />
      </div>
  </div>
);

export default Header;
