import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-button-group">
        <div className="footer-button">
          <button>Sign Out</button>
        </div>
        <div className="footer-button">
          <button>Create Deal</button>
        </div>
        <div className="footer-button">
          <button>Deals</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
