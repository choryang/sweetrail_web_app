import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
import userimg from "images/user.png";
import "css/common.scss";

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
    <div className="common-header-container">
      <div className="common-header">
        <Link to={"/main"}><img className="logo" src={logo} alt="logo"/></Link>
        <ul className="dropdown">
          <li>
            <img className="user" src={userimg} alt="userprofile"/>
            <ul className="dropdown contents">
              <li><Link to={"/mypage"}><div>마이페이지</div></Link></li>
              <li><Link to={"/mypage"}><div>스크랩</div></Link></li>
              <li><div onClick={onClick}>로그아웃</div></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
