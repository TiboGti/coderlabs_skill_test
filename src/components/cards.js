import React from 'react'
import Card from './card'
import './cards.css'
import img1 from '../assets/img_1.png'
import img2 from '../assets/img_2.png'
import img3 from '../assets/img_3.png'

const cards=[
    {
        id:1,
        title: 'Diseñar',
        img: img1
    },
    {
        id:2,
        title:'Video juegos',
        img: img2
    },
    {
        id:3,
        title:'aprender',
        img: img3
    }

]

 function Cards() {
    return (


        <div className="container flex-cards">
            <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.img}/>
            </div>

                ))

            }
            
            </div>
        </div>
    )
}

export default Cards