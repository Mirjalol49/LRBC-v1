import React, { useState, useEffect } from "react";
import "./Hero.css";
import Lrbc from "../../../assets/images/lrbc.png";
import ButtonPulse from "../../../assets/components/ButtonPulse/ButtonPulse";

const words = ["Construction", "Architecture", "Engineering", "Innovation"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false); // Fade back in
      }, 100); // Delay to allow fade out
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <img className="hero-lrbc-icon" src={Lrbc} alt="lrbc-img" />
          <h1 className={`hero-title ${fade ? "fade-out" : "fade-in"}`}>
            Highest Standards of{" "}
            <span className="hero-dynamic-title">{words[index]}</span>
          </h1>

          <ButtonPulse />
        </div>
      </div>
    </section>
  );
};

export default Hero;
