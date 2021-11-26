import React, {useEffect,useState} from 'react'
import RankingCarousel from './RankingCarousel';

function RankingResult({items,loading}) {
    const [rankingItems,setRankingItems] = useState(null);
    useEffect(() => {
        console.log("ranking resultpage",items);
        setRankingItems(items);
    }, [])
    return (
        <div style={{display:'grid',gridTemplateColumns:'3fr 1fr',}}>
           <div style={{display:'flex',flewWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          {loading ? <div>Loading...</div> :
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',}}>
              {items && items.length>0 ? 
              items.map((item,idx) => (
                <div className="item_card" id={idx} style={{display:'grid',width:'200px',height:'280px',gridTemplateRows:'1fr 0.5fr 0.5fr', 
                borderRadius:'5px',marginRight:'1rem',marginBottom:'1.5rem'}}>
                  <img src = {item.foodImageAddress} width="150px" height="100px" style={{borderBottom:"1px solid gray"}}/>
                  <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                    <div style={{marginTop:'10px', fontWeight:'600'}}>{item.foodName}</div>
                    <div style={{ marginTop:'10px'}}> {item.foodId} {item.category}</div>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'10px'}}>
                    <button className="button">상세보기</button>
                    <button className="button">즐겨찾기</button>
                  </div>
                </div>
              )): <div>No Result</div>}
          </div>
          }
            
        </div>
            </div>
        
            <div>
               <RankingCarousel/>
           </div>
           
        </div>
    )
}

export default RankingResult
