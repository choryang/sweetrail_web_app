import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { withRouter } from "react-router-dom";
import { auth } from "_actions/user_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/Journey/JourneyThumb";
import { journeyMypage } from "_actions/journey_action";
import example from "images/mainboat.png"
import example2 from "images/mainbeach.jpg"



function MyPage(props) {

  // const [UserName, setUserName] = useState("");
  // const [MyJour, setMyJour] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(auth()).then((response) => {
  //     setUserName(response.payload.name);
  //   });

  //   dispatch(journeyMypage()).then((response) => {
  //     setMyJour(response.payload);
  //   })
    
  // }, []);

  const onClickEdit = () => {
    props.history.push("mypage/profile-edit");
  }

  const MyJour = [
    { 
      id: 1,
      name: "Still Stand Tall1",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 2,
      name: "Still Stand Tall2",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 3,
      name: "Still Stand Tall3",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 4,
      name: "Still Stand Tall4",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 5,
      name: "Still Stand Tall5",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 6,
      name: "Still Stand Tall6",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 7,
      name: "Still Stand Tall7",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },

  ];

  return (
    <>
      <MainNav />
      <div className="common-background">
        <div className="mypage-info">
          <div className="mypage-profile-img"></div>
          <div className="mypage-profile-contents">
            <div>
              <span className="mypage-username">Username</span>
              <button className="mypage-profile-edit" onClick={onClickEdit}>프로필편집</button>
            </div>
            <div>
              <span>팔로우</span>
              <span>1000</span>
              <span>팔로우</span>
              <span>1000</span>
            </div>
            <div>
              <span>Journey Type</span>
              <span>1000</span>
            </div>
            <div>
              <span>Life Style</span>
              <span>1000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mypage-container">
      <div className="common-catergory">팔로우</div>
      <div className="common-journey">
        {MyJour.map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.name} category={journey.category} accompany={journey.accompany} img={journey.img} key={index}/>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default withRouter(MyPage);
