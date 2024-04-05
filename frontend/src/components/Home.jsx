import React from "react";
import Members from "../miniComponents/Members";
import Qualities from "../miniComponents/Qualities";
import Hero from "../miniComponents/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Members />
      <Qualities />
    </div>
  );
};

export default Home;
