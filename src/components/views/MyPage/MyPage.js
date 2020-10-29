import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { auth } from "_actions/user_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/MyPage/JourneyThumb";
import { journeyMypage } from "_actions/journey_action";
import example from "images/mainboat.png"
import example2 from "images/mainbeach.jpg"



function MyPage() {

  const [UserName, setUserName] = useState("");
  const [MyJour, setMyJour] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth()).then((response) => {
      setUserName(response.payload.name);
    });

    dispatch(journeyMypage()).then((response) => {
      setMyJour(response.payload);
    })
    
  }, []);

  return (
    <>
      <MainNav />
      <div className="common-background"></div>
      <div className="profile-img"></div>
      <div className="main-container">
      <div className="common-catergory">팔로우</div>
      <div className="common-journey">
        <div className="common-journey item">
          <img src={example} alt="example"/>
        </div>
        <div className="common-journey item">
          <img src={example} alt="example"/>
        </div>
        <div className="common-journey item">
          <img src={example2} alt="example"/>
        </div>
        <div className="common-journey item">
          <img src={example} alt="example"/>
        </div>
        <div className="common-journey item">
          <img src={example2} alt="example"/>
        </div>
        <div className="common-journey item">
          <img src={example} alt="example"/>
        </div>
        <div className="common-journey item">
          <img src={example} alt="example"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyPage;
