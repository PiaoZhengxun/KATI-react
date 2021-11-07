import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { getKakaoLogin, userLogin } from "../../api";
import queryString from "query-string";
import { KAKAO_AUTH_URL } from "./KakaoAuth";

var token;

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [temp1, setTemp1] = useState("");

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
        // window.location.href = "/";
      })
      .catch((error) => {
        alert("로그인 실패", error);
        console.log("LoginPage.js <- 여기서 login 부분 실패");
      });
  };

  const kakaoLogin = () => {
    try {
      getKakaoLogin.kakaoLogin().then((response) => {
        setTemp1(JSON.stringify(response.code));
      });
    } catch (e) {
      console.log(e, "로그인 try/catch 부문 에러");
    }
    const code = data;
    console.log(code, "여기 KakaoLogin 부분 code 출력하는 것");
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
        {/* <Button onClick={kakaoLogin}> */}
        {/* <Button href={KAKAO_AUTH_URL}> */}
        <Button href="http://3.38.97.234:8000/core-service/oauth2/authorization/kakao">
          <img src="../../src/Images/kakaoLogin.PNG" alt="카카오" width="55" />
        </Button>
        {/* <a href="http://3.38.97.234:8000/core-service/oauth2/authorization/naver">
          <img src="../../src/Images/naverLogin.PNG" alt="네이버" width="55" />
        </a> */}
      </div>
    </div>
  );
}

export default LoginPage;
