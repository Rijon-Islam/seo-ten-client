import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);


  return (

    <>


{
  about.map(a=><section className="about-area-one pt-130 pb-125 rel z-1" id="about">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="col-lg-5">
        <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
          <img src={a.aboutImg} alt="About us" />
          <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-7">
        <div className="about-content-one wow fadeInUp delay-0-4s">
          <div className="section-title mb-45">
            <span className="sub-title mb-15">{a.aboutText} </span>
            <h2>{a.aboutHeading} </h2>
          </div>
          <ul className="list-style-one">
            <li>
              <div className="content">
                <h4>{a.certifiedHeading} </h4>
                <p>{a.certifiedDetails} </p>
              </div>
            </li>
            <li>
              <div className="content">
                <h4>{a.awardHeading} </h4>
                <p>{a.awardDetails} </p>
              </div>
            </li>
            <li>
              <div className="content">
                <h4>{a.completeProject} </h4>
                <p>{a.completeProjectdetails}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section> )
}




      



    </>
  );
};

export default AboutSection;
