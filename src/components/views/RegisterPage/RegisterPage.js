import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "_actions/user_action";
import { withRouter, Link } from "react-router-dom";
import Navbar from "components/views/NavBar/NavBar";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [LifeStyle, setLifeStyle] = useState("");
  const [JourneyType, setJourneyType] = useState("");

  const onChange = (event) => {
    if (event.currentTarget.name === "email") {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === "password") {
      setPassword(event.currentTarget.value);
    } else if (event.currentTarget.name === "name") {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === "confirmpassword") {
      setConfirmPassword(event.currentTarget.value);
    } else if (event.currentTarget.name === "lifestyle") {
      setLifeStyle(event.currentTarget.value);
    } else if (event.currentTarget.name === "journeytype") {
      setJourneyType(event.currentTarget.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }
   
    let body = {
      email: Email,
      password: Password,
      name: Name,
      lifestyle: LifeStyle,
      journeytype: JourneyType,
    };

    //dispatch를 이용해서 action을 날린다.
    dispatch(registerUser(body)).then((response) => {
      console.log(response.payload.registerSuccess);
      if (response.payload.registerSuccess) {
        // 서버에서 보내주는 값
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
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
        
        <input className="main-input" type="text" name="name" placeholder="이름" value={Name} onChange={onChange} />
        
        <input
          className="main-input"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={Password}
          onChange={onChange}
        />
        
        <input
          className="main-input"
          type="password"
          name="confirmpassword"
          placeholder="비밀번호 재입력"
          value={ConfirmPassword}
          onChange={onChange}
        />
        
        <input
          className="main-input"
          type="text"
          name="lifestyle"
          placeholder="라이프스타일"
          value={LifeStyle}
          onChange={onChange}
        />
        
        <input
          className="main-input"
          type="text"
          name="journeytype"
          placeholder="여행 스타일"
          value={JourneyType}
          onChange={onChange}
        />
        <br />
        <button className="main-bluebtn" type="submit">회원가입</button>
      </form>
      <br/>
          <span>계정이 있으신가요? </span>
          <Link to={"/login"}>로그인</Link>
    </div>
    </div>
    </div>
  );
}

export default withRouter(RegisterPage);