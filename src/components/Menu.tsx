import * as React from "react";
import { Link } from "react-router-dom";
import { Dish, menu } from "../menu";
import "./Menu.scss";
import { ROUTES } from "./routes";

interface IMenuProps {}

export const Menu: React.FC<IMenuProps> = (props) => {
  return (
    <div className="menu">
      {menu.map((dish, index) => (
        <DishCard key={index} dish={dish} />
      ))}
    </div>
  );
};

export const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <article className="dish">
      <img src={dish.img} alt={dish.name} />
      <div className="content">
        <div className="title">
          <h3>{dish.name}</h3>
          <span className="price">$ {dish.price}</span>
        </div>
        <p>{dish.descr}</p>
        <Link to={ROUTES.order} className="order">
          Order a delivery
        </Link>
      </div>
    </article>
  );
};
