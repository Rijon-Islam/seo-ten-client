import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (



    <>
      <section className="pricing-area-four pt-65 pb-165 rel z-1" id='pricing'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="pricing-plan-content text-center mb-65 wow fadeInUp delay-0-2s">
                <div className="section-title text-center mb-30">
                  <span className="sub-title mb-15">Pricing Plan</span>

                  <h2>Choose Your Perfect Pricing Package</h2>
                </div>

              </div>
            </div>
          </div>
          <div className="tab-content wow fadeInUp delay-0-4s">
            <div className="tab-pane fade show active" id="monthlyTwo">
              <div className="row justify-content-center">

                {
                  pricing.map(b => b.packageName === 'Basic' && <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three ">

                      <h4>{b.packageName} Plan</h4>
                      <ul className="list-style-two">
                        <li>{b.packagePointOne}</li>
                        <li>{b.packagePointTwo}</li>
                        <li>{b.packagePointThree}</li>
                        <li>{b.packagePointFour}</li>
                        <li>{b.packagePointFive}</li>
                        <li>{b.packagePointSix}</li>
                        <li>{b.packagePointSeven}</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">{b.packagePrice}</span>
                          <span className="save"></span>

                          <Link to={`/order-now/${b._id}`} className="theme-btn ">
                            {b.packageButtonText} <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>)}


                {
                  pricing.map(p => p.packageName === 'Premium' && <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three">
                      <span className="badge">popular</span>
                      <h4>{p.packageName} Plan</h4>
                      <ul className="list-style-two">
                        <li> {p.packagePointOne}</li>
                        <li> {p.packagePointTwo}</li>
                        <li> {p.packagePointThree}</li>
                        <li> {p.packagePointFour}</li>
                        <li> {p.packagePointFive}</li>
                        <li>{p.packagePointSix}</li>
                        <li> {p.packagePointSeven}</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">{p.packagePrice}</span>
                          <span className="save"></span>

                          <Link to={`/order-now/${p._id}`} className="theme-btn ">
                            {p.packageButtonText} <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>)}



                {
                  pricing.map(s => s.packageName === 'Standard' && <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three ">

                      <h4>{s.packageName} Plan</h4>
                      <ul className="list-style-two">
                        <li> {s.packagePointOne}</li>
                        <li> {s.packagePointTwo}</li>
                        <li> {s.packagePointThree}</li>
                        <li> {s.packagePointFour}</li>
                        <li> {s.packagePointFive}</li>
                        <li>{s.packagePointSix}</li>
                        <li> {s.packagePointSeven}</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">{s.packagePrice}</span>
                          <span className="save"><span></span></span>
                          <Link to={`/order-now/${s._id}`} className="theme-btn ">
                            {s.packageButtonText} <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>)}



              </div>
            </div>

          </div>
        </div>
        <div className="wave-shapes">
          <img className="shape one" src="assets/images/shapes/pricing-bg-wave2.png" alt="Wave Shape" />
        </div>
      </section>



    </>
  );
};

export default PricingSection;