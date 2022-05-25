import React from 'react';
import './ResCard.css';

const ResCard = ({id, name, date, time, number}) => {
  return (
    <div className='single-res-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Num of Guests: {number}</p>
    </div>
  )
}


export default ResCard;
