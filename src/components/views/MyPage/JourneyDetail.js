import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";
import MainNav from "components/views/NavBar/MainNav";

function MainPage() {
  useEffect(() => {
    
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
        <h3>Journey name</h3>
        <img
          className="profileImg"
          src="https://cdn.onlinewebfonts.com/svg/img_191958.png"
          alt="profile"
        />
        <h3>Path</h3>
        <h3>Summary</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </>
  );
}

export default withRouter(MainPage);
