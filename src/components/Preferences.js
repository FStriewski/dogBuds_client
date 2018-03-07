import React, { Component } from 'react';
import Preferred from './Preferred'


import { connect } from 'react-redux'

class Preferences extends Component {


  render() {

    return (
      <div className="Preferences">
        <h3>Preferences</h3>
        <div className="preferences-container">
          <Preferred
            breed={ this.props.user.preferences[0].breed }
            votes={ this.props.user.preferences[0].votes }
            image=""
          />
          <Preferred
            breed={ this.props.user.preferences[1].breed }
            votes={ this.props.user.preferences[1].votes }
            image=""
          />
          <Preferred
            breed={ this.props.user.preferences[2].breed }
            votes={ this.props.user.preferences[2].votes }
            image=""
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = function (state, props) {
  return {
    user: state
  }
}


export default connect(mapStateToProps)(Preferences)
