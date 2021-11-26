import React, { useState,useEffect } from 'react';
import { getAds, getReviewRankingApi } from '../../api';
import {Row,Col} from 'reactstrap'
import ResultPage from '../../Components/UI/ResultPage'
import RankingResult from '../../Components/UI/RankingResult';
import CategoryMenu from '../../Components/UI/CategoryMenu';

function MainPage() {
  const [result, setResult] = useState(null);
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adLoad, setAdLoad] = useState(true);
  const [ranking,setRanking] = useState(null);

  const getAdItems = async () =>{
    await getAds
    .getAdItems(5)
    .then((response) => {
      setAd(response.data);
      setAdLoad(false);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  const getRankingItems = async ()=>{
    await getReviewRankingApi.getReviewRanking()
    .then((response) => {
      setRanking(response.data);
    })
    .catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
    getAdItems()
    getRankingItems()
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
              <div style={{display:'flex',alignItems:'center'}}>
                <div style={{fontSize:'1.5rem'}}>🔥</div>
                <div style={{fontSize:'1.5rem', fontWeight:'600',display:'flex'}}>오늘의 HOT!!</div>
              </div>
              <div>인기있는 제품들 입니다.</div>
            </Col>
        </Row>
        <hr className="divide__line" />
      <RankingResult items={ranking} loading={adLoad}/>

    <br/> <br/>

      <Row className="big__name">
            <Col md='11'>
            <div style={{display:'flex',alignItems:'center'}}>
                <div style={{fontSize:'1.5rem'}}>🎁</div>
                <div style={{fontSize:'1.5rem', fontWeight:'600',display:'flex'}}>오늘의 광고</div>
              </div>
              <div>현재 광고하는 상품을 만나보세요!</div>
            </Col>
        </Row>
        <hr className="divide__line" />
        <ResultPage items={ad} loading={adLoad}/>

        <br/><br/>
        <Row className="big__name">
            <Col md='11'>
            <div style={{display:'flex',alignItems:'center'}}>
                <div style={{fontSize:'1.5rem', fontWeight:'600',display:'flex'}}>카테고리</div>
              </div>
            </Col>
        </Row>
        <hr className="divide__line" />
        <CategoryMenu/>
    </div>
  );
}

export default MainPage;
