import React from "react";
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src="/logo-white.png" alt="logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
