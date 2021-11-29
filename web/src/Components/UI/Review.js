import React, {useEffect, useState} from 'react'
import { getReviewsByFoodId, getUserAllergyInfo, getUserSummary } from '../../api'
import {Card,CardBody,CardText,CardTitle,CardSubtitle,Button} from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import {AiFillStar} from 'react-icons/ai'

function Review({foodId}) {
    const [reviews,setReviews]=useState([]);
    const [user,setUser] = useState();
    const [log,setLog] = useState(false);
    var result=[];

    const getReviews= async()=>{
        await getReviewsByFoodId.getReviews(foodId,1)
        .then((response)=>{
            result = response.data.readReviewResponse
            setReviews(result)
            console.log( "result",result)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    const getUser= async()=>{
       var token = localStorage.getItem("authorization")
      if(token != null){
        setLog(true)
        await getUserSummary.userSummary()
       .then((response)=>{
         console.log(response.data)
         var data = response.data.userName
         setUser(data)
       })
       .catch((e)=>{
         console.log(e)
       })
      }
    }

    useEffect(()=>{
      console.log(foodId)
        getUser()
        getReviews()
    },[])
    
    return (
        <div>
           <div style={{fontSize:'1.5rem',fontWeight:'600',marginTop:'2rem'}}>리뷰({reviews.length})</div>
           <hr/>
        {reviews.map((item,id)=>(
          <div style={{paddingRight:"10rem",paddingLeft:"10rem"}}>
              <Card width="400px" style={{marginBottom:"2rem"}}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {item.userName}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                          <StarRatingComponent 
                          name="rate2" 
                          editing={false}
                          renderStarIcon={() => <AiFillStar size="20"/>}
                          starCount={5}
                          value={parseFloat(item.reviewRating)}
                          style={{display:'flex',marginRight:"3rem"}}
                          />
                  </CardSubtitle>
                  <CardText>
                    <div  style={{display:"flex",flexWrap:'wrap',justifyContent:"space-between",alignItems:'center'}} > 
                      <div style={{fontSize:"1.5rem",fontWeight:"600"}}>  {item.reviewDescription} </div>
                      <div>  {item.reviewCreatedDate.substring(0,10)} </div>
                    </div>
                   
                  </CardText>
                </CardBody>
              </Card>
          </div>
        ))}
         <Card
  >
    <CardBody style={{border:'1.5px solid #FE6F6E'}}>
      <CardTitle tag="h5">
        
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       {log?<div>{user} </div> : <div>리뷰작성</div> }
      </CardSubtitle>
      <CardText>
        {log? <input placeholder="리뷰를 작성하세요" style={{outline:"none",border:"none"}}/> : <div>로그인을 해주세요 !</div>}
      </CardText>
      <Button>
        작성 완료
      </Button>
    </CardBody>
  </Card>
        </div>
    )
}

export default Review
