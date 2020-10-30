import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { journeyMain } from "_actions/journey_action";
import MainNav from "components/views/NavBar/MainNav";
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
      <MainNav />
      <p className="main-title">This is the Main Screen</p>
      <p className="main-article">If you want to ajdfel dad doogkde kdiae gjklsrdk.<br/>If you want to ajdfel dad doogkde kdiae gjklsrdka elfise slfidle.<br/>If you want to ajdfel dad.</p>
    </div>
    <div className="main-container">
      <div className="common-catergory">추천</div>
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
      <div className="common-catergory">팔로우</div>
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