import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <>
      <Link to={"/"}>Movie  </Link>
      <Link to={"/login"}>LOG IN</Link>
    </>
  );
}

export default withRouter(NavBar);
