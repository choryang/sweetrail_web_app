import React from "react";
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
        <h3>유저네임</h3>
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
            return <JourneyThumb image={journey.img} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MyPage;
