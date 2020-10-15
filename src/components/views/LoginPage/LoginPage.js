import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "_actions/user_action";
import { withRouter } from "react-router-dom";
import Navbar from "components/views/NavBar/NavBar";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onChange = (event) => {
    if (event.currentTarget.name === "email") {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === "password") {
      setPassword(event.currentTarget.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Email", Email);
    console.log("pass", Password);
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.NoExistedUser){
        alert("존재하지 않는 사용자입니다.")
        setEmail("");
        setPassword("");
      }
      else if (response.payload.loginSuccess) {
        props.history.push("/main");
      } 
      else {
        alert("비밀번호가 틀렸습니다.");
        setPassword("");
      }
    });
  };

  return (
    <>
    <Navbar />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={onSubmit}
      >
        <label>Email</label>
        <input type="email" name="email" value={Email} onChange={onChange} />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={Password}
          onChange={onChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default withRouter(LoginPage);
