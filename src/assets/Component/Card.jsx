import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className={props.style} style={{width: "20rem",border:"none"}}>
 
        <div className="card-body ms-3 col-12 mb-4">
          <h5 className="card-title text-primary fw-bold mt-4   ">{props.name}</h5>
          <p className="card-text mt-4">{props.paragraph}</p>
         
        </div>
      </div>
    </>
  )
}

export default Card
