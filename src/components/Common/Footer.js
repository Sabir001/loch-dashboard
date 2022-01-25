import React from "react";
import { clearUserLocalStorage } from "../../utils/helper";
import "./Footer.css";

function Footer({ history }) {
  const handleSignOut = () => {
    clearUserLocalStorage();
    history.push("/auth/login");
  };
  return (
    <footer className="footer">
      <div className="footer-button-group">
        <div className="footer-button" onClick={handleSignOut}>
          <button className="btn-footer">Sign Out</button>
        </div>
        <div className="footer-button">
          <button className="btn-footer">Create Deal</button>
        </div>
        <div className="footer-button">
          <button className="btn-footer">Deals</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
