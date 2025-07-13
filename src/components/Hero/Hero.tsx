import React from "react";
import "./Hero.scss";

type HeroProps = {
  image: string;
  text?: string;
};

const Hero: React.FC<HeroProps> = ({ image, text = "" }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero__overlay">
        <h1 className="hero__text">{text}</h1>
      </div>
    </div>
  );
};

export default Hero;
