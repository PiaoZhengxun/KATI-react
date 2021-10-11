import React, { useState, useEffect } from 'react';
import "./Styled.scss";

function Header() {

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
  <a className="navbar-brand" href="#">KATI</a>
  <button className="navbar-toggler"type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="/">상품찾기 <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/category">카테고리</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ranking">랭킹</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">로그인</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/join">회원가입</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Header;
