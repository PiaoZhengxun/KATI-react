import React, { useState,useEffect } from 'react';
import { getAds } from '../../api';
import {Row,Col} from 'reactstrap'
import ResultPage from '../../Components/UI/ResultPage'

function MainPage() {
  const [result, setResult] = useState(null);
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adLoad, setAdLoad] = useState(true);
  
  const getAdItems = async () =>{
    await getAds
    .getAdItems(3)
    .then((response) => {
      setAd(response.data);
      setAdLoad(false);
      console.log("광고",ad);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    getAdItems()

    //var token = localStorage.getItem("authorization")
    //if(token != null){
     // alert("login test success",token);
   // }else{
     // alert("login test failed");
   // }
   
  }, []);
  return (
    <div>
      <Row className="big__name">
            <Col md='11'>
              <div style={{fontSize:'1.5rem', fontWeight:'600'}}>오늘의 상품</div>
              <div>카티가 엄선한 상품들입니다.</div>
            </Col>
        </Row>
        <hr className="divide__line" />
        <ResultPage items={ad} adLoading={adLoad}/>
    </div>
  );
}

export default MainPage;
