import React from 'react'
import './styles/pagenew.css'
import Navbar from '../components/navbar' 
import Badge from '../components/badge' 
import  Hero from '../assets/hero.jpg'
import Form from '../components/form'

 function pagenew() {
    return (
        <div>
            <Navbar/>
            <div className="BadgeNew__hero">
          <img className=" img-hero" src={Hero} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge
                
              />
            </div>

            <div className="col-md-6">

              <Form/>

            </div>

          </div>
        </div>
      </div>
    )
}

export default pagenew