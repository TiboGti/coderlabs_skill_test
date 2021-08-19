import React from 'react'
import './styles/fly.css'
import Flys from './flys'

const flya=[
    {  
        id:1,
        title: 'Website'
    },
    {  
        id:2,
        title: 'Banner ads'
    },
    {  
        id:3,
        title: 'Flyers'
    },
    {  
        id:4,
        title: 'Brochures'
    },
    {  
        id:5,
        title: 'Email grapphics'
    },
    {  
        id:6,
        title: 'Mobile apps'
    },
    {  
        id:7,
        title: 'Icons'
    },
    {  
        id:8,
        title: 'Stationery'
    },
    {  
        id:9,
        title: 'Logos'
    },
    {  
        id:10,
        title: 'Billboards'
    },
    {  
        id:11,
        title: 'Brand guides'
    },
    {  
        id:12,
        title: 'Digital ads'
    },
    {  
        id:13,
        title: 'Blog graphics'
    },
    {  
        id:14,
        title: 'Facebook cover'
    },
    {  
        id:15,
        title: 'Pitch Decks'
    },
    {  
        id:16,
        title: 'Signage'
    }

]


function fly() {
    return (
        <div>
            <div className="container">
                <div className="text-title">
                    <h1>
                        What we do
                    </h1>
                    <p>
                        Who doing in the had was laminated was must select to drew <br />
                        while an misleads regurgitation
                    </p>
                </div>
                <div className="content-fly">
                    {
                        flya.map(flys =>(

                            <div className="content-fly" key={flys.id}>

                               <Flys title={flys.title} />
                            </div>

                        )

                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default fly
