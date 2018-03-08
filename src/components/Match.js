import React, { Component } from 'react';
import '../styles/Match.css'

class Match extends Component {

  render() {
    return (
      <div className="Match">
        <img src={ this.props.image} alt="profile"/>
        <p>Username: { this.props.username }</p>
        <p>Age: { this.props.age } </p>
        <p>Location: {this.props.location }</p>
        <br/>
        <p>Top 3 Breeds:</p>
        <p>1. { this.props.breed1 } (Votes: { this.props.votes1 })</p>
        <p>2. { this.props.breed2 } (Votes: { this.props.votes2 })</p>
        <p>3. { this.props.breed3 } (Votes: { this.props.votes3 })</p>
        <br/>

        <button className="contact"><a href={"mailto:" + this.props.email}>Contact Me</a></button>
      </div>
    )
  }
}
 export default Match;
