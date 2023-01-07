import * as React from "react";
import logo from "../assets/Logo.svg";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { useEffect } from "react";
import clsx from "clsx";

interface INavProps {}

export const Nav: React.FC<INavProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const clickOutside = React.useCallback((e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".menu")) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [clickOutside]);

  return (
    <nav className="container">
      <img src={logo} alt="logo" />

      <div className={clsx("menu", { open })} onClick={() => setOpen(!open)}>
        <div className="links">
          {routes.map((route) => (
            <NavLink key={route.name} to={route.path || "/404"}>
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
