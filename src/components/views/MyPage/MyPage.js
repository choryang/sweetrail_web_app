import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { withRouter, useLocation, useParams } from "react-router-dom";
import {journeyMypage} from "_actions/journey_action";
import {auth} from "_actions/user_action"
import MainHeader from "components/views/Header/MainHeader";
import JourneyThumb from "components/views/Journey/JourneyThumb";
import Profile from "components/views/MyPage/Profile";
import ProfileEdit from "components/views/MyPage/ProfileEdit";
import "css/modal.scss";
import "css/common.scss";



function MyPage(props){

  const isAuth = useSelector(state => state.user.isAuth);
  const id = useSelector(state => state.user.userId);
  const { username } = useParams();
  const { scrap } = useParams();
  const [MyJourInfo, setMyJourInfo] = useState([]);
  const dispatch = useDispatch();

  const openTab = (e) => {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("common-journey");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("common-catergory");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(e.currentTarget.name).style.display = "block";
    e.currentTarget.className += " active";
  }

  useEffect(() => {
    if (scrap === "scrap") {
      document.getElementById("scrap").style.display = "block";
      document.getElementsByName("scrap")[0].className += " active";
    }
    else {
      document.getElementById("public").style.display = "block";
      document.getElementsByName("public")[0].className += " active";
    }
    dispatch(journeyMypage(id)).then((response) => {
      setMyJourInfo(response.payload);
    });
  },[isAuth]);

  

  return (
    <>
      <MainHeader />
      <Profile replace={props.history.replace} username={username}/>
      <div className="mypage-container">
      <div className="mypage-tab">
        <button className="common-catergory" name="public" onClick={openTab}>공개</button>
        <button className="common-catergory" name="private" onClick={openTab}>비공개</button>
        <button className="common-catergory" name="scrap" onClick={openTab}>스크랩</button>
      </div>
      <div id="public" className="common-journey tab-content">
        {MyJourInfo.filter((MyJourInfo) => MyJourInfo.sharedFlag).map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.journeyName} type={journey.type} accompany={journey.accompany} author={journey.userName} authorId = {journey.userId} img={journey.image} key={index}/>
          );
        })}
      </div>
      <div id="private" className="common-journey tab-content">
        {MyJourInfo.filter((MyJourInfo) => !MyJourInfo.sharedFlag).map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.journeyName} type={journey.type} accompany={journey.accompany} author={journey.userName} authorId = {journey.userId} img={journey.image} key={index}/>
          );
        })}
      </div>
      <div id="scrap" className="common-journey tab-content">
        {MyJourInfo.filter((MyJourInfo) => MyJourInfo.sharedFlag).map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.journeyName} type={journey.type} accompany={journey.accompany} author={journey.userName} authorId = {journey.userId} img={journey.image} key={index}/>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default withRouter(MyPage);

 