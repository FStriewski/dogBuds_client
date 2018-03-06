import React, { Component } from 'react';
import Preferences from './Preferences';
import Matches from './Matches'

class Profile extends Component {


  render() {
    const { name } = this.props


    return (
      <div className="Profile">

        <div className="bio">
          <h2>Profile</h2>
          <img />
          <p>Name: </p>
          <p>Age: </p>
          <p>Location: </p>
          <p>Bio: </p>
        </div>

        <Preferences />

        <Matches />

        <a href="">Start Sniffing</a>

      </div>
    );
  }
}

export default Profile;
