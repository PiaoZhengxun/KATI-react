import React,{useState,useEffect} from 'react'
import {BsHeart,BsFillHeartFill} from 'react-icons/bs'
import { checkFavoriteApi, addFavoriteApi, deleteFavoriteApi } from '../../api';
import './ResultPageStyle.scss'


function ResultCard({id,foodId,foodImg,foodName,foodCategory,foodManufac}) {
    const [isLike,setIsLike] = useState(null);
    const [log,setLog] = useState(false);
  
    const setLike =async()=>{
      if(isLike){
        // 즐겨찾기 삭제
        await deleteFavoriteApi.deleteFavorite(foodId)
        .then((response)=>{
          console.log("삭제성공", response.data)
          setIsLike(false)
        }).catch(e => {
          //console.log(e)
        })
    
    
      }else{
        // 즐겨찾기 추가
        await addFavoriteApi.addFavorite(foodId)
        .then((response) => {
        console.log("결과 성공",response.data)
        setIsLike(true)
      }).catch(e => {
        //console.log(e)
      })
      }
    }
    const checkFavorite = async()=>{
      await checkFavoriteApi.checkFavorite(foodId)
      .then(async (response) => {
        setIsLike(response.data)
      }).catch(e => {
        //console.log(e);
      })
    }

    useEffect(() => {
        var user= localStorage.getItem('authorization')
        if(user){
            setLog(true)
            checkFavorite()
        }
    })
    return (
        <div className="item_card" id={id} style={{display:'grid',gridTemplateRows:'0.2fr 1fr 0.5fr', borderRadius:'5px',marginRight:'1rem',marginBottom:'1rem'}}>
          
          {!log?  <div color="gray" onClick={setLike}><BsHeart className="item_heart"  size="30"/></div> :
            isLike?  <div onClick={setLike}><BsFillHeartFill className="item_heart" color="#FE6F6E" size="30"/></div>:  <div onClick={setLike}><BsHeart className="item_heart"  size="30"/></div>}

        <img src = {foodImg} width="200px" height="150px" style={{borderBottom:"1px solid gray",marginTop:'0.5rem'}}/>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          <div style={{marginTop:'10px',fontSize:'1rem', fontWeight:'600'}}>{foodName}</div>
          <div style={{fontSize:'0.8rem', marginTop:'10px'}}> {foodId} {foodCategory}</div>
          <div style={{fontSize:'0.8rem'}}>{foodManufac.length > 10 ? foodManufac.substring(0,10)+'...': foodManufac}</div>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
        </div>
      </div>
    )
}

export default ResultCard
