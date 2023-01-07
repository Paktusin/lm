import * as React from "react";

interface ILayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return;
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>;
};
