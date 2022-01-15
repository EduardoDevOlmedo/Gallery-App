import React from 'react'



const Card = ({img, alt}) => {
    
    

    return (
        <div className="card" style={
          { width: "200px",
            
          }}>
          <img src={img} className="card-img-top" alt={alt} />         
        </div>
    )
}

export default Card
