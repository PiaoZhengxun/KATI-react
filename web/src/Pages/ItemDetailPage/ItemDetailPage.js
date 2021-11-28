import React, {useEffect,useState} from 'react'
import { foodDetailApi } from '../../api';
import StarRatingComponent from 'react-star-rating-component';
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BsHeart,BsFillHeartFill} from 'react-icons/bs'
import {Badge} from 'reactstrap';

function ItemDetailPage(props) {
   const [foodId,setFoodId] = useState('')
   const [data,setData] = useState('');
   const [allergies,setAllergies] = useState([])

    var info='';
   const getFoodDetail =async() =>{
        var id = props.match.params.id
        console.log("foodId",id)
       await foodDetailApi.search(id)
       .then((response) => {
           info = response.data;
           setData(info)
           console.log("food data: ",info)
       })
       .catch((e)=>{
           console.log(e)
       })
    }
    useEffect(() => {
        getFoodDetail()
    }, [])
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly',}}>
            <div style={{display:'flex',flexDirection:'column'}}>
                <img width="500px" height="350px" src={data.foodImageAddress} />
                <img width="500px" height="350px" src={data.foodMeteImageAddress} />
               
            </div>
            <div style={{display:'grid',gridTemplateRows:'1fr 1fr'}}>
                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
                <StarRatingComponent 
                    name="rate2" 
                    editing={false}
                    renderStarIcon={() => <AiFillStar size="20"/>}
                    starCount={5}
                    value={parseFloat(data.reviewRate)}
                    style={{display:'flex'}}
                    />
                 <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',marginTop:'2rem'}}>
                    <div style={{fontSize:'2rem',fontWeight:'600'}}>{data.foodName}</div>
                    <div><BsHeart size="30"/></div>
                 </div>
                  <hr/>
                  <div style={{lineHeight:'2.5rem'}}>
                    <div style={{fontSize:'1.2rem'}}>{data.foodId}</div>
                    <div>
                        <Link>
                        <Badge color="primary" pill style={{background:'#FE8887',fontSize:'1rem'}}>
                            {data.category}
                        </Badge>
                        </Link>  
                    </div>
                     <div style={{display:'flex',flexWrap:"wrap",marginBottom:"50px"}}>{data.manufacturerName} </div>
                     <div style={{width:'400px',wordBreak:'break-all',fontSize:'0.5rem'}}>{data.materials}</div>
                </div>
                </div>
              
            </div>
            <hr/>
        </div>
        
        </div>
    )
}

export default ItemDetailPage
