import React from 'react'
import './styles/home.css'
import Video from '../assets/video.mp4'

  
const home = () => {
    return (
        <div className="home__content">
            <div className="sec">
                <video  autoPlay muted loop>
                    <source src={Video} type="video/mp4"/>
                </video>
                <h2>
                    Coder <br />
                    Labs
                </h2>
             <div className="dot">

             </div>
            </div>
           
        </div>
    )
}

export default home
