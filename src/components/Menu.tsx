import clsx from "clsx";
import * as React from "react";
import { Link } from "react-router-dom";
import { Dish, menu } from "../menu";
import styles from "./Menu.module.scss";
import { ROUTES } from "./routes";

interface IMenuProps {}

export const Menu: React.FC<IMenuProps> = () => {
  return (
    <div className={clsx("container", styles.menu)}>
      {menu.map((dish, index) => (
        <DishCard key={index} dish={dish} />
      ))}
    </div>
  );
};

export const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <article className={styles.dish}>
      <img src={dish.img} alt={dish.name} />
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{dish.name}</h3>
          <span className={styles.price}>$ {dish.price.toFixed(2)}</span>
        </div>
        <p>{dish.descr}</p>
        <Link to={ROUTES.order} className={styles.order}>
          Order a delivery
        </Link>
      </div>
    </article>
  );
};
