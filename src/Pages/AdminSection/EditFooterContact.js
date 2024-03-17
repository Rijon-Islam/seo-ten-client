import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const EditFooterContact = () => {

    const [footerad, setAddressfooter] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const footeraddress = event.target.footeraddress.value;
        const footerPhone = event.target.footerPhone.value;
        const footerEmail = event.target.footerEmail.value;




        const contactSection = {

            footeraddress,
            footerPhone,
            footerEmail,




        };

        const url = `http://localhost:5000/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <div className='container vh-100 d-flex align-items-center justify-content-center'>
                <section id="services" class="services-area pt-120 pb-90 fix" >



                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">


                                <h2> Update Company Address </h2>



                                <form class="contact-form " onSubmit={handlefooterAddress}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="footeraddress" defaultValue={footerad.footeraddress} placeholder="Your Address" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="footerPhone" defaultValue={footerad.footerPhone} placeholder="Your Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="footerEmail" defaultValue={footerad.footerEmail} placeholder="Your Email address" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="theme-btn" data-delay=".8s"> Update Address</button>
                                        </div>
                                    </div>

                                </form>



                            </div>


                        </div>
                    </div>


                </section>
            </div>

        </>
    );
};

export default EditFooterContact;