import React, {useEffect, useState} from 'react'
import { getReviewsByFoodId } from '../../api'
import {Card,CardBody,CardText,CardTitle,CardSubtitle} from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import {AiFillStar} from 'react-icons/ai'

function Review({foodId}) {
    const [reviews,setReviews]=useState([]);
    const arr = []
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

    useEffect(()=>{
      console.log(foodId)
        getReviews()
    },[])
    
    return (
        <div>
           <div style={{fontSize:'1.5rem',fontWeight:'600',marginTop:'2rem'}}>리뷰({reviews.length})</div>
           <hr/>
        {reviews.map((item,id)=>(
          <div>
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
        </div>
    )
}

export default Review
