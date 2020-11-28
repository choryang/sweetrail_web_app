import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { journeyMain } from "_actions/journey_action";
import MainHeader from "components/views/Header/MainHeader";
import JourneyThumb from "components/views/Journey/JourneyThumb";
import MainThumb from "components/views/Journey/MainThumb"

function MainPage(props) {
  const [PublicJour, setPublicJour] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  

  
  useEffect(() => {
    dispatch(journeyMain()).then((response) => {
      setPublicJour(response.payload);
    });
  }, [userId]);
  
  return (
    <>
    <div className="main-background">
      <MainHeader />
      <div className="main-content">
        <p className="main-title">This is the<br/> Main Screen</p>
        <p className="main-article">누군가와 일상, 여행, 관심을 공유하고 싶나요?<br/></p>
        <div className="main-search">
          <FaSearch />
          <input type="text" placeholder="search Post/User"/>
        </div>
      </div>
    </div>
    <div className="main-container">
      <div className="common-catergory">JOURNEY FOR YOU</div>
      <div className="main-journey">
        {PublicJour.map((journey, index) => {
          return (
            <MainThumb id={journey.id} name={journey.journeyName} type={journey.type} accompany={journey.accompany} author={journey.userName} authorId = {journey.userId} img={journey.image} key={index}/>
          );
        })}
      </div>
    </div>
    <div className="main-container">
      <div className="common-catergory">FRIEND'S JOURNEY</div>
      <div className="common-journey">
        {PublicJour.map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.journeyName} type={journey.type} accompany={journey.accompany} author={journey.userName} authorId = {journey.userId} img={journey.image} key={index}/>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default withRouter(MainPage);