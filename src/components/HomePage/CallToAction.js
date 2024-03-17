import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));


    }, []);


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
            Navigate('/all-subscriber');
            alert('subscribers is Updated');
          });

        }

    return (
        <>
<section className="call-to-action-area rel z-2">
  <div className="container">
    <div className="cta-inner bgs-cover" style={{backgroundImage: 'url(assets/images/background/cta-bg.jpg)'}}>
      <div className="row">
        <div className="col-xl-6">
          <div className="cta-item wow fadeInLeft delay-0-2s">
            <div className="icon"><i className="flaticon-target" /></div>
            <h4>Have any Project On Minds ?</h4>
            <a href="contact.html" className="details-btn"><i className="far fa-arrow-right" /></a>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="cta-item wow fadeInRight delay-0-2s">
            <div className="icon"><i className="flaticon-target" /></div>
            <h4>We are to work SEO optimization ?</h4>
            <a href="contact.html" className="details-btn"><i className="far fa-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




        </>
    );
};

export default CallToAction;