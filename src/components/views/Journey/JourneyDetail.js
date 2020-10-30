import React, {useEffect, useState} from "react";
import Carousel from 'nuka-carousel';
import {useDispatch} from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import { journeyDetail } from "_actions/journey_action";
import MainNav from "components/views/NavBar/MainNav";
import userimg from "images/user.png";
import pin from "images/pin.png";

function JourneyDetail() {

  // const { id } = useParams();
  // const [JourInfo, setJourInfo] = useState({});
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(journeyDetail(id)).then((response) => {
  //     setJourInfo(response.payload);
  //   });
  // }, []);

  const JourInfo = {
    id: 1,
    name: "Still Stand Tall1",
    username: "choryang",
    category: "geek",
    accompany: "",
    img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque pharetra, urna varius semper fermentum, nulla nulla venenatis ante, ac gravida augue metus vitae nunc. Donec arcu sem, porta eget diam iaculis, pla cerat molestie odio. Mauris suscipit condimentum quam a eleifend. Fusce aliquet, massa ut euismod tincidunt, magna nibh m",
  }

  const places = [
    {
      id: 1,
      name: "Santorini",
    },
    {
      id: 2,
      name: "Santorini",
    },
    {
      id: 3,
      name: "Santorini",
    },
    {
      id: 4,
      name: "Santorini",
    },
    {
      id: 5,
      name: "Santorini",
    },
    {
      id: 6,
      name: "Santorini",
    },
    {
      id: 7,
      name: "Santorini",
    },
    {
      id: 8,
      name: "Santorini",
    },
    {
      id: 9,
      name: "Santorini",
    },
    {
      id: 10,
      name: "Santorini",
    },
    {
      id: 11,
      name: "Santorini",
    },
    {
      id: 12,
      name: "Santorini",
    },
    {
      id: 13,
      name: "Santorini",
    },
    {
      id: 14,
      name: "Santorini",
    },
    {
      id: 15,
      name: "Santorini",
    },
    {
      id: 16,
      name: "Santorini",
    },
    {
      id: 17,
      name: "Santorini",
    },
  ]

  const images = [
    {
      id: 1,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 2,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 3,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 4,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 5,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 6,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 7,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 8,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 9,
      path: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      id: 10,
      path: "https://s23514.pcdn.co/wp-content/uploads/2018/06/reasons_to_visit_santorini-1140x1710.jpg",
    },
  ]

  return (
    <>
      <MainNav />
      <div className="journey-detail-container">
        <div className="journey-detail-title">
          <img src={JourInfo.img} alt="title" />
          <p className="journey-detail-name">{JourInfo.name}</p>
          <p className="journey-detail-username">Created by {JourInfo.username}</p>
        </div>
        <div className="journey-detail-content">
          <h1>Path</h1>
          <div className="journey-detail-path-box">
            {places.map((place) => {
              return(
              <div className="journey-detail-path-item">
                <img className="journey-detail-path-pin" src={pin} alt="pin" />
                <div className="journey-detail-path-line"></div>
                <p>{place.name}</p>
              </div>
              );
            })}
          </div>
        </div>
        <div className="journey-detail-content">
          <h1>Summary</h1>
          <Carousel className="journey-detail-carousel" wrapAround="true" heightMode="first" enableKeyboardControls="true" width="80%">
            {images.map((image) => {
              return (
                <img src={image.path} alt="slide"/>
              );
            })}
          </Carousel>
          <p className="journey-detail-summary">
            {JourInfo.summary}
          </p>
        </div>
      </div>
    </>
  );
}

export default withRouter(JourneyDetail);
