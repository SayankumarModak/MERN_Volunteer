import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h4>Needed</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          ratione possimus obcaecati quia repellendus magni ad laborum ab
          architecto ullam, suscipit debitis velit, nesciunt, magnam quo cum
          officia amet! Dicta suscipit ad rem quo nulla soluta ea et eveniet,
          mollitia, obcaecati maxime eligendi dolore consectetur aliquid!
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="../../public/assets/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
