import React, {useEffect,useState} from 'react'
import RankingCarousel from './RankingCarousel';
import {BsHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom';
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
                <Link to ={{pathname:`search/${item.foodId}`}}>
                <div className="item_card" id={idx} style={{display:'grid',width:'200px',height:'280px',gridTemplateRows:'0.2fr 1fr 0.5fr',
                borderRadius:'5px',marginRight:'1rem',marginBottom:'1.5rem'}}>
                  <div><BsHeart className="item_heart"  size="25"/></div>
                  <img src = {item.foodImageAddress} width="150px" height="100px" style={{borderBottom:"1px solid gray"}}/>
                  <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                    <div style={{marginTop:'10px', fontWeight:'600',color:'black'}}>{item.foodName}</div>
                    <div style={{ marginTop:'10px',color:'black'}}> {item.foodId} {item.category}</div>
                  </div>
                </div>
                </Link>
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
