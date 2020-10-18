import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { auth } from "_actions/user_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/MyPage/JourneyThumb";

const journeys = [
  {
    id: 1,
    img: "https://i.ytimg.com/vi/La2fCRrtz5Q/maxresdefault.jpg",
  },
  {
    id: 2,
    img: "https://i.ytimg.com/vi/La2fCRrtz5Q/maxresdefault.jpg",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/La2fCRrtz5Q/maxresdefault.jpg",
  },
];

function MyPage() {

  const [UserName, setUserName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth()).then((response) => {
      setUserName(response.payload.name);
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
          {journeys.map((journey, index) => {
            return (
            <Link to={"/mypage/journey"}>
              <JourneyThumb image={journey.img} key={index} />
            </Link>);
          })}
        </div>
      </div>
    </>
  );
}

export default MyPage;
