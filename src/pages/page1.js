import React from 'react'

import Navbarp from '../components/navbarpage1';
import Hero from '../components/hero'
import './styles/page1.css'
import Cartas from '../components/cartas'
import Sectart from '../components/SectionArt'
import Membership from '../components/membership'
import Flye from '../components/fly'
import Gallery from '../components/gallery';


const page1 = () => {
    return (
        <div className="page_app">
            
      <header>
        <Navbarp/>
      </header>
      <main>
        <Hero/>
        <section>
          <Cartas/>
        </section>
        <section>
        <Sectart/>
        </section>
        <section>
          <Membership/>
        </section>
        <section>
          <Flye/>
        </section>
        <section>
          <Gallery/>
        </section>
      </main>

        </div>
    )
}

export default page1
