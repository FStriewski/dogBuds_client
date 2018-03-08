import React, { Component } from 'react';
import '../styles/Preferences.css'

class Preferred extends Component {

  render() {
    return (
      <div className="preferred">
        <img src={ this.props.image }/>
        <p>Breed: { this.props.breed } </p>
        <p>Votes: {this.props.votes } </p>
        </div>
    )
  }
}

export default Preferred;
