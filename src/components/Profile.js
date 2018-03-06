import React, { Component } from 'react';
import Preferences from './Preferences';
import Matches from './Matches'

import '../styles/Profile.css'

class Profile extends Component {


  render() {


    return (
      <div className="Profile">

        <h2>Profile</h2>
        <div className="bio">

          <div className="bio-photo">
            <img src={ this.props.image }/>
          </div>

          <div className="bio-details">
            <p>Name: { this.props.name } </p>
            <p>Age: { this.props.age }</p>
            <p>Location: { this.props.location } </p>
            <p>Bio: { this.props.bio } </p>
          </div>

        </div>

        <a href="" className="sniffing-btn">Start Sniffing</a>

        <Preferences />

        <Matches />

        <a href="" className="sniffing-btn">Start Sniffing</a>

      </div>
    );
  }
}

export default Profile;
