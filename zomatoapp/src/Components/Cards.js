import React from "react";
import Card from 'react-bootstrap/Card'
const Cards=(data) =>{
    return(
        
            data.map((element,k) =>{
            return(
                <Card style={{ width: '22rem' ,border:'none' }} className='mb-4'>
      <Card.Img variant="top" classname="cd" src={element.imgdata} />
      <div className="card_body">
        <div className="upper_data d-flex justify-content-between align-items-center">
            <h4 className="mt-2"> 
                Masala egg
            </h4>
            <span>
                4.5 ⭐
            </span>

        </div>

        <div className="lower_data d-flex justify-content-between align-items-center">
            <h5>North Indian</h5>
            <span>350 for one</span>

        </div>
            <div className="extra">

            </div>
      </div>
      
      </Card>
            )
        }
    
    )
        )   

}



       
    


export default Cards