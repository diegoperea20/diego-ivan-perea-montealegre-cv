import React from 'react'
import "./card.css";
function CardProject(props) {
  return (
    <div className='my-card'>
        <div className='my-card-title-div'>
              <a className='my-card-title' href={props.url} >{props.title}</a>
             
        </div>
        <div className='my-card-text-div'>
        <h2 className='my-card-text'>{props.text}</h2>
        </div>
        {props.items && (
            <ul className='my-card-items'>
              {props.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
    </div>
  )
}

export default CardProject