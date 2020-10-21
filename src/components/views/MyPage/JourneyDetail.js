import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import { journeyDetail } from "_actions/journey_action";
import MainNav from "components/views/NavBar/MainNav";

function JourneyDetail() {

  const { id } = useParams();
  const [JourInfo, setJourInfo] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(journeyDetail(id)).then((response) => {
      setJourInfo(response.payload);
    });
  }, []);

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
        <h3>{JourInfo.name}</h3>
        <img
          className="profileImg"
          src="https://cdn.onlinewebfonts.com/svg/img_191958.png"
          alt="profile"
        />
        <h3>Path</h3>
        <h3>Summary</h3>
        <div>
          {JourInfo.summary}
        </div>
      </div>
    </>
  );
}

export default withRouter(JourneyDetail);
