import React from 'react'

function Card(props) {
  return (
    <section className='row'>
        <div className='img'>
            <img src={props.imageUrl}/>
        </div>

        <div className="info-block">
          
          <div className="title">
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>

        <div className="head">
          <h1>{props.title}</h1>
        </div>

        <div className="dates">
        {props.startDate} - {props.endDate}
        </div>

    <div className="description">
        {props.description} 
    </div>

        </div>
          


    </section>
  )
}

export default Card