import React from 'react';
import GoogleMapReact from 'google-map-react';
import MainNav from "components/views/NavBar/MainNav";
import pin from "images/pin.png";
import "css/path.scss";
import "css/common.scss"

function Path() {
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

    return (
        <>
            <MainNav />
            <div className="path-detail-container">
                <div className="path-detail-left">
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
            </div>
        </>
    );
}

export default Path;
