import * as React from "react";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "./routes";
import img from "../assets/restauranfood.jpg";

interface IHeroProps {}

export const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <div className="hero">
      <div className="content">
        <div className="container">
          <div className="text">
            <h1>Little lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are family woned Mediterranean restraunt, focused on
              traditional recepies servved with a modern twist.
            </p>
            <ButtonLink to={ROUTES.reserve}>Reserve a table</ButtonLink>
          </div>
          <img src={img} alt="hero" />
        </div>
      </div>
    </div>
  );
};
