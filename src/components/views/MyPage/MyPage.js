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
  const [MyJourInfo, setMyJourInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(journeyMypage(id)).then((response) => {
      setMyJourInfo(response.payload);
    });
  },[isAuth]);

  

  return (
    <>
      <MainHeader />
      <Profile replace={props.history.replace} username={username}/>
      <div className="mypage-container">
      <div className="common-catergory">My Journey</div>
      <div className="common-journey">
        {MyJourInfo.map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.journeyName} type={journey.type} accompany={journey.accompany} author={journey.userName} authorId = {journey.userId} key={index}/>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default withRouter(MyPage);

 