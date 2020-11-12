import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { journeyMain } from "_actions/journey_action";
import MainHeader from "components/views/Header/MainHeader";
import JourneyThumb from "components/views/Journey/JourneyThumb"
import example from "images/mainboat.png"
import example2 from "images/mainbeach.jpg"

function MainPage() {
  //const [PublicJour, setPublicJour] = useState([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(journeyMain()).then((response) => {
  //     setPublicJour(response.payload);
  //   });
  // }, []);

  const publicJour = [
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
    <div className="main-background">
      <MainHeader />
      <div className="main-content">
        <p className="main-title">This is the<br/> Main Screen</p>
        <p className="main-article">나의 한걸음 한걸음을 기록하고,<br/>누군가와 일상, 여행, 관심을 공유하고 싶나요?<br/></p>
        <div className="main-search">
          <span><i className="fa fa-search"></i></span>
          <input type="text" placeholder="search Post/User"/>
        </div>
      </div>
    </div>
    <div className="main-container">
      <div className="common-catergory">JOURNEY FOR YOU</div>
      <div className="main-journey">
        <div className="main-journey item">
          <img src={example} alt="example"/>
        </div>
        <div className="main-journey item">
          <img src={example2} alt="example"/>
        </div>
      </div>
    </div>
    <div className="main-container">
      <div className="common-catergory">FRIEND'S JOURNEY</div>
      <div className="common-journey">
        {publicJour.map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.name} category={journey.category} accompany={journey.accompany} img={journey.img} key={index}/>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default MainPage;

// {PublicJour.map((publicJour, index) => {
//   return (
//     <JourneyThumb id={publicJour.id} name={publicJour.name} type={publicJour.type} accompany={publicJour.accompany} key={index}/>
//  );
// })} 