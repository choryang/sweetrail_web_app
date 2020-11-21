import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { profileEdit } from "_actions/user_action";
import "css/mypage.scss";
import FollowerModal from "components/views/MyPage/FollowerModal";
import FollowingModal from "components/views/MyPage/FollowingModal";
import { countFollower, countFollowing } from "_actions/follow_action";
import defaultImg from "images/user.png";


function Profile(props) {


  const dispatch = useDispatch();
  
  
  const UserInfo = useSelector(state => state.user);
 

  const [FollowingOpen, setFollowingOpen] = useState(false);
  const [FollowerOpen, setFollowerOpen] = useState(false);
  const [Following, setFollowing] = useState(0);
  const [Follower, setFollower] = useState(0);
  const ProfileImg = process.env.REACT_APP_IMAGE_URL + UserInfo.userImg;
  const UserName = UserInfo.userName;
  const JourneyType = UserInfo.journeyType;
  const LifeStyle = UserInfo.lifeStyle;


  const onClickEdit = (e) => {
    e.preventDefault();
    dispatch(profileEdit());
    props.replace(`/mypage/${UserName}/profile`);
  }

  useEffect(() => {
    dispatch(countFollowing(UserInfo.userId)).then((response) => setFollowing(response.payload.count));
    dispatch(countFollower(UserInfo.userId)).then((response) => setFollower(response.payload.count));
  },[UserInfo.isAuth])
    

  
  return (
    <>
        <div className="mypage-info">
          <img className="mypage-profile-img" src={ UserInfo.userImg ? ProfileImg : defaultImg} alt="userprofile" />
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <span className="mypage-username">{UserName}</span>
              <button className="mypage-profile-edit-btn" onClick={onClickEdit}>프로필편집</button>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text follow" onClick={() => {setFollowerOpen(true)}}>팔로워</span>
              <FollowerModal isOpen={FollowerOpen} close={() => {setFollowerOpen(false)}} userId={UserInfo.userId}/>
              <span className="mypage-profile-text margin">{Follower}</span>
              <span className="mypage-profile-text follow" onClick={() => {setFollowingOpen(true)}}>팔로잉</span>
              <FollowingModal isOpen={FollowingOpen} close={() => {setFollowingOpen(false)}} userId={UserInfo.userId}/>
              <span className="mypage-profile-text">{Following}</span>
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

 