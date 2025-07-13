// components/Layout.js
import React from "react";
import NavBar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import '../../style/globals.scss'

function Layout() {
  return (
    <div className="layout">
      <main className="layout__main">
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
