import React, { Component } from 'react';
import Preferred from './Preferred'
import { fetchDog } from '../actions/dogs'

import { connect } from 'react-redux'

class Preferences extends Component {

  componentWillMount() {
    this.props.fetchDog(1)
  }


  render() {

    const {dog} = this.props.dog

    return (
      <div className="Preferences">
        <h3>Preferences</h3>
        <div className="preferences-container">
          <Preferred
            breed={ this.props.user.preferences[0].breed }
            votes={ this.props.user.preferences[0].votes }
            image={ dog.image }
          />
          <Preferred
            breed={ this.props.user.preferences[1].breed }
            votes={ this.props.user.preferences[1].votes }
            image={ dog.image }
          />
          <Preferred
            breed={ this.props.user.preferences[2].breed }
            votes={ this.props.user.preferences[2].votes }
            image={ dog.image }
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = function (state, props) {
  return {
    user: state.user,
    dog: state
  }
}


export default connect(mapStateToProps, { fetchDog })(Preferences)
