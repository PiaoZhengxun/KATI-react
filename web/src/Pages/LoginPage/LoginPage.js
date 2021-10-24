import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { userLogin } from "api";
import { kakaoImage } from "../../src/Images/kakaoLogin.PNG";
import { naverImage } from "../../src/Images/naverLogin.PNG";
var token;

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    userLogin
      .userLoginApi(email, password)
      .then((response) => {
        token = response.headers.authorization;
        localStorage.setItem("authorization", token);
        window.location.href = "/";
      })
      .catch((error) => {
        alert("로그인 실패", error);
        console.log("LoginPage.js <- 여기서 login 부분 실패");
      });
  };

  return (
    <div>
      <div>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={onEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
              onChange={onPasswordChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
      <div>
        <a href="http://3.38.97.234:8000/core-service/oauth2/authorization/kakao">
          <img src={kakaoImage} alt="카카오" width="55" />
        </a>
        <a href="http://3.38.97.234:8000/core-service/oauth2/authorization/naver">
          <img src={naverImage} alt="네이버" width="55" />
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
