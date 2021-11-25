import React, {useEffect,useState} from 'react'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

function ResultPage({items,adLoad}) {
    useEffect(() => {
        console.log("resultpage",items);
    }, [])
    return (
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
          {adLoad ? <div>Loading...</div> :
          <div>
              {items && items.length>0 ? 
              items.map((item,idx) => (
                <Card width="100px" id= {idx}>
                <CardImg
                  alt="Card image cap"
                  src={item.foodImageAddress}
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {item.foodName}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                   {item.category} {item.foodId}
                  </CardSubtitle>
                  <CardText>
                    {item.manufacturerName}
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              )): <div>No Result</div>}
          </div>
          }
            
        </div>
    )
}

export default ResultPage
