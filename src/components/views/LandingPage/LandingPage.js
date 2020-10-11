import React from "react";
import Navbar from "components/views/NavBar/NavBar";

function LandingPage() {
  return (
    <>
      <Navbar />
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
        <h2>시작페이지</h2>
      </div>
    </>
  );
}

export default LandingPage;
