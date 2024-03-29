import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/about-us/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);



    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutHeading = event.target.aboutHeading.value;
        const aboutImg = event.target.aboutImg.value;
        const aboutText = event.target.aboutText.value;
        const certifiedHeading = event.target.certifiedHeading.value;
        const certifiedDetails = event.target.certifiedDetails.value;
        const awardHeading = event.target.awardHeading.value;
        const awardDetails = event.target.awardDetails.value;
        const completeProject = event.target.completeProject.value;
        const completeProjectdetails = event.target.completeProjectdetails.value;



        const aboutSection = {

            aboutImg,
            aboutText,
            aboutHeading,
            certifiedHeading,
            certifiedDetails,
            awardHeading,
            awardDetails,
            completeProject,
            completeProjectdetails,


        };

        const url = `http://localhost:5000/update-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update About </h2>



                            <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImg" defaultValue={about.aboutImg} placeholder="About Image" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="certifiedHeading" defaultValue={about.certifiedHeading} placeholder="Certified Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="certifiedDetails" defaultValue={about.certifiedDetails} placeholder="Certified Details" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="awardHeading" defaultValue={about.awardHeading} placeholder="Award Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="awardDetails" defaultValue={about.awardDetails} placeholder="Award Details" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="completeProject" defaultValue={about.completeProject} placeholder="Complete Project Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="completeProjectdetails" defaultValue={about.completeProjectdetails} placeholder="Complete Project Details" required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="theme-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default UpdateAboutSection;