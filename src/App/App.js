import React, { Component } from 'react';
import './App.css';
import AllReservations from './AllReservations';
import { fetchAll } from './apiCalls';
import ResForm from './ResForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetchAll()
    .then(data => this.setState({ reservations: data })) //why not ({reservations: data.reservations})? is it because it's [ {}, {}, etc. ] AND NOT {reservations: [ {}, {}, etc. ]} pattern
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]});
  }

  deleteSingleReservation = (id) => {
    console.log(id);
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id);

    this.setState({ reservations: filteredReservations });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm
            addReservation={this.addReservation}
          />
        </div>
        <div className='resy-container'>
          <AllReservations
            listOfReservations={this.state.reservations}

            deleteReservation={this.deleteSingleReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
