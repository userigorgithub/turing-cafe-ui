import React from 'react';
import './ResCard.css';

const ResCard = ({id, name, date, time, number, deleteRes}) => {
  return (
    <div className='single-res-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Num of Guests: {number}</p>

      <button onClick={() => deleteRes(id)}>Delete</button>
    </div>
  )
}

export default ResCard;
