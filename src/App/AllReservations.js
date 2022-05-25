import React from 'react';
import './AllReservations.css';
import ResCard from './ResCard';


const AllReservations = ({listOfReservations}) => {
  const resys = listOfReservations.map(reservation => {
    return (
      <ResCard
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      />
    )

  })
  return (
    <div className='all-reservations-cont'>
      {resys}
    </div>
  )
}



export default AllReservations;
