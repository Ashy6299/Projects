import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";
import { CreateAccount } from "../Pages/CreateAccount";
import ViewCentres from "../Pages/ViewCentres";
import CreateCentres from "../Pages/CreateCentres";
import MyHomePage from "../Pages/MyHomePage";

const routes = [
  { path: "/", component: MyHomePage },
  { path: "login", component: Login },
  { path: "/record/:id", component: ProfilePage },
  { path: "createprofile", component: CreateAccount },
  { path: "/viewcentres", component: ViewCentres },
  { path: "/createcentres", component: CreateCentres },
  { path: "/homepage", component: Home},
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
