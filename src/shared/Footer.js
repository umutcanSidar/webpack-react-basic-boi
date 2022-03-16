import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const login = useSelector((state) => state.login);
  const { userInfo, loading, error } = login;
  return (
    <footer
      className="primaryBgColor"
      style={userInfo ? { display: "block" } : { display: "none" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="secondryColor">F LOGO</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
