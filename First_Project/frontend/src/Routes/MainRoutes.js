import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "login", component: LoginPage },
  { path: "signup", component: SignUpPage },
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
