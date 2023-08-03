import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlocalContext } from "./context";

const Hero = () => {
  const data = useGlocalContext();
  console.log(data);
  return <h2>hero component</h2>;
};

export default Hero;
