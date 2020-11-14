import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import {useSelector} from "react-redux";
import defaultImg from "images/user.png";
import {FaTimes} from "react-icons/fa"
import "css/modal.scss";
import "css/common.scss";
import "css/mypage.scss";

function Profile(props) {


  
  var UserInfo = useSelector(state => state.user);
  var isDefault = UserInfo.userImg;
  var ProfileImg = `http://127.0.0.1:5000${UserInfo.userImg}`;
  var UserName = UserInfo.userName;
  var JourneyType = UserInfo.journeyType;
  var LifeStyle = UserInfo.lifeStyle;

  const [FollowVisible, setFollowVisible] = useState(false);

  if (isDefault === "default") {
    ProfileImg = defaultImg;
  }

  const onClickEdit = () => {
    props.push("/mypage/profile");
  }

  const openFollowModal = () => {
    setFollowVisible(true);
  }

  const closeFollowModal = () => {
    setFollowVisible(false);
  }
  
  return (
    <>
        <div className="mypage-info">
          <img className="mypage-profile-img" src={ProfileImg} alt="userprofile" />
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <span className="mypage-username">{UserName}</span>
              <button className="mypage-profile-edit-btn" onClick={onClickEdit}>프로필편집</button>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text follow" onClick={openFollowModal}>팔로워</span>
              <Modal
                isOpen={FollowVisible}
                onRequestClose={closeFollowModal}
                className="common-modal"
                overlayClassName="common-modal-overlay"
                contentLabel="Follow Modal"
              >
                <div className="common-modal-header">
                  <span className="common-modal-title">팔로우</span>
                  <span className="common-modal-close" onClick={closeFollowModal}><FaTimes /></span>
                </div>
                
                <div className="modal-follow-container">
                  <div className="modal-follow-item">
                    <div className="modal-follow-user">
                      <img className="follow-profile-img" src={defaultImg} alt="userprofile"/>
                      <div className="follow-name">name</div>
                    </div>
                    <button>팔로우</button>
                  </div>
                </div>
              </Modal>
              <span className="mypage-profile-text margin">1000</span>
              <span className="mypage-profile-text follow" onClick={openFollowModal}>팔로잉</span>
              <span className="mypage-profile-text">1000</span>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text">Journey Type</span>
              <span className="common-category-badge yellow">{JourneyType}</span>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text">Life Style</span>
              <span className="common-category-badge purple">{LifeStyle}</span>
            </div>
          </div>
        </div>
    </>
  );
}

export default Profile;

 