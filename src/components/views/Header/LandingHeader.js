import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "css/index.scss";
import logo from "images/logo.png";

function LandingHeader() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to={"/"}><img className="logo" src={logo} alt="logo"/></Link>
      <div className="header-right">
        {location.pathname === "/" && <Link to={"/login"}><button className="main-whitebtn">로그인</button></Link>}
        {location.pathname === "/" && <Link to={"/register"}><button className="main-bluebtn">회원가입</button></Link>}
      </div>
    </div>
  );
}

export default withRouter(LandingHeader);
