import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import {useSelector, useDispatch} from "react-redux";
import { getUserInfo } from "_actions/user_action";
import defaultImg from "images/user.png";
import {FaTimes} from "react-icons/fa"
import BlueBtn from "components/fragments/BlueBtn";
import WhiteBtn from "components/fragments/WhiteBtn";
import { getFollow, setFollow } from "_actions/follow_action";
import "css/modal.scss";
import "css/common.scss";
import "css/mypage.scss";


function OtherProfile(props) {


  
  
  var UserInfo = useSelector(state => state.user);
  var ProfileImg = UserInfo.otheruserImg;
  var UserName = UserInfo.otheruserName;
  var JourneyType = UserInfo.otherjourneyType;
  var LifeStyle = UserInfo.otherlifeStyle;

  const [FollowVisible, setFollowVisible] = useState(false);
  const [IsFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();

  const openFollowModal = () => {
    setFollowVisible(true);
  }

  const closeFollowModal = () => {
    setFollowVisible(false);
  }

  const onClickSetFollow = () => {
    const body = {
      id: UserInfo.userId,
      otherId: UserInfo.otheruserId
    }
    dispatch(setFollow(body)).then((response) => setIsFollow(response.payload.isFollow));
  }
  
  if(ProfileImg === "default") {
    ProfileImg = defaultImg;
  }
  else {
    ProfileImg = process.env.REACT_APP_IMAGE_URL + ProfileImg;
  }

  useEffect(() => {
    const body = {
      id: UserInfo.userId,
      otherId: UserInfo.otheruserId
    }
    dispatch(getFollow(body)).then((response) => setIsFollow(response.payload.isFollow));
    dispatch(getUserInfo(UserInfo.otheruserId));
  }, []);

  
  return (
    <>
        <div className="mypage-info">
          <img className="mypage-profile-img" src={ProfileImg} alt="userprofile" />
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <span className="mypage-username">{UserName}</span>
              {IsFollow ? <BlueBtn onClick/> : <WhiteBtn onClick={onClickSetFollow}/>}
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
                    <button className="blue-btn">팔로잉</button>
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

export default OtherProfile;

 