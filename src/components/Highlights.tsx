import * as React from "react";
import { ButtonLink } from "./ButtonLink";
import { Menu } from "./Menu";
import "./HighLights.scss";
import { ROUTES } from "./routes";

interface IHighLightsProps {}

export const HighLights: React.FC<IHighLightsProps> = (props) => {
  return (
    <section className="highlights container">
      <div className="header">
        <h2>This week specials!</h2> <ButtonLink to={ROUTES.menu}>Online Menu</ButtonLink>
      </div>
      <Menu />
    </section>
  );
};
