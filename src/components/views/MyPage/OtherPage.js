import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { withRouter } from "react-router-dom";
import {journeyOtherpage} from "_actions/journey_action";
import MainHeader from "components/views/Header/MainHeader";
import JourneyThumb from "components/views/Journey/JourneyThumb";
import OtherProfile from "components/views/MyPage/OtherProfile";
import "css/modal.scss";
import "css/common.scss";



function OtherPage(props){

  const id = useSelector(state => state.user.otheruserId);

  const [MyJourInfo, setMyJourInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(journeyOtherpage(id)).then((response) => {
      setMyJourInfo(response.payload);
    });
    window.scrollTo(0,0);
  }, []);
  

  return (
    <>
      <MainHeader />
      <OtherProfile push={props.history.push} />
      <div className="mypage-container">
        <div className="common-catergory">Shared Journey</div>
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

export default withRouter(OtherPage);

 