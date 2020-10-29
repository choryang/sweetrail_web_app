import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { journeyMain } from "_actions/journey_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/MyPage/JourneyThumb"
import example from "images/mainboat.png"
import example2 from "images/mainbeach.jpg"

function MainPage() {
  const [PublicJour, setPublicJour] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(journeyMain()).then((response) => {
      setPublicJour(response.payload);
    });
  }, []);

  return (
    <>
    <div className="main-background">
      <MainNav />
      <h1>This is the Main Screen</h1>
    </div>
    <div className="main-container">
      <div className="common-catergory">추천</div>
      <div className="main-journey">
        <div className="main-journey item">
          <img src={example} alt="example"/>
        </div>
        <div className="main-journey item">
          <img src={example2} alt="example"/>
        </div>
      </div>
    </div>
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

export default MainPage;

// {PublicJour.map((publicJour, index) => {
//   return (
//     <JourneyThumb id={publicJour.id} name={publicJour.name} type={publicJour.type} accompany={publicJour.accompany} key={index}/>
//  );
// })} 