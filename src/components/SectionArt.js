import React from 'react'
import './styles/sectionArt.css'
import Img1 from '../assets/submit.png'
import Img2 from '../assets/work.png'
import Img3 from '../assets/post.png'



function SectionArt() {
    return (
        <div>
            <div className="container">
            <div className="sec__header">
                <h1>
                    How it works
                </h1>
                <p>who doing in the had was laminated was must select to drew <br />
                    while an misleads regurgitated convice
                </p>
            </div>

                <div className="row">
                    <div className="col-md-5 text__content">
                        <h2 className="sec__title">#1 Submit your request</h2>
                        <p className="sec__par">Back on Said step a upon succeeded even <br />
                         examples careful  god each before my he of <br />
                          client move but team- and to was me think <br />
                           as name he day.
                        </p>
                    </div>
                    <div className="col-md-7 img__content">
                        <img src={Img1} alt="" className="img-fluid" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7 img__content">
                        <img src={Img2} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5 text__content">
                        <h2 className="sec__title">#2 We do the work</h2>
                        <p className="sec__par">Back on Said step a upon succeeded even <br />
                         examples careful  god each before my he of <br />
                          client move but team andas
                          </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5 text__content">
                        <h2 className="sec__title">#3 Approved and publish</h2>
                        <p className="sec__par">
                            The done a the classes deep but coffee is <br />
                            compensation intention readiness are there <br />
                            matters reedy, anger up option he display <br />
                            pass soft devotion measure
                        </p>
                    </div>
                    <div className="col-md-7 img__content">
                        <img src={Img3} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionArt;
