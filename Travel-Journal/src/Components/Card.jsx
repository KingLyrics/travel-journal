import React from 'react'

function Card(props) {
  return (
    <section className='row'>
        <div className='img'>
            <img src={props.card.imageUrl}/>
        </div>

        <div className="info-block">
          
          <div className="title">
          <h3>{props.card.location}</h3>
          <a href={props.card.googleMapsUrl}>View on Google Maps</a>
          </div>

        <div className="head">
          <h1>{props.card.title}</h1>
        </div>

        <div className="dates">
        {props.card.startDate} - {props.card.endDate}
        </div>

    <div className="description">
        {props.card.description} 
    </div>

        </div>
          


    </section>
  )
}

export default Card