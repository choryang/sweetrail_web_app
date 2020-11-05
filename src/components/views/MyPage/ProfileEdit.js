import React from 'react';
import MainNav from "components/views/NavBar/MainNav";

function ProfileEdit() {
    return (
        <>
            <MainNav />
            <div className="common-background">
                <div className="mypage-info">
                <div className="mypage-profile-img"></div>
                <div className="mypage-profile-contents">
                    <div>
                    <span className="mypage-username">Username</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProfileEdit;
