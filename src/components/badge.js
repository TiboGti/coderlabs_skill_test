import React from 'react'
import './styles/badge.css'
import  logo from '../assets/img_1.png'

 class Badge extends React.Component{
     render(){
         return (
            <div className="Badge">
            <div className="Badge__header">
              <img src={logo} alt="Logo de la conferencia" />
            </div>
    
            <div className="Badge__section-name">
              <img
                className="Badge__avatar"
                src="https://s.gravatar.com/avatar/38e1041483d0975ac2eda785b22bdf57?s=80"
                alt="Avatar"
              />
              <h1>
                Jose <br /> Perez
              </h1>
            </div>
    
            <div className="Badge__section-info">
              <h3>Frontend Developer</h3>
              <div>@Tiibo</div>
            </div>
    
            <div className="Badge__footer">#CoderLabs</div>
          </div>
         )
     }
 }
export default Badge