import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/home";
import Contacts from "../Contact/Contact";

export const AllRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/contacts" element={ <Contacts /> } />
    </Routes>

  );
};
