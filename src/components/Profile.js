import React, { Component } from 'react';
import Preferences from './Preferences';
import Matches from './Matches'

import { connect } from 'react-redux'

import '../styles/Profile.css'

class Profile extends Component {


  render() {


    return (
      <div className="Profile">

        <h2>Profile</h2>
        <div className="bio">

          <div className="bio-photo">
            <img src={ this.props.user.image } alt="profile"/>
          </div>

          <div className="bio-details">
            <p>Name: { this.props.user.name } </p>
            <p>Age: { this.props.user.age }</p>
            <p>Location: { this.props.user.location } </p>
            <p>Bio: { this.props.user.bio } </p>
          </div>

        </div>

        <a href="" className="sniffing-btn">Start Sniffing</a>

        <Matches />

        <Preferences />



        <a href="" className="sniffing-btn">Start Sniffing</a>

      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    user: reduxState.user
  }
}


export default connect(mapStateToProps)(Profile)
