import React, { Component } from 'react';
import './ResForm.css';

class ResForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }


  changeState = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  submitReservation = (event) => {
    event.preventDefault();
    const res = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(res)
    this.clearReservations()
  }

  clearReservations = () => {
    this.setState({name: '', date: '', time: '', number: ''})
  }



  render() {
    return (
      <form className='res-form'>
        <input className='name' type='text' placeholder='Name' name='name' value={this.state.name} onChange={event => this.changeState(event)} />
        <input className='date' type='text' placeholder='Date (mm/dd)' name='date' value={this.state.date} onChange={event => this.changeState(event)} />
        <input className='time' type='text' placeholder='Time' name='time' value={this.state.time} onChange={event => this.changeState(event)} />
        <input className='number' type='text' placeholder='Num of guests' name='number' value={this.state.number} onChange={event => this.changeState(event)} />
        <button className='make-res-button' type='submit' onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}




export default ResForm;
