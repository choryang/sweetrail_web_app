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
  var defaultFlag = false;


  const [File, setFile] = useState(null);
  const [ProfileImg, setProfileImg] = useState(UserInfo.userImg);
  const [EditImageVisible, setEditImageVisible] = useState(false);
  const defaultImage = () => {
    defaultFlag = true;
    setProfileImg(defaultImg);
    setEditImageVisible(false);
  }

  const onChangeImg = (e) => {
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
    props.push("/mypage");
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
    if (!defaultFlag) {
      formData.append("userImg", File);
    }
    formData.append("userId", UserId);
    dispatch(profileEditProcess(formData));
    props.push("/mypage");
  }

  useEffect(() => {
    if (ProfileImg === "default") {
      setProfileImg(defaultImg);
    }
    else if (ProfileImg === UserInfo.userImg){
      setProfileImg(`http://127.0.0.1:5000${UserInfo.userImg}`);
    }
  }, [ProfileImg]);


  return (
    <>
        <div className="mypage-info">
          <div className="mypage-profile-edit">
            <img className="mypage-profile-img" src={ProfileImg} alt="userprofile" />
            <button className="mypage-profile-edit-btn" onClick={openEditImage}>프로필 사진 변경</button>
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
              <input className="mypage-username"type="text" name="UserName" value={UserName} onChange={onChangeText}></input>
              <button type="submit" className="blue-btn" onClick={onClickEditProfile}>저장</button>
              <button className="mypage-profile-edit-btn" onClick={onClickBackProfile}>취소</button>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text">Journey Type</span>
              <input className="common-category-badge yellow" type="text" name="JourneyType" value={JourneyType} onChange={onChangeText}></input>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text">Life Style</span>
              <input className="common-category-badge purple" type="text" name="LifeStyle" value={LifeStyle} onChange={onChangeText}></input>
            </div>
          </div>
        </div>
    </>
  );
}

export default ProfileEdit;

 