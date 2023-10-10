import React from 'react';
import Feature from '../../components/feature/Feature';
import './Whatweb3.css';

const Whatweb3 = () => (
  <div className="web3 section__margin" id="Web3?">
    <div className="web3-feature">
      <Feature title="What is WEB-3.0" text="Next generation of the World Wide Web that aims to provide a more intelligent, interconnected, and meaningful web experience for users and applications.While there is no universally agreed-upon definition of Web 3.0, it represents a vision for the future of the web that involves several key concepts and technologies:

" />
    </div>
    <div className="web3-heading">
      <h1 className="gradient__text">The possibilities are limitless, in world of WEB3.0 </h1>
      <p>Explore the Library</p>
    </div>
    <div className="web3-container">
      <Feature title="SmartContract" text="self-executing contract with the terms of the agreement directly written into code." />
      <Feature title="Security" text=" Data stored on the blockchain is secured using cryptographic techniques. Each block contains a reference to the previous block (a hash) and is linked together in a way that makes it extremely difficult to alter ." />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
         {/* Add the "Buy Me Coffee" button */}
         <div className="buy-me-coffee-button">
          <a
            href="../pages/buymecoffee.jsx" // Replace with your Buy Me Coffee link
            target="_blank"
            rel="noopener noreferrer"
            className="bmc-button"
          >
            <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" />
            <span style={{ marginLeft: "5px" }}>Buy me a coffee</span>
          </a>
        </div>
  </div>
);

export default Whatweb3;