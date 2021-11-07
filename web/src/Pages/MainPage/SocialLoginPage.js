import React, { useState, useEffect } from "react";
import axios from "axios";

function SocialLoginPage() {
  const [code, setCode] = useState("");

  useEffect(() => {
    console.log("소셜로그인 useEffect");
    let socialCode = new URL(window.location.href).searchParams.get("code");
    setCode(socialCode);
    console.log("여기서 카카오 토큰 발행");
    axios
      .post(
        "http://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
        },
        {
          client_id: "e44c5d0df42c6613c266e56204d9457b",
        },
        {
          code: code,
        },
        {
          redirect_uri: "http://localhost:3000/login/ouath2/code/kakao",
        },
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;character=utf-8",
          },
        }
      )
      .then((response) => {
        console.log(response, "useEffect Response 출력 부분");
      })
      .then((error) => {
        console.log(error, "useEffect 에러 부분");
      });
    // axios({
    //   method: "POST",
    //   url: "kauth.kakao.com/oauth/token",
    //   {

    //     code: code,

    //   },
    //   headers: {
    //     "Content-type": "application/x-www-form-urlencoded;character=utf-8",
    //   },
    // }).then((response) => {
    //   let token = `response.token_type`;
    //   console.log(token);
    // });
  }, []);

  return (
    <div>
      소셜성공
      <br /> {code}
      <br /> 페이지 입니다 🎈
    </div>
  );
}

export default SocialLoginPage;
