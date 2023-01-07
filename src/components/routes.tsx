import { RouteProps } from "react-router-dom";
import { Menu } from "./Highlights";
import { Home } from "./Home";
import { Order } from "./Order";
import { About } from "./Reviews copy";

export const routes: (Partial<RouteProps> & { name: string })[] = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/menu", element: <Menu />, name: "Menu" },
  { name: "Resevations" },
  { path: "/order", element: <Order />, name: "Order Online" },
  { name: "Login" },
];
