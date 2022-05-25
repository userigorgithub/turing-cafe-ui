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
    .then(data => this.setState({reservations: data}))
  }


  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]});
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <AllReservations listOfReservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
