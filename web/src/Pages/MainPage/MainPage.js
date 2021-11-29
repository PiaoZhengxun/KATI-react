import React from "react";

function MainPage() {
  return (
    <div>
      메인 페이지 입니다 🎈
      <br />
      {localStorage.getItem("authorization")}
    </div>
  );
}

export default MainPage;
