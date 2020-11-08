import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import Carousel from 'nuka-carousel';
import {useDispatch} from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import { journeyDetail } from "_actions/journey_action";
import MainNav from "components/views/NavBar/MainNav";
import userimg from "images/user.png";
import pin from "images/pin.png";
import "css/journey.scss";

function JourneyDetail(props) {

  // const { id } = useParams();
  // const [JourInfo, setJourInfo] = useState({});
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(journeyDetail(id)).then((response) => {
  //     setJourInfo(response.payload);
  //   });
  // }, []);

  const journey_id = 1;
  const path_id = 1;

  const onClickGoPath = () => {
    props.history.push(`/path/1`);
  }

  const AnyReactComponent = ({ text }) => {
    return (
      
        <div>{text}</div>
      
    );
  };
  
    const defaultProps = {
      center: {
        lat: 37.531706,
        lng: 127.066676
      },
      zoom: 11
    };

  const JourInfo = {
    id: 1,
    name: "Still Stand Tall1",
    username: "choryang",
    category: "geek",
    accompany: "",
    img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nisl, scelerisque commodo nisl, in. Fusce ac ut lacus aenean a scelerisque. Pellentesque et elit cursus elementum amet. Augue ornare in in imperdiet ac lacus. Magna feugiat ornare tristique nisi quis auctor ullamcorper. Quam faucibus massa diam leo nibh eleifend eleifend id. Sollicitudin netus lobortis imperdiet nunc venenatis laoreet suspendisse diam. Felis elit et nibh habitant. Sit ante lorem sit justo enim, a lorem adipiscing quis.
    Ac vel ipsum tempus hendrerit vitae diam. Eget quam nam amet, dictumst vel euismod lacus dolor. Eget enim massa sagittis, massa. A sem sapien vulputate amet diam diam orci lobortis pulvinar. Ut sed est aliquam amet elementum pellentesque felis pharetra. Et massa tristique quis amet leo.`,
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
     
        <div className="journey-detail-title">
          <img src={JourInfo.img} alt="title" />
          <p className="journey-detail-name">{JourInfo.name}</p>
          <p className="journey-detail-username">Created by {JourInfo.username}</p>
        </div>
        <div className="journey-detail-container">
          <div className="journey-detail-catergory common-gray-box ">
            <p>
              <span>Category: </span>
              <span>카테고리</span>
            </p>
            <span>여행기간: 30일</span>
          </div>
          <div className="journey-detail-contents">
            <div className="journey-detail-path">
                <div className="journey-detail-map common-gray-box">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={37.531706}
                      lng={127.066676}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
                <div className="journey-detail-path-item-box">
                {places.map((place) => {
                  return(
                  <div className="common-path-item">
                    <img className="common-path-pin" src={pin} alt="pin" />
                    <p>{place.name}</p>
                    <div className="common-path-line"></div>
                  </div>
                  );
                })}
                </div>
                <button onClick={onClickGoPath}>경로 자세히 보기</button>
            </div>
            <div className="journey-detail-info common-gray-box">
              <Carousel className="journey-detail-carousel" wrapAround="true" heightMode="first" enableKeyboardControls="true" width="100%">
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
        </div>
    </>
  );
}

export default withRouter(JourneyDetail);
