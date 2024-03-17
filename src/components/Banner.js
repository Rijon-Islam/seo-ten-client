import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (
   
    

    <>
    

<section className="main-slider-area bgc-black-with-lighting rel z-1">
  <div className="main-slider-active">

  {
      banners.map(b=><div className="slider-item">
      <div className="container">
        <div className="slider-content">
          <span className="sub-title">{b.bannerDetails}</span>
          <h1>{b.bannerHeading}</h1>
          <div className="slider-btns">
            <a href={b.buttonOneLink} className="theme-btn">{b.buttonOneText} <i className="fas fa-angle-double-right" /></a>
           
          </div>
        </div>
      </div>
      <div className="slider-video" style={{backgroundImage: 'url(assets/images/slider/slide1.jpg)'}}>
       
        <span className="video-title cd-headline clip">
          <span className="cd-words-wrapper">
            <b className="is-visible">{b.sliderTextOne}</b>
            <b>{b.sliderTextTwo}</b>
          </span>
        </span>
      </div>
    </div> )
    }
    
    
   
  </div>
  <div className="container"><div className="main-slider-dots" /></div>
  <div className="slider-shapes">
    <img className="shape dots one" src="assets/images/shapes/slider-dots.png" alt="Shape" />
    <img className="shape dots two" src="assets/images/shapes/slider-dots.png" alt="Shape" />
    <img className="shape wave-line" src="assets/images/shapes/slider-wave-line.png" alt="Shape" />
    <img className="shape circle" src="assets/images/shapes/slider-circle.png" alt="Shape" />
  </div>
</section>

    
    
    </>
  );
};

export default Banner;
