import React from "react";

const Footer = () => {
  return (
    <footer>
      <h3>Shop &copy; {`${new Date().getFullYear()}`}</h3>
      <p>All copy right reserved</p>
    </footer>
  );
};

export default Footer;
