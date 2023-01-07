import React from "react";
import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./components/routes";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {routes
            .filter((route) => route.path)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
