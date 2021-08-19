import React from 'react'
import Logo1 from '../assets/gallery1.jpg'
import Logo2 from '../assets/gallery2.jpg'
import Logo3 from '../assets/gallery3.jpg'
import Logo4 from '../assets/gallery4.jpg'
import Logo5 from '../assets/gallery5.jpg'

function gallery() {
    return (
        <div>
            <div className="container">
                <div className="text-title">
                    <h1>Our recent work</h1>
                    <p>
                    Who doing in the had was laminated was must select 
                    </p>
                </div>

                <div className="gallery-content">
                    <div className="box-gallery">
                        <div className="gallery__box_img">
                            <img src={Logo2} alt="" className="img-fluid" />
                        </div>
                        <div className="gallery__box_img">
                            <img src="" alt={Logo1} className="img-fluid" />
                        </div>
                    </div>
                    <div className="box-gallery">
                        <div className="gallery__box_img2">
                            <img src="" alt={Logo3} className="img-fluid" />
                        </div>
                    </div>
                    <div className="box-gallery">
                    <div className="gallery__box_img">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                        <div className="gallery__box_img">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gallery
