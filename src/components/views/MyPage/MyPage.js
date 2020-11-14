import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { withRouter, useLocation } from "react-router-dom";
import MainHeader from "components/views/Header/MainHeader";
import JourneyThumb from "components/views/Journey/JourneyThumb";
import Profile from "components/views/MyPage/Profile";
import ProfileEdit from "components/views/MyPage/ProfileEdit";
import "css/modal.scss";
import "css/common.scss";



function MyPage(props){

  const location = useLocation();
  const Mode = useSelector(state => state.user.editMode);
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
      <MainHeader />
      {location.pathname === "/mypage" && <Profile push={props.history.push}/>}
      {location.pathname === "/mypage/profile" && <ProfileEdit push={props.history.push} />}
      {location.pathname === "/mypage" && <div className="mypage-container">
      <div className="common-catergory">팔로우</div>
      <div className="common-journey">
        {MyJour.map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.name} category={journey.category} accompany={journey.accompany} img={journey.img} key={index}/>
          );
        })}
      </div>
    </div>}
    </>
  );
}

export default withRouter(MyPage);

 