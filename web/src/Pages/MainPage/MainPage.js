import React, { useState,useEffect } from 'react';

function MainPage() {

  useEffect(() => {
    var token = localStorage.getItem("authorization")
    if(token != null){
      alert("login test success",token);
    }else{
      alert("login test failed");
    }
  }, []);
  return (
    <div>
      main
    </div>
  );
}

export default MainPage;
