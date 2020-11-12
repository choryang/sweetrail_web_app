import axios from "axios";
import React, { useState } from "react";
import Modal from 'react-modal';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
import userimg from "images/user.png";
import "css/common.scss";
import "css/modal.scss";

function MainHeader(props) {

  const [ProfileVisible, setProfileVisible] = useState(false);

  // const openProfileModal = () => {
  //   setProfileVisible(true);
  // }

  const closeProfileModal = () => {
    setProfileVisible(false);
  }

  const toggleProfileModal = () => {
    if (ProfileVisible === true) {
      setProfileVisible(false);
    }

    else {
      setProfileVisible(true);
    }
  }


  const onClickLogout = () => {
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
        <img className="user" src={userimg} alt="userprofile" onClick={toggleProfileModal}/>
      </div>
        <Modal
          isOpen={ProfileVisible}
          onRequestClose={closeProfileModal}
          className="modal-profile"
          overlayClassName="modal-profile-overlay"
          contentLabel="main drop Modal"
        >
          <ul className="modal-profile-contents">
            <li><Link to={"/mypage"}><div>마이페이지</div></Link></li>
            <li><Link to={"/mypage"}><div>스크랩</div></Link></li>
            <li><div onClick={onClickLogout}>로그아웃</div></li>
          </ul>
        </Modal>
    </div>
  );
}

export default withRouter(MainHeader);
