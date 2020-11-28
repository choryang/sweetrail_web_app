import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import Carousel from 'nuka-carousel';
import {useDispatch, useSelector} from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import { journeyDetail } from "_actions/journey_action";
import { getScrap, setScrap, unScrap } from "_actions/scrap_action"
import MainHeader from "components/views/Header/MainHeader";
import ScrapBtn from "components/fragments/ScrapBtn";
import UnscrapBtn from "components/fragments/UnscrapBtn";
import pin from "images/pin.png";
import mainboat from "images/mainboat.png";
import "css/journey.scss";

function JourneyDetail(props) {

  const { id } = useParams();
  var userId = useSelector(state => state.user.userId);

  const [JourInfo, setJourInfo] = useState({});
  const [IsScrap, setIsScrap] = useState(false);
  const dispatch = useDispatch();
  const body = {
    id: userId,
    journeyId: id
  }

  useEffect(() => {
    dispatch(getScrap(body)).then((response) => setIsScrap(response.payload.isScrap));
    dispatch(journeyDetail(id)).then((response) => {
      setJourInfo(response.payload);
    });
  }, []);

  const onClickGoPath = () => {
    props.history.push(`/journey/${id}/path/1`);
  }

  const AnyReactComponent = () => {
    return (
      <img style={{width: "20px"}} src={pin} alt="pin" />
    );
  };

  const onClickSetScrap = () => {
    var action;
    if(!IsScrap) {
      action = setScrap(body)
    }
    else {
      action = unScrap(body)
    }
    dispatch(action).then((response) => setIsScrap(response.payload.isScrap));
  }
  
    const defaultProps = {
      center: {
        lat: 37.531706,
        lng: 127.066676
      },
      zoom: 11
    };

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
      path: process.env.REACT_APP_IMAGE_URL + JourInfo.image
    }
  ]

  return (
    <>
      <MainHeader />
     
        <div className="journey-detail-title">
          <img className="title-image" src={JourInfo.image === undefined ? mainboat : process.env.REACT_APP_IMAGE_URL + JourInfo.image} alt="title" />
          <div className="overlay"></div>
          <p className="journey-detail-name">{JourInfo.journeyName}{IsScrap ? <ScrapBtn onClick={onClickSetScrap}/> : <UnscrapBtn onClick={onClickSetScrap}/>}</p>
          <p className="journey-detail-username">Created by {JourInfo.userName}</p>
        </div>
        <div className="journey-detail-container">
          <div className="journey-detail-catergory common-grey-box ">
            <p>
              <span style={{fontWeight: "bold"}}>With: </span>
              <span className="common-category-badge purple">{JourInfo.accompany}</span>
              <span style={{fontWeight: "bold", marginLeft: "20px"}}>Category: </span>
              <span className="common-category-badge yellow">{JourInfo.type}</span>
            </p>
          </div>
          <div className="journey-detail-contents">
            <div className="journey-detail-path">
                <div className="journey-detail-map common-grey-box">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={37.531706}
                      lng={127.066676}
                    />
                  </GoogleMapReact>
                </div>
                <div className="journey-detail-path-item-box">
                {places.map((place) => {
                  return(
                  <div className="common-path-item mobile">
                    <img className="common-path-pin" src={pin} alt="pin" />
                    <p>{place.name}</p>
                    <div className="common-path-line"></div>
                  </div>
                  );
                })}
                </div>
                <button onClick={onClickGoPath}>경로 자세히 보기</button>
            </div>
            <div className="journey-detail-info common-grey-box">
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
