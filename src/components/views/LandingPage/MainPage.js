import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { journeyMain } from "_actions/journey_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/MyPage/JourneyThumb"
import { Row } from "antd";

function MainPage() {
  const [PublicJour, setPublicJour] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(journeyMain()).then((response) => {
      console.log(response.payload);
      setPublicJour(response.payload);
    });
  }, [])

  return (
    <>
      <MainNav />
      <div>
        <h2>메인페이지</h2>
        <Link to={"/mypage"}>마이페이지로 이동</Link>
        
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        {PublicJour.map((publicJour, index) => {
            return (
            <JourneyThumb name={publicJour.name} type={publicJour.type} accompany={publicJour.accompany} key={index}/>
      
           );
          })} 
      </div>
      
        
      
    </>
  );
}

export default MainPage;
