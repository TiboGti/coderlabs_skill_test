import React from 'react'
import logo from '../assets/check1.png'

function flys(props) {
    return (
        <div>
            <div className="fly shadow">
                    <span><img src={logo} alt="" className="img__icon" /></span>
                    <h5>
                        {props.title}
                    </h5>
                </div>
        </div>
    )
}

export default flys
