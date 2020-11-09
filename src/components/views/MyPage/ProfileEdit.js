import React from "react";
import MainNav from "components/views/NavBar/MainNav";


function ProfileEdit(props) {

  return (
    <>
      <MainNav />
        <div className="mypage-info">
          <div className="mypage-profile-img"></div>
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

 