import React from 'react'

import  './styles/navbar.css'


export default function navbar() {
    return (
        <nav className="Navbar ">
        <div className="container-fluid">
          <a className="Navbar__brand " href="/">
            <img className="Navbar__brand-logo" src="" alt="Logo" />
            <span className=" bd-highlight">#CoderLabs</span>
            <span className="bd-highlight"></span>
          </a>
        </div>
      </nav>
    )
}
