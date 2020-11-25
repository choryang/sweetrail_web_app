import React, {useRef} from 'react';
import GoogleMapReact from 'google-map-react';
import MainHeader from "components/views/Header/MainHeader";
import {FaTimes} from "react-icons/fa"
import pin from "images/pin.png";
import "css/path.scss";

function Path() {

    const mapRef = useRef();

    const defaultProps = {
        center: {
            lat: 37.531706,
            lng: 127.066676
        },
            zoom: 11
    };

    const AnyReactComponent = () => {
      return (
        <img style={{width: "20px"}} src={pin} alt="pin" />
      );
    };

    const closeSidebar = () => {
        document.getElementsByClassName("sidebar")[0].style.display = "none";
    }

    const openSidebar = () => {
      document.getElementsByClassName("sidebar")[0].style.display = "block";
    }

    const places = [
        {
          id: 1,
          name: "Santorini",
          lat: 38.531706,
          lng: 128.066676
        },
        {
          id: 2,
          name: "Santorini",
          lat: 40.531706,
          lng: 130.066676
        },
        {
          id: 3,
          name: "Santorini",
          lat: 36.531706,
          lng: 150.066676
        },
        {
          id: 4,
          name: "Santorini",
          lat: 39.531706,
          lng: 120.066676
        },
        {
          id: 5,
          name: "Santorini",
          lat: 40.531706,
          lng: 100.066676
        },
        {
          id: 6,
          name: "Santorini",
          lat: 45.531706,
          lng: 127.066676
        },
        {
          id: 7,
          name: "Santorini",
          lat: 37.531706,
          lng: 120.066676
        },
        {
          id: 8,
          name: "Santorini",
          lat: 27.531706,
          lng: 127.066676
        },
        {
          id: 9,
          name: "Santorini",
          lat: 50.531706,
          lng: 150.066676
        },
        {
          id: 10,
          name: "Santorini",
          lat: 55.531706,
          lng: 130.066676
        },
        {
          id: 11,
          name: "Santorini",
          lat: 40.531706,
          lng: 130.066676
        },
        {
          id: 12,
          name: "Santorini",
          lat: 46.531706,
          lng: 95.066676
        },
        {
          id: 13,
          name: "Santorini",
          lat: 35.531706,
          lng: 130.066676
        },
        {
          id: 14,
          name: "Santorini",
          lat: 46.531706,
          lng: 110.066676
        },
        {
          id: 15,
          name: "Santorini",
          lat: 29.531706,
          lng: 119.066676
        },
        {
          id: 16,
          name: "Santorini",
          lat: 33.531706,
          lng: 125.066676
        },
        {
          id: 17,
          name: "Santorini",
          lat: 40.531706,
          lng: 97.066676
        },
      ]

    return (
        <>
            <MainHeader />
            <div className="path-detail-container">
                <div className="path-detail-left sidebar">
                    <div className="close-mark" onClick={closeSidebar}><FaTimes /></div>
                    <div className="path-detail-info">
                        <h2>Still Stand Tall</h2>
                        <p>Date: 2018-07-11</p>
                        <p>Total Places: 100</p>
                    </div>
                    <div className="path-detail-pin-box">
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
                </div>
                <div className="path-detail-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map }) => {
                          mapRef.current = map;
                        }}
                    >
              
                    {places.map((place) => (
                      <AnyReactComponent
                        key={place.id}
                        text={place.name}
                        lat={place.lat}
                        lng={place.lng}
                      />
                    ))}
                    </GoogleMapReact>
                    <button className="mobile-map-button black-btn" onClick={openSidebar}>Timeline</button>
                </div>
            </div>
        </>
    );
}

export default Path;
