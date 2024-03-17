import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {






  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);



  const [footerAddress, setFooterAddress] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);


  const handleSubscriber = (event) => {
    event.preventDefault();
    const email = event.target.email.value;




    const addItem = {
      email,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers is Updated');
      });


  }










  return (



    <>

      <div>
        {/* footer area start */}
        <footer className="main-footer footer-two pt-80 bgc-lighter">
          <div className="container">
            <div className="row justify-content-xl-between justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6">
                {
                  footerSocial.map(s => <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
                    {
                      logo.map(l => <div className="footer-logo mb-25">
                        <a href="/"><img src={l.logo} alt="Logo" /></a>
                      </div>)
                    }


                    <p>{s.aboutText}</p>
                    <div className="social-style-two pt-5">
                      <a href={s.fblink}><i className="fab fa-facebook-f" /></a>
                      <a href={s.inslink}><i className="fab fa-instagram" /></a>

                    </div>
                  </div>)
                }


              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact Us</a></li>

                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-8">
                <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>Sing up to get more every updates</p>
                  <form onSubmit={handleSubscriber} action="#">
                    <input type="email" name="email" placeholder="Enter email" required />
                    <button className="theme-btn">Subscribe Now <i className="fas fa-angle-double-right" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-30 pt-25 pb-10">
            <div className="container">

              {
                footerCopyright.map(c => <div className="copyright-text text-center">
                  <p>{c.copyrightText}</p>
                </div>)
              }

            </div>
          </div>
        </footer>

        <button className="scroll-top scroll-to-target" data-target="html"><span className="fas fa-angle-double-up" /></button>
      </div>


    </>
  );
};

export default Footer;
