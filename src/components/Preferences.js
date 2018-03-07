import React, { Component } from 'react';
import Preferred from './Preferred'
import { fetchDog } from '../actions/dogs'
import { connect } from 'react-redux'

import '../styles/Preferences.css'

class Preferences extends Component {

  componentWillMount() {
    this.props.fetchDog(1)
  }


  render() {

    const {dog} = this.props.dog

    return (
      <div className="Preferences">

        <h2 className="title" >Preferences</h2>

        <div className="preferences-container">
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[0].breed }
            votes={ this.props.user.preferences[0].votes }
            image={ dog.image }
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[1].breed }
            votes={ this.props.user.preferences[1].votes }
            image={ dog.image }
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[2].breed }
            votes={ this.props.user.preferences[2].votes }
            image={ dog.image }
          />
        </div>

        <div className="preferences-container">
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[0].breed }
            votes={ this.props.user.preferences[0].votes }
            image={ dog.image }
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[1].breed }
            votes={ this.props.user.preferences[1].votes }
            image={ dog.image }
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[2].breed }
            votes={ this.props.user.preferences[2].votes }
            image={ dog.image }
          />
        </div>

        <div className="preferences-container">
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[0].breed }
            votes={ this.props.user.preferences[0].votes }
            image={ dog.image }
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[1].breed }
            votes={ this.props.user.preferences[1].votes }
            image={ dog.image }
          />
          <Preferred
            className="preferred"
            breed={ this.props.user.preferences[2].breed }
            votes={ this.props.user.preferences[2].votes }
            image={ dog.image }
          />
        </div>

        <p><b>Want to see more dogs?</b></p>

        <a href="" className="sniffing-btn">Start Sniffing</a>

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
