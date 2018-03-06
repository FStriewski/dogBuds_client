import React, { Component } from 'react';
import Dogs from './Dogs'

import { connect } from 'react-redux'

class Preferences extends Component {

  render() {
    return (
      <div className="Preferences">
        <h3>Preferences</h3>

        <div className="preferences-container">
          <Dogs breed={this.props.user.preferences[0].breed } image=""/>
          <Dogs breed={this.props.user.preferences[1].breed } image=""/>
          <Dogs breed={this.props.user.preferences[2].breed } image=""/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user
  }
}

export default connect(mapStateToProps)(Preferences)
