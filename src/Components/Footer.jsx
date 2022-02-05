import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="Footer__container">
        <h1 className="Footer__title">FastFood</h1>
        <p className="Footer__description">
          FastFood does not have to be junk food
        </p>
        <button type="button" class="btn btn-outline-primary">
          FastFood
        </button>
      </footer>
    </>
  );
};

export default Footer;
