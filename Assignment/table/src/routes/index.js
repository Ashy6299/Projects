import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";
import FormPage from "../Pages/FormPage";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/SignUp", component: SignUp },
  { path: "/LoginPage", component: LoginPage },
  { path: "/FormPage", component: FormPage },
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
