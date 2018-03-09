import React, { Component } from 'react';
import Preferences from './Preferences';
import Matches from './Matches'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Profile.css'

class Profile extends Component {

  componentWillMount() {
    // this.props.fetchUser(this.props.match.params.id)
  }

  render() {
    // const {currentUser} = this.props.currentUser
    if (!this.props.user.id) return <Redirect to="/login" />
    return (
      <div className="Profile">

        <h2>Profile</h2>
        <div className="bio">

          <div className="bio-photo">
            <img src="http://www.citydogshare.org/assets/default_dog-f1f5e5aa031ad0a956a936dc4fb4bde95c712f2ad1f99e883b5bc58d22aec668.jpg" alt="profile"/>
          </div>

          <div className="bio-details">
            <p>Username: { this.props.user.username } </p>
            <p>Email: { this.props.user.email } </p>
            <p>Location: { this.props.user.location } </p>
            <p>Age: { this.props.user.age } </p>
          </div>

        </div>

        <Matches />

        <Preferences />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Profile)
