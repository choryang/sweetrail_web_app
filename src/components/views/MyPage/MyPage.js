import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { auth } from "_actions/user_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/MyPage/JourneyThumb";
import { journeyMypage } from "_actions/journey_action";



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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h2>마이페이지</h2>
        <h3>{UserName}</h3>
        <img
          className="profileImg"
          src="https://cdn.onlinewebfonts.com/svg/img_191958.png"
          alt="profile"
        />
        <div className="buttonContainer">
          <button>private</button>
          <button>public</button>
        </div>
        <div className="journeyContainer">
          {MyJour.map((journey, index) => {
            return (
              <JourneyThumb id={journey.id} name={journey.name} type={journey.type} accompany={journey.accompany} key={index}/>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyPage;
