import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router/RouterDefault";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};
