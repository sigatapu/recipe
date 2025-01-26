import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt="image" width='200px' height='150px' />
      <h3>{props.name}</h3>
      <button onClick={props.click} >view recepie</button>
    </div>
  )
}

export default Card
