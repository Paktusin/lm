import * as React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

interface ILayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
