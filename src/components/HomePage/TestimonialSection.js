import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
    <>
     <section className="testimonial-area-two rel z-1 mt-130 mb-120">
  <div className="container for-middle-border">
    <div className="row justify-content-between align-items-center pb-90 rpb-35 wow fadeInUp delay-0-2s">
      <div className="col-xl-7 col-lg-8">
        {
          testimonialtext.map(a=><div className="section-title">
          <span className="sub-title mb-15">{a.testimonialText}</span>
          <h2>{a.testimonialHeading}</h2>
        </div> )
        }
        
      </div>
      <div className="col-lg-4">
        <div className="slider-arrow-btns text-lg-end">
          <button className="work-prev"><i className="far fa-arrow-left" /></button>
          <button className="work-next"><i className="far fa-arrow-right" /></button>
        </div>
      </div>
    </div>
    <div className="testimonial-two-active">
      {
        testimonial.map(t=> <div className="testimonial-item-two wow fadeInUp delay-0-2s">
        <div className="testimonial-author">
          <img src={t.image} alt="Author" />
        </div>
        <div className="testimonial-content">
          <p>{t.desc} </p>
          <div className="author-description">
            <span className="h5">{t.personName}</span>
            <span className="designation">{t.personTitle}</span>
          </div>
        </div>
      </div> )
      }
     
      
   
    
    </div>
  </div>
</section>



    </>
  );
};

export default TestimonialSection;
