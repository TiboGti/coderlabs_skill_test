import React from 'react'
import './styles/navbarpage.css'

const navbarpage1 = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container ">
                <a href="" className="navbar-brand">dorik</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="cont-navb collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                Why Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                Servicies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                Testimonial
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">pricing</a>
                        </li>
                    </ul>

                    <div className="nav-item">
                        <button className="btn btn-large btn-primary">Free Quote</button>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default navbarpage1
