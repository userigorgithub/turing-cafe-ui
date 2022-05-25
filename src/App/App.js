import React, { Component } from 'react';
import './App.css';
import AllReservations from './AllReservations';
import { fetchAll } from './apiCalls';

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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <AllReservations listOfReservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
