import React from "react";
import { Article, Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whatweb3,
} from "./containers";
import "./App.css";
import videoBackground from "../src/assets/video1.mp4";
const App = () => {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
        </video>
        <a href="#home">
          <div className="content">
            <div className="arrow arrow-first"></div>
          </div>
        </a>

        <div class="connect-hello-world">
          <h1 className="gradient__text">Dennys&apos;Wamb</h1>
          <p>
            "Welcome to our community! Explore, learn, and enjoy your journey."
          </p>
        </div>
        <Navbar />
      </div>
      <Header />
      <Brand />
      <Whatweb3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
