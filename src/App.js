import React, { useEffect, useState } from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";
import "./index.css";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="gradient__bg"
        style={{ position: "sticky", top: 0, zIndex: 1 }}
      >
        <Navbar scroll={scrollPosition} />
      </div>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
