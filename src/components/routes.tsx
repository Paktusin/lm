import { RouteProps } from "react-router-dom";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Order } from "./Order";
import { About } from "./Reviews copy";

export enum ROUTES {
  home = "/",
  about = "/about",
  menu = "/menu",
  reserve = "/reserve",
  order = "/order",
  login = "/login",
}

export const routes: (Partial<RouteProps> & { name: string })[] = [
  { path: ROUTES.home, element: <Home />, name: "Home" },
  { path: ROUTES.about, element: <About />, name: "About" },
  { path: ROUTES.menu, element: <Menu />, name: "Menu" },
  { path: ROUTES.reserve, name: "Resevations" },
  { path: ROUTES.order, element: <Order />, name: "Order Online" },
  { path: ROUTES.login, name: "Login" },
];
