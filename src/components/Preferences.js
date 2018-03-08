import React, { Component } from 'react';
import Preferred from './Preferred'
import { fetchUser } from '../actions/users'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Dogs from './Dogs'
import '../styles/Preferences.css'

class Preferences extends Component {



  render() {


    if (!this.props.user) return null
    console.log(this.props)
    if ( !this.props.user.prefences || this.props.user.preferences.length === 0 ) {
      return(
        <div>
        No prefernces so far!
        </div>
      )
    }

    return (

      <div className="Preferences">
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
        <Link to={ `/sniffing` } component={Dogs} className="sniffing-btn">Start Sniffing</Link>
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
