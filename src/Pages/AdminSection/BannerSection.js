import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const BannerSection = () => {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/banner`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, []);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerImage = event.target.bannerImage.value;
        const buttonOneText = event.target.buttonOneText.value;
        const buttonOneLink = event.target.buttonOneLink.value;
        const sliderTextOne = event.target.sliderTextOne.value;
        const sliderTextTwo = event.target.sliderTextTwo.value;


        const bannerSection = {
            bannerHeading,
            bannerDetails,
            bannerImage,
            buttonOneText,
            buttonOneLink,
            sliderTextOne,
            sliderTextTwo,

        };

        const url = `http://localhost:5000/add-banner`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2>Update Banner</h2>

                                {
                                    banner.length === 1 &&
                                    <>
                                        {
                                            banner.map(c =>
                                                banner.map(c =>
                                                    <Link className='theme-btn' to={`/banner/${c._id}`}> Please Banner Section</Link>)
                                            )
                                        }
                                    </>
                                }
                                {
                                    banner.length === 0 &&

                                    <form class="contact-form " onSubmit={handleBannerSection}>
                                        <div class="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="bannerHeading" placeholder="Banner Heading" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="bannerDetails" placeholder="Banner Details" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="bannerImage" placeholder="Banner Image" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="buttonOneText" placeholder="Button One Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="buttonOneLink" placeholder="Button One URL" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="sliderTextOne" placeholder="Slider Text One" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="sliderTextTwo" placeholder="Slider Text Two" required />
                                                </div>
                                            </div>


                                            <div class="slider-btn">
                                                <button class="theme-btn" data-animation="fadeInRight" data-delay=".8s">Add Banner</button>
                                            </div>
                                        </div>

                                    </form>
                                }



                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default BannerSection;