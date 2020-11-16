import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import {useSelector, useDispatch} from "react-redux";
import { profileCancel, profileEditProcess } from "_actions/user_action";
import {FaTimes} from "react-icons/fa"
import defaultImg from "images/user.png";
import "css/modal.scss";


function ProfileEdit(props) {

  const dispatch = useDispatch();
  var UserInfo = useSelector(state => state.user);
  var UserId = UserInfo.userId;
  var UserName = UserInfo.userName;
  var JourneyType = UserInfo.journeyType;
  var LifeStyle = UserInfo.lifeStyle;

  const [File, setFile] = useState(null);
  const [EditImageVisible, setEditImageVisible] = useState(false);
  const [DefaultFlag, setDefaultFlag] = useState(false);
  const [ChangeFlag, setChangeFlag] = useState(false);
  const [ProfileImg, setProfileImg] = useState(UserInfo.userImg);

  const defaultImage = () => {
    setDefaultFlag(true);
    setProfileImg(defaultImg);
    setEditImageVisible(false);
  }

  const onChangeImg = (e) => {
    setChangeFlag(true);
    setDefaultFlag(false);
    setFile(e.target.files[0]);
    setProfileImg(URL.createObjectURL(e.target.files[0]));
    setEditImageVisible(false);
  }

  
  const openEditImage = () => {
    setEditImageVisible(true);
  }

  const closeEditImage = () => {
    setEditImageVisible(false);
  }

  const uploadImage = () => {
    document.getElementById("profile").click();
  }

  const onClickBackProfile = () =>{
    dispatch(profileCancel());
  }

  const onChangeText = (e) => {
    if (e.currentTarget.name === "UserName") {
      UserName = e.currentTarget.value;
    } else if (e.currentTarget.name === "LifeStyle") {
      LifeStyle = e.currentTarget.value;
    } else if (e.currentTarget.name === "JourneyType") {
      JourneyType = e.currentTarget.value;
    }
  };

  const onClickEditProfile = () => {
    const formData = new FormData();
    if (!DefaultFlag) {
      if(ChangeFlag) {
        formData.append("userImg", File);
      }
    }
    formData.append("defaultFlag", DefaultFlag);
    formData.append("userId", UserId);
    dispatch(profileEditProcess(formData));
    props.push(`/mypage/${UserName}`);
  }

  
  if (ProfileImg === "default") {
    setProfileImg(defaultImg);
  }
  else if (ProfileImg === UserInfo.userImg){
    setProfileImg(process.env.REACT_APP_IMAGE_URL + UserInfo.userImg);
  }

  return (
    <>
        <div className="mypage-info">
          <div className="mypage-profile-edit">
            <img className="mypage-profile-img edit" src={ProfileImg} alt="userprofile" />
            <button className="mypage-profile-edit-btn img" onClick={openEditImage}>프로필 사진 변경</button>
            <Modal
              isOpen={EditImageVisible}
              onRequestClose={closeEditImage}
              className="common-modal"
              overlayClassName="common-modal-overlay"
              contentLabel="Edit Image Modal"
            >
              <div className="common-modal-header">
                <span className="common-modal-title">프로필 사진 변경</span>
                <span className="common-modal-close" onClick={closeEditImage}><FaTimes /></span>
              </div>
              <div className="common-modal-header">
                <span className="common-modal-title blue" onClick={uploadImage}>사진 업로드</span>
                <input type="file" name="userImg" id="profile" hidden="true" onChange={onChangeImg}></input>
              </div>
              <div className="common-modal-header">
                <span className="common-modal-title red" onClick={defaultImage}>기본 이미지로 변경</span>
              </div>
            </Modal>
          </div>
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <input className="mypage-username edit"type="text" name="UserName" value={UserName} onChange={onChangeText}></input>
            </div>
            <div className="mypage-profile-others edit">
              <span className="mypage-profile-text">Journey Type</span>
              <input type="text" name="JourneyType" value={JourneyType} onChange={onChangeText}></input>
            </div>
            <div className="mypage-profile-others edit">
              <span className="mypage-profile-text">Life Style</span>
              <input type="text" name="LifeStyle" value={LifeStyle} onChange={onChangeText}></input>
            </div>
            <div className="mypage-profile-btn-container">
              <button type="submit" className="blue-btn" onClick={onClickEditProfile}>저장</button>
              <button className="white-btn" onClick={onClickBackProfile}>취소</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default ProfileEdit;

 