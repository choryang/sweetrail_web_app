import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "_actions/user_action";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onChange = (event) => {
    if (event.currentTarget.name === "email") {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === "password") {
      setPassword(event.currentTarget.value);
    } else if (event.currentTarget.name === "name") {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === "confirmpassword") {
      setConfirmPassword(event.currentTarget.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (Password != ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }
    console.log("Email", Email);
    console.log("pass", Password);
    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    //dispatch를 이용해서 action을 날린다.
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.registerSuccess) {
        // 서버에서 보내주는 값
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
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
        <label>Name</label>
        <input type="text" name="name" value={Name} onChange={onChange} />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={Password}
          onChange={onChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          value={ConfirmPassword}
          onChange={onChange}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
