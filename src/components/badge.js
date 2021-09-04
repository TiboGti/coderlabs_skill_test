import React from 'react'
import './styles/badge.css'
import  logo from '../assets/code.png'
import Gravatar from './Gravatar'

 class Badge extends React.Component{
     render(){
         return (
            <div className="Badge">
            <div className="Badge__header">
              <img src={logo} alt="Logo de la conferencia" />
            </div>
    
            <div className="Badge__section-name">
              <Gravatar
                className="Badge__avatar"
                email={this.props.email}
              />
              <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
            </div>
    
            <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
    
            <div className="Badge__footer">#CoderLabs</div>
          </div>
         )
     }
 }
export default Badge