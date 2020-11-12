import React, {useState} from "react";
import Modal from 'react-modal';
import MainHeader from "components/views/Header/MainHeader";
import {FaTimes} from "react-icons/fa"
import userimg from "images/user.png";
import pin from "images/pin.png";
import "css/modal.scss";


function ProfileEdit(props) {

  const [EditImageVisible, setEditImageVisible] = useState(false);
  const [Img, setImg] = useState(pin);
  //const [File, setFile] = useState(null);

  const openEditImage = () => {
    setEditImageVisible(true);
  }

  const closeEditImage = () => {
    setEditImageVisible(false);
  }

  const defaultImage = () => {
    setImg(userimg);
  }

  const uploadImage = () => {
    document.getElementById("profile").click();
  }

  const onChange = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
    setImg(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <>
      <MainHeader />
        <div className="mypage-info">
          <img className="mypage-profile-img edit" src={Img} alt="userprofile" onClick={openEditImage} />
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
              <input type="file" id="profile" hidden="true" onChange={onChange}></input>
            </div>
            <div className="common-modal-header">
              <span className="common-modal-title red" onClick={defaultImage}>기본 이미지로 변경</span>
            </div>
          </Modal>
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <span className="mypage-username">Username</span>
            </div>
          </div>
        </div>
      <div className="mypage-container">
      <div className="common-catergory">프로필 편집</div>
    </div>
    </>
  );
}

export default ProfileEdit;

 