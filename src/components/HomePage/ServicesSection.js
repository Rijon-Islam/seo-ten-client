import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (

    <>

      <section className="design-feature-area overflow-hidden pt-200 pb-200 text-white bgc-black-with-lighting rel z-1" id="services">
        <div className="container ">
          {
            service.map(s => <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">{s.servicesubHeading}</span>
              <h2>{s.serviceHeading}</h2>
            </div>)
          }

          <div class="">
            <div className="">
              <div className="row">
                {
                  items.map(i=> <div className="col-xl-4 col-md-6">
                  <div className="service-item style-three wow fadeInRight delay-0-2s">
                    <img src={i.serviceIcon} alt="Service"></img>
                    <div className="content">
                      <h4><a href="/">{i.serviceTitle}</a></h4>
                      <p>{i.serviceDetails}</p>
                    </div>
                  </div>
                </div>)
                }
                
               
                



              </div>
            </div>


          </div>



        </div>

        <div className="design-feature-shapes">
          <img className="shape dots" src="assets/images/shapes/slider-dots.png" alt="Shape" />
          <img className="shape wave-line" src="assets/images/shapes/feature-wave-line.png" alt="Shape" />
        </div>
      </section>






    </>


  );
};

export default ServicesSection;
