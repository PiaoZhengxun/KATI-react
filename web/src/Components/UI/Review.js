import React, {useEffect, useState} from 'react'
import { getReviewsByFoodId } from '../../api'


function Review({foodId}) {
    const [reviews,setReviews]=useState([]);
    
    const getReviews= async()=>{
        await getReviewsByFoodId.getReviews(foodId,1)
        .then((response)=>{
            var result = response.data.readReviewResponse
            setReviews(...result)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    useEffect(()=>{
        getReviews()
    },[])
    
    return (
        <div>
           <div style={{fontSize:'2rem',fontWeight:'600'}}>리뷰 ({reviews.length})</div>
        </div>
    )
}

export default Review
