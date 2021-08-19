import React from 'react'
import './styles/hero.css'
import Hero__img from '../assets/model_sec_2.svg'

 function hero() {
    return (
        <div>
          <section className="hero">
              <div className="container">
                  <div className="row">
                      <div className="col-md-5 hero__text">
                          <h1>Grow your <br />
                            business to the <br />
                            next level
                           </h1>
                            <p>
                                invitation to the he to train our pitifully <br />
                                evaluation to broader object
                            </p>

                            <div className="btn-cont">

                                <button className="">Book Now</button>
                            </div>
                            

                      </div>
                      <div className="col-md-7">
                          <img src={Hero__img} alt="" className="imgfluid" />
                      </div>
                  </div>
                    
              </div>
              
              
              
              </section>  
        </div>
    )
}

export default hero