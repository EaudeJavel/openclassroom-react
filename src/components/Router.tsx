// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./Layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/produit/:id" element={<ProductPage />} />
          <Route path="about" element={<About />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
