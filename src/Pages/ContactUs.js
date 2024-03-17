import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const emailAddress = event.target.emailAddress.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      fullName,
      emailAddress,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        
        alert('Message is Updated');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (



    <>
      <section className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1" id='contact'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              {
                footerAddress.map(a=> <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-55">
                  <h2>Have any project on mind! feel free contact with us or <span>say hello</span></h2>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <span className="title">Location</span>
                      <b className="text">{a.footeraddress}</b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span className="title">Email Address</span>
                      <b className="text">{a.footerEmail}</b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Phone No</span>
                      <b className="text">{a.footerPhone}</b>
                    </div>
                  </div>
                </div>
              </div> )
              }
             
            </div>
            <div className="col-xl-5 col-lg-6">
              <form onSubmit={handleMessage} id="contactForm mt-100">
              <h2 className=' text-white mb-50'>Send us Message</h2>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="fullName" required data-error="Please enter your name" placeholder="Name" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" id="emailAddress" required data-error="Please enter your email" placeholder="Email" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input type="text" name="subject" className="form-control" id="subject" required data-error="Please enter your phone number" placeholder="Subject" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input type="text" name="messageStatus" className="form-control" hidden value='UnRead' />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea name="message" id="message" className="form-control" cols={30} rows={6} required data-error="Please enter your message" placeholder="Message..." defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">

                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" class="theme-btn">Send messages <i class="fas fa-angle-double-right"></i></button>
                    <div id="msgSubmit" className="h5 text-center hidden" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img className="shape circle" src="assets/images/shapes/slider-dots.png" alt="Shape" />
          <img className="shape dots" src="assets/images/shapes/contact-dots.png" alt="Shape" />
          <img className="shape wave-line" src="assets/images/shapes/contact-wave-line.png" alt="Shape" />
        </div>
      </section>


    </>
  );
};

export default ContactUs;