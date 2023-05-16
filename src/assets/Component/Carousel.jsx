import React from "react";
import Images from "./Images";


const Carousel = () => {
  return (
    <>
      <div className="w-100 caro">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="border border-1 blueColro "></div>
              <img
                src="\image\Hero-image-1.webp"
                className="d-block w-100 caroimg"
                alt="..."
              />
              <h1 className="text-light">#1 destination for smart  and <br /> ambitious African women <br/>
              <button className="btn joinbtn btn-primary">JOIN NOW</button>
              </h1>
              <div className="border border-1  blueColro "></div>
              
            </div>
            <div className="carousel-item">
              <img
                src="\image\HGCP-2023-Banner-2.png"
                className="d-block w-100 mt-3  caroimg1"
                alt="..."
              />
              {/* <h1 className="position-absolute top-0">#1 destination for smart and ambitious African women</h1> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Images/>
      
     
        
         </>
  );
};

export default Carousel;
