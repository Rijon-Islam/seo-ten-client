import React, { useEffect, useState } from 'react';

const WorkSection = () => {

  const [stepwork, setWork] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/worksec`)
      .then((res) => res.json())
      .then((info) => setWork(info));
  }, []);


  return (


    // <>
    //   <section className="space overflow-hidden position-relative space" style={{
    //     backgroundImage:
    //       "url(https://i.postimg.cc/26j1rhdM/process-bg-1.jpg)",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",

    //   }}>
    //     <div className="container">
    //       <div className="title-area text-center">
    //         <span className="sub-title">Work Process</span>
    //         <h2 className="sec-title">How it Work Processing</h2>
    //       </div>
    //       <div className="step-wrap">
    //         <div className="process-line">
    //           <img src="assets/img/shape/process-line.png" alt />
    //         </div>
    //         <div className="process-card_wrapp">

              // {
              //   stepwork.map(a => a.stepNumber === '01' && <div className="process-card">
    //               <div className="process-card_icon">
    //                 <span className="number">{a.stepNumber}</span>
    //               </div>
    //               <div className="process-card_content">
    //                 <h2 className="box-title">{a.stepTitle}</h2>
    //                 <p className="process-card_text">{a.stepDetails}</p>
    //               </div>
    //               <div className="process-card_img">
    //                 <img src={a.stapIcon} alt="Process" />
    //               </div>
    //             </div>
    //             )
    //           }


              // {
              //   stepwork.map(b => b.stepNumber === '02' && <div className="process-card">
    //               <div className="process-card_icon">
    //                 <span className="number">{b.stepNumber}</span>
    //               </div>
    //               <div className="process-card_content">
    //                 <h2 className="box-title">{b.stepTitle}</h2>
    //                 <p className="process-card_text">{b.stepDetails}</p>
    //               </div>
    //               <div className="process-card_img">
    //                 <img src={b.stapIcon} alt="Process" />
    //               </div>
    //             </div>)
    //           }



              // {
              //   stepwork.map(c => c.stepNumber === '03' && <div className="process-card">
    //               <div className="process-card_icon">
    //                 <span className="number">{c.stepNumber}</span>
    //               </div>
    //               <div className="process-card_content">
    //                 <h2 className="box-title">{c.stepTitle}</h2>
    //                 <p className="process-card_text">{c.stepDetails}</p>
    //               </div>
    //               <div className="process-card_img">
    //                 <img src={c.stapIcon} alt="Process" />
    //               </div>
    //             </div>)
    //           }

              // {
              //   stepwork.map(d => d.stepNumber === '04' && <div className="process-card">
    //               <div className="process-card_icon">
    //                 <span className="number">{d.stepNumber}</span>
    //               </div>
    //               <div className="process-card_content">
    //                 <h2 className="box-title">{d.stepTitle}</h2>
    //                 <p className="process-card_text">{d.stepDetails}</p>
    //               </div>
    //               <div className="process-card_img">
    //                 <img src={d.stapIcon} alt="Process" />
    //               </div>
    //             </div>)
    //           }




    //         </div>
    //       </div>
    //     </div>
    //   </section>

    // </>
    <>

      <section className="work-process-area pb-95 rel z-1 mt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Working Process</span>
                <h2>How does we works</h2>
              </div>
            </div>
          </div>
          <div className="work-process-wrap rel z-1">
            <div className="row justify-content-between">

              
            {
                stepwork.map(a => a.stepNumber === '01' &&  <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <span className="number">{a.stepNumber}</span>
                    <img src={a.stapIcon} alt="Process" />
                  </div>
                  <h4>{a.stepTitle}</h4>
                  <p>{a.stepDetails}</p>
                </div>
              </div> )}


              {
                stepwork.map(b => b.stepNumber === '02' && <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <span className="number">{b.stepNumber}</span>
                    <img src={b.stapIcon} alt="Process" />
                  </div>
                  <h4>{b.stepTitle}</h4>
                  <p>{b.stepDetails}</p>
                </div>
              </div> )}



              {
                stepwork.map(c => c.stepNumber === '03' && <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <span className="number">{c.stepNumber}</span>
                    <img src={c.stapIcon} alt="Process" />
                  </div>
                  <h4>{c.stepTitle}</h4>
                  <p>{c.stepDetails}</p>
                </div>
              </div>)}

             

              
              {
                stepwork.map(d => d.stepNumber === '04' && <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <span className="number">{d.stepNumber}</span>
                    <img src={d.stapIcon} alt="Process" />
                  </div>
                  <h4>{d.stepTitle}</h4>
                  <p>{d.stepDetails}</p>
                </div>
              </div> )}
              

              

            </div>
            <div className="work-process-shape">
              <img src="assets/images/shapes/worp-process-step.png" alt="Shape" />
            </div>
          </div>
        </div>
      </section>




    </>
  );
};

export default WorkSection;