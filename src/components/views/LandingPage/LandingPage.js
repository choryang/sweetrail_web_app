import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  const onClick = () => {
    axios.get("/api/user/logout").then((reponse) => {
      if (reponse.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>
      <button onClick={onClick}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
