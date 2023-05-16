import React from 'react'
import Card from './Card'

const Images = () => {
  return (
    <>
      <div className="mt-5 w-100 bg-light d-none d-md-block  border border-1 px-3">
        <h5 className="text-center fw-bold">FEATURED ON</h5>
        <div className="d-flex justify-content-between mb-5 px-5 mt-4">
         
          <img className=" images" src="\image\cnn-main-min.png" alt="" />
          <img className=" images" src="\image\sahara-min.png" alt="" />
         
          <img className=" images" src="\image\cnbc-min (1).png" alt="" />
          <img className=" images" src="\image\howwemadeitinafrica-min.png" alt="" />
    
          <img className=" images" src="\image\ventures-1-min.png" alt="" />
          <img className=" images" src="\image\forbes-logo-png-4-1.png" alt="" />
         
        </div>
      </div>
      <div className="mt-5 w-100 d-block d-md-none bg-light  border border-1 px-3">
        <h5 className="text-center fw-bold mt-4">FEATURED ON</h5>
        <div className="d-flex justify-content-between px-3 mb-5 mt-4 mx-auto ">
          <div className="gridImage ">

          <img className=" images" src="\image\cnn-main-min.png" alt="" />
          <img className=" images" src="\image\sahara-min.png" alt="" />
          </div>
          <div className="gridImage ">

          <img className=" images" src="\image\cnbc-min (1).png" alt="" />
          <img className=" images" src="\image\howwemadeitinafrica-min.png" alt="" />
          </div>
          <div className="gridImage ">

          <img className=" images" src="\image\ventures-1-min.png" alt="" />
          <img className=" images" src="\image\forbes-logo-png-4-1.png" alt="" />
          </div>
        </div>
      </div>
      <h2 className='fw-bolder text-center col-md-12   mt-5 text-primary'>Start living your very best life now</h2>
       
      
    </>
  )
}

export default Images
