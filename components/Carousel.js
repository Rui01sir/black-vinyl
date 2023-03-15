import React from 'react';


function Carousel(){
    return(
    <>
    <div style={{overflow:'hidden'}}>
      <span className="slider-span" id="slider-span1" ></span>
      <span className="slider-span" id="slider-span2" ></span>
      <span className="slider-span" id="slider-span3" ></span>
      <span className="slider-span" id="slider-span4" ></span>
      <span className="slider-span" id="slider-span5" ></span>
      <span className="slider-span" id="slider-span6" ></span>
      <span className="slider-span" id="slider-span7" ></span>

      <div className="image-slider" >
        <div className="slides-div" id="slide-1" >
          <img src="./img/img1.jpg" alt="" className="img1" id="img1"/>
          <a href="#slider-span1" className="button" id="button-1"></a>
        </div>
        <div className="slides-div" id="slide-2">
          <img src="./img/img2.jpg" alt="" className="img1" id="img2"/>
          <a href="#slider-span2" className="button" id="button-2"></a>
        </div>
        <div className="slides-div" id="slide-3">
          <img src="./img/img3.jpg" alt="" className="img1" id="img3"/>
          <a href="#slider-span3" className="button" id="button-3"></a>
        </div>
        <div className="slides-div" id="slide-4">
          <img src="./img/img4.jpg" alt="" className="img1" id="img4"/>
          <a href="#slider-span4" className="button" id="button-4"></a>
        </div>
        <div className="slides-div" id="slide-5">
          <img src="./img/img5.jpg" alt="" className="img1" id="img5"/>
          <a href="#slider-span5" className="button" id="button-5"></a>
        </div>
        <div className="slides-div" id="slide-6">
          <img src="./img/img6.jpg" alt="" className="img1" id="img6"/>
          <a href="#slider-span6" className="button" id="button-6"></a>
        </div>
        <div className="slides-div" id="slide-7">
          <img src="./img/img7.jpg" alt="" className="img1" id="img7"/>
          <a href="#slider-span7" className="button" id="button-7"></a>
        </div>
    </div>
    </div>
    </>

  
    )
}

export default Carousel;