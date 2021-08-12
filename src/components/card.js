import React from 'react'


 function card(props) {
     console.log(props)
    return (
        <div className="card text-center m-1">
            <img src={props.imageSource} alt="" className="img-fluid"/>

            <div className="card-body">
                <h4 className="card-title">
                    {props.title}

                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem laudantium error quas illum natus quaerat asperiores perferendis perspiciatis. Inventore et quaerat voluptatibus ex, unde molestiae praesentium esse asperiores aspernatur.</p>
                <a href="#!" className=" btn btn-outline-secondary ">
                    go to this
                </a>
            </div>
            
        </div>
    )
}

export default card