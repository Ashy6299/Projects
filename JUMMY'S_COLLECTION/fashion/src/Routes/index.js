import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Shopping from "../Pages/Shopping";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";

const routes = [
  { path: "/", component: HomePage },
  { path: "/Shopping", component: Shopping },
  { path: "/About", component: About },
  { path: "/Contacts", component: Contacts },
];

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((c) => (
          <Route path={c.path} element={<c.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
