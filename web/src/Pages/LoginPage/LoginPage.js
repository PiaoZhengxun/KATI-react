import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row, NavLink} from "reactstrap";
import { Link } from "react-router-dom";
import { getKakaoLogin, userLogin } from "../../api";
import "./LoginPageStyle.scss";
import { SiNaver, SiKakaotalk } from "react-icons/si";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "2rem" }}>KATI</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">이메일</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="email@email.com"
                  type="email"
                  onChange={onEmailChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">비밀번호</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="PASSWORD"
                  type="password"
                  onChange={onPasswordChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup check>
            <Input id="exampleCheck" name="check" type="checkbox" />
            <Label check for="exampleCheck" style={{ fontSize: "small" }}>
              이메일 기억하기
            </Label>
          </FormGroup>
          <button
            className="login_btn"
            style={{ width: "100%", height: "50px" }}
          >
            로그인
          </button>
          <div
            style={{ display: "flex", marginTop: "10px", marginBottom: "50px" }}
          >
            <NavLink className="select_btn" tag={Link} to={"/join"}>
              회원가입
            </NavLink>
            <NavLink className="select_btn" tag={Link} to={"/find/id"}>
              이메일 찾기
            </NavLink>
            <NavLink className="select_btn" tag={Link} to={"/find/pw"}>
              비밀번호 찾기
            </NavLink>
          </div>
          <Button
            className="social_login_btn"
            style={{ backgroundColor: "white", border: "1px solid #B1B1B1" }}
            href={KAKAO_AUTH_URL}
          >
            {/* //http://3.38.97.234:8000/core-service/oauth2/authorization/kakao */}
            <div>
              <SiKakaotalk size="30" color="#3a1c1c" />
            </div>
            <div>카카오 로그인</div>
          </Button>

          <Button
            className="social_login_btn"
            style={{ backgroundColor: "white", border: "1px solid #B1B1B1" }}
            href="http://3.38.97.234:8000/core-service/oauth2/authorization/naver"
          >
            <div>
              <SiNaver size="30" color="#2DB400" />
            </div>
            <div>네이버 로그인</div>
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
