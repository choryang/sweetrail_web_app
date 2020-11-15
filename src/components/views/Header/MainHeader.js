import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import {useSelector, useDispatch} from "react-redux";
import {setMyPage} from "_actions/user_action"
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
import defaultImg from "images/user.png";
import "css/common.scss";
import "css/modal.scss";

function MainHeader(props) {

  const dispatch = useDispatch();
  var UserInfo = useSelector(state => state.user);
  var ProfileImg = UserInfo.userImg;
  const [ProfileVisible, setProfileVisible] = useState(false);

  
  if(ProfileImg === "default") {
    ProfileImg = defaultImg;
  }
  else {
    ProfileImg = process.env.REACT_APP_IMAGE_URL + ProfileImg;
  }
  

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

  const onClickMypage = () => {
    dispatch(setMyPage());
    props.history.push(`/mypage/${UserInfo.userName}`)
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
        <img className="user" src={ProfileImg} alt="userprofile" onClick={toggleProfileModal}/>
      </div>
        <Modal
          isOpen={ProfileVisible}
          onRequestClose={closeProfileModal}
          className="modal-profile-drop"
          overlayClassName="modal-profile-overlay"
          contentLabel="main drop Modal"
        >
          <ul className="modal-profile-drop-contents">
            <li><div onClick={onClickMypage}>마이페이지</div></li>
            <li><Link to={"/mypage"}><div>스크랩</div></Link></li>
            <li><div onClick={onClickLogout}>로그아웃</div></li>
          </ul>
        </Modal>
    </div>
  );
}

export default withRouter(MainHeader);
