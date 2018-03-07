import React, { Component } from 'react';
import Preferred from './Preferred'
import { fetchUser } from '../actions/users'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import '../styles/Preferences.css'

class Preferences extends Component {



  render() {
    if (!this.props.user) return null

    return (
      <div className="Preferences">
      {console.log(this.props)}
        <h2 className="title" >Preferences</h2>

        <div className="preferences-container">
          <Preferred
            className="preferred"
            breed={ this.props.user.info.preferences[0].breed }
            votes={ this.props.user.info.preferences[0].votes }
            image=""
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.info.preferences[1].breed }
            votes={ this.props.user.info.preferences[1].votes }
            image=""
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.info.preferences[2].breed }
            votes={ this.props.user.info.preferences[2].votes }
            image=""
          />
        </div>


        <p><b>Want to see more dogs?</b></p>

        <Link to={ `/sniffing` }>Start Sniffing</Link>
      </div>
    )
  }
}


const mapStateToProps = function (state, props) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { fetchUser })(Preferences)
