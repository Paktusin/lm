import * as React from "react";
import { Hero } from "./Hero";
import { HighLights } from "./HighLights";
import { Reviews } from "./Reviews";
import "./Home.scss";
import { About } from "./About";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Hero />
      <HighLights />
      <Reviews />
      <About />
    </div>
  );
};
