import React, { useState } from "react";
import "./Slide.css"; 
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Slideshow() {
  const slides = [
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_F50fast24.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_tonikroos_11pro2.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/puma_carbon_ultimate.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/puma_manchester-city-home-24-25_HB.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_arsenal_home24.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_citrus_pack24.jpg"
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const goToPrevious = () => {
    let newIndex = slideIndex - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    setSlideIndex(newIndex);                                                         
  }

  const goToNext = () => {
    const newIndex = (slideIndex + 1) % slides.length;
    setSlideIndex(newIndex);
  }

  const goToSlide = (index) => {
    setSlideIndex(index);
  }

  return (
    <div >
      <Link to="https://www.futbolemotion.com/gb/eurocup" target="_self" style={{textDecoration:'none'}}>
        <div className="box">
          <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}>UEFA EURO '24</span> | 
          <span style={{filter: 'blur(0.4px)'}}> EVERYONE'S PARTY </span> | 
          <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}> SHOW YOUR COLOURS!</span>
          <span className="button-slide">See products</span>
        </div>
        <img src={slides[slideIndex]} alt="" style={{marginLeft: '-2rem', width: '100.6vw', height: '360px' }} />
      </Link>
      
      <button className="prev" onClick={goToPrevious}><FaChevronLeft /></button>
      <button className="next" onClick={goToNext}><FaChevronRight /></button>

      <div>
        <span className="dot" onClick={() => goToSlide(0)}></span>
        <span className="dot" onClick={() => goToSlide(1)}></span>
        <span className="dot" onClick={() => goToSlide(2)}></span>
        <span className="dot" onClick={() => goToSlide(3)}></span>
        <span className="dot" onClick={() => goToSlide(4)}></span>
      </div>

    </div>
  );
}

export default Slideshow;
