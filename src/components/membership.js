import React from 'react'
import './styles/membership.css'
import Ico1 from '../assets/idea.png'
import Ico3 from '../assets/palette.png'
import Ico2 from '../assets/book.png'

function membership() {
    return (
        <div>
            <div className="container">
                <div className="content__header_mem">
                    <h1>
                        Check Membership <br />
                        benefits
                    </h1>
                    <p>
                        who doing in the had was laminated was must while <br />
                        an misleads regurgitated convince.
                    </p>
                </div>
                    
                    <div className="content-box">
                        <div className="card__box_men">
                            <div className="img__box">
                                <img src={Ico1} alt="" className="img-fluid" />
                            </div>
                            <div className="card__body_men">
                                <h3>
                                    Professional Desinger
                                </h3>
                                <p>
                                    Can between of they thing <br />
                                    is lay original searching.
                                </p>
                            </div>
                        </div>

                        <div className="card__box_men">
                            <div className="img__box">
                                <img src={Ico2} alt="" className="img-fluid" />
                            </div>
                            <div className="card__body_men">
                                <h3>
                                    Professional Desinger
                                </h3>
                                <p>
                                    Can between of they thing <br />
                                    is lay original searching.
                                </p>
                            </div>
                        </div>

                        <div className="card__box_men">
                            <div className="img__box">
                                <img src={Ico3} alt="" className="img-fluid" />
                            </div>
                            <div className="card__body_men">
                                <h3>
                                    Professional Desinger
                                </h3>
                                <p>
                                    Can between of they thing <br />
                                    is lay original searching.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default membership
