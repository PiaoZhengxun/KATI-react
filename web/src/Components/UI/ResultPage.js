import React, {useEffect,useState} from 'react'
import './ResultPageStyle.scss'
function ResultPage({items,adLoad}) {
    useEffect(() => {
        console.log("resultpage",items);
    }, [])
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          {adLoad ? <div>Loading...</div> :
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
              {items && items.length>0 ? 
              items.map((item,idx) => (
                <div className="item_card" id={idx} style={{display:'grid',gridTemplateRows:'1fr 0.5fr 0.5fr', borderRadius:'5px',marginRight:'1rem',marginBottom:'1rem'}}>
                  <img src = {item.food.foodImageAddress} width="200px" height="150px" style={{borderBottom:"1px solid gray"}}/>
                  <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                    <div style={{marginTop:'10px',fontSize:'1rem', fontWeight:'600'}}>{item.food.foodName}</div>
                    <div style={{fontSize:'0.8rem', marginTop:'10px'}}> {item.food.foodId} {item.food.category}</div>
                    <div style={{fontSize:'0.8rem'}}>{item.food.manufacturerName.length > 10 ? item.food.manufacturerName.substring(0,10)+'...': item.food.manufacturerName}</div>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <button className="button">상세보기</button>
                    <button className="button">즐겨찾기</button>
                  </div>
                </div>
              )): <div>No Result</div>}
          </div>
          }
            
        </div>
    )
}

export default ResultPage
