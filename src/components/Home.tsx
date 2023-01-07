import * as React from "react";
import { Hero } from "./Hero";
import { Menu } from "./Highlights";
import { Reviews } from "./Reviews";
import { About } from "./Reviews copy";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <>
      <Hero />
      <Menu />
      <Reviews />
      <About />
    </>
  );
};
