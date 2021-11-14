import React, { useState, useEffect } from "react";
import axios from "axios";
import { kakaoSocialLogin } from "../../api";

function SocialLoginPage() {
  // const [code, setCode] = useState("");
  const REDIRECT_URI = "http://localhost:3000/login/ouath2/code/kakao";
  const REST_API_KEY = "e44c5d0df42c6613c266e56204d9457b";
  const CLIENT_SECRET = "Rf1yNHjgzlieBWNm7T4ZOvSaASvNZ8UV";
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const code = window.location.search.split("?code=")[1];
    if (code !== undefined) {
      requestToken(code)
        .then(({ data }) => {
          console.log("requestToken:", data);
          const accessToken = data.access_token;
          console.log(accessToken, "aceessToken 부분");
          setAccessToken(accessToken);
          fetchServerToken();
        })
        .catch((err) => {
          console.log("requestTokenErr:", err);
        });
    }
  }, []);

  const fetchServerToken = async () => {
    try {
      console.log("fetchServerToken까지 들어옴");

      console.log("yesToken True까지 들어옴");
      kakaoSocialLogin
        .kakaoToken(accessToken)
        .then((response) => {
          console.log("서버에서 받아온 토큰", response);
          localStorage.setItem("token", response);
          console.log(localStorage.getItem("token"), "로컬스토리지 저장 완료");
        })
        .catch((err) => {
          console.log("서버에서 받아오는 토큰 부분 err", err);
        });
    } catch (e) {
      console.log("서버에서 받아오는데 안받아짐 ", e);
    }
  };

  function requestToken(code) {
    const makeFormData = (params) => {
      const searchParams = new URLSearchParams();
      Object.keys(params).forEach((key) => {
        searchParams.append(key, params[key]);
      });
      return searchParams;
    };
    return axios({
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      url: "https://kauth.kakao.com/oauth/token",
      data: makeFormData({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
      }),
    });
  }

  // useEffect(() => {
  //   console.log("소셜로그인 useEffect");
  //   let socialCode = new URL(window.location.href).searchParams.get("code");
  //   setCode(socialCode);
  //   console.log("여기서 카카오 토큰 발행");
  //   axios
  //     .post("https://kauth.kakao.com/oauth/token", {
  //       headers: {
  //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //       data: {
  //         grant_type: "authorization_code",
  //         client_id: REST_API_KEY,
  //         redirect_uri: REDIRECT_URI,
  //         code,
  //         client_secret: CLIENT_SECRET,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response, "useEffect Response 출력 부분");
  //     })
  //     .catch((error) => {
  //       console.log(error, "useEffect 에러 부분");
  //     });
  // }, []);

  return (
    <div>
      소셜성공
      {/* <br /> {code} */}
      <br /> 페이지 입니다 🎈
    </div>
  );
}

export default SocialLoginPage;
