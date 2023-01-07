import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { routes } from "./routes";
import styles from "./Footer.module.scss";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <img src={logo} alt="logo" />
        <div className={styles.block}>
          <label>Doormat navigation</label>
          {routes.map((route) => (
            <NavLink to={route.path!}>{route.name}</NavLink>
          ))}
        </div>
        <div className={styles.block}>
          <label>Contact</label>
          <div>Adress</div>
          <div>Phone number</div>
          <div>email</div>
        </div>
        <div className={styles.block}>
          <label>Media links</label>
          <div>Adress</div>
          <div>Phone number</div>
          <div>email</div>
        </div>
      </div>
    </footer>
  );
};
