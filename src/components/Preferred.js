import React, { Component } from 'react';

class Preferred extends Component {

  render() {
    return (
      <div>
        <img src={ this.props.image }/>
        <p>Breed: { this.props.breed } </p>
        <p>Votes: {this.props.votes } </p>
        </div>
    )
  }
}

export default Preferred;
