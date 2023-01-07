import * as React from "react";
import logo from "../assets/Logo.svg";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";

interface INavProps {}

export const Nav: React.FC<INavProps> = (props) => {
  return (
    <nav className="container">
      <img src={logo} alt="logo" />
      {routes.map((route) => (
        <NavLink key={route.name} to={route.path || "/404"}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
};
