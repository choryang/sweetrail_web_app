import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar(props) {
  const onClick = () => {
    axios.get("/api/user/logout").then((reponse) => {
      if (reponse.data.success) {
        alert("로그아웃 되었습니다.");
        props.history.push("/");
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
    });
  };

  return (
    <>
      <Link to={"/main"}>Movie</Link>
      <button onClick={onClick}>logout</button>
    </>
  );
}

export default withRouter(NavBar);
