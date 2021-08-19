import React from 'react'

import ico1 from '../assets/ban.png'
import ico2 from '../assets/fire.png'
import ico3 from '../assets/tech.png'
import './styles/cartas.css'

const cartas = () => {
    return (
        <div>
            <div className="container">
                <div className="text-title">
                    <h1>Feactures you'll love</h1>
                    <p>whom doing in the had was laminated was must select to drew
                        <br /> while an misleads regurgitated convince</p>
                </div>
                <div className="container">
                    <div className="content-box">
                        <div className="card-box shadow-lg">
                            <div className="img-box">
                                <img src={ico1} alt="" className="img-fluid" />
                            </div>
                            <div className="card--body">
                                <h3>
                                    Fast & reliable
                                </h3>
                                <p>Can between of they live thing
                                    is lay original searching.
                                </p>
                            </div>
                        </div>

                        <div className="card-box shadow-lg">
                            <div className="img-box">
                                <img src={ico2} alt="" className="img-fluid" />
                            </div>
                            <div className="card--body">
                                <h3>
                                    Fast & reliable
                                </h3>
                                <p>Can between of they live thing
                                    is lay original searching.
                                </p>
                            </div>
                        </div>

                        <div className="card-box shadow-lg">
                            <div className="img-box">
                                <img src={ico3} alt="" className="" />
                            </div>
                            <div className="card--body">
                                <h3>
                                    Fast & reliable
                                </h3>
                                <p>Can between of they live thing
                                    is lay original searching.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default cartas
