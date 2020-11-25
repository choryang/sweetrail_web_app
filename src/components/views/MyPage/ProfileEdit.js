import React, { useState, useEffect} from "react";
import axios from "axios";
import Modal from 'react-modal';
import {withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { profileCancel, profileEditProcess } from "_actions/user_action";
import MainHeader from "components/views/Header/MainHeader";
import {FaTimes} from "react-icons/fa";
import defaultImg from "images/user.png";
import "css/modal.scss";
import { NextButton } from "nuka-carousel";



function ProfileEdit(props) {

  const dispatch = useDispatch();
  var UserInfo = useSelector(state => state.user);
  const { UserId } = UserInfo.userId;
  const [UserName, setUserName] = useState(UserInfo.userName);
  const [JourneyType, setJourneyType] = useState(UserInfo.journeyType);
  const [LifeStyle, setLifeStyle] = useState(UserInfo.lifeStyle);

  const [File, setFile] = useState(null);
  const [Default, setDefault] = useState(false);
  const [ImgUrl, setImgUrl] = useState("default");
  const [EditImageVisible, setEditImageVisible] = useState(false);
  const [ProfileImg, setProfileImg] = useState(process.env.REACT_APP_IMAGE_URL + UserInfo.userImg);

  const defaultImage = () => {
    setDefault("true");
    setProfileImg(process.env.REACT_APP_IMAGE_URL + `image/profile/default.png`);
    setEditImageVisible(false);
  }

  const onChangeImg = (e) => {
    setDefault("false");
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
    props.history.push(`/mypage/${UserName}`);
  }

  const onChangeText = (e) => {
    if (e.currentTarget.name === "UserName") {
      setUserName(e.currentTarget.value);
    } else if (e.currentTarget.name === "LifeStyle") {
      setLifeStyle(e.currentTarget.value);
    } else if (e.currentTarget.name === "JourneyType") {
      setJourneyType(e.currentTarget.value);
    }
  };

  function onClickEditProfile () {
    // const formData = new FormData();
    // formData.append("userImg", File);
    // formData.append("userId", UserInfo.userId);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data"
    //   }
    // };
    // axios.post("/api/user/profile-upload", formData, config)
    // .then(response => response.data );
    let body = {
      id: UserInfo.userId
    }
    dispatch(profileEditProcess(body));
    
    // props.history.push(`/mypage/${UserName}`);
  }

  // function setProfile (path) {
    
  // }

  return (
    <>
    <MainHeader />
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
                <input type="file" name="userImg" id="profile" hidden={true} onChange={onChangeImg}></input>
              </div>
              <div className="common-modal-header">
                <span className="common-modal-title red" onClick={defaultImage}>기본 이미지로 변경</span>
              </div>
            </Modal>
          </div>
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <input className="mypage-username edit" type="text" name="UserName" value={UserName} onChange={onChangeText}></input>
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

export default withRouter(ProfileEdit);

 