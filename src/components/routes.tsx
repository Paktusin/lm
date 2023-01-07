import { RouteProps } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Reserve } from "./Reserve";

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
  { path: ROUTES.reserve, element: <Reserve />, name: "Resevations" },
  { path: ROUTES.order, name: "Order Online" },
  { path: ROUTES.login, name: "Login" },
];
