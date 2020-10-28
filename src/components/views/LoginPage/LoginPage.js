import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "_actions/user_action";
import { withRouter, Link } from "react-router-dom";
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
    <div className="background">
      <div className="common-container">
        <Navbar />
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <input className="main-input" type="email" name="email" placeholder="이메일" value={Email} onChange={onChange} />
            <input
            className="main-input"
            type="password"
            name="password"
            placeholder="비밀번호"
            value={Password}
            onChange={onChange}
            />
            <br />
            <button className="main-bluebtn" type="submit">로그인</button>
          </form>
          <br/>
          <span>아직 회원이 아니신가요? </span>
          <Link to={"/register"}>회원가입</Link>
        </div>
    </div>
    </div>
  );
}

export default withRouter(LoginPage);
