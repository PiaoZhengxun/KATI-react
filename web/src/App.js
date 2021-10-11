import React from "react";
import kakaoimg from "../src/kakao.png";
import { KAKAO_URL } from "./socialLoginAuth";
import axios from "axios";

const App = () => {
  return (
    <div>
      <a href="http://3.38.97.234:8000/core-service/oauth2/authorization/kakao">
        <img src={kakaoimg} width="222" />
      </a>
    </div>
  );
};

export default App;
