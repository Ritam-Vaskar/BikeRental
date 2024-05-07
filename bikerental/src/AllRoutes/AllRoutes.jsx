import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/home";
import Contacts from "../Contact/Contact";
import Service from "../Service/Service";
import About from "../About/about";

export const AllRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/contacts" element={ <Contacts /> } />
      <Route path="/service" element={ <Service /> } />
      <Route path="/about" element={ <About /> } />
    </Routes>

  );
};
