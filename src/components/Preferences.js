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

        <h2 className="title" >Preferences</h2>

        <div className="preferences-container">

           {this.props.user.info.preferences.map(preference =>

             <Preferred
               className="preferred"
               breed={ preference.breed }
               votes={ preference.votes }
               image={ preference.image }
             />
           )
         }
           </div>


        <p><b>Want to see more dogs?</b></p>

        <Link to={ `/sniffing` } className="sniffing-btn">Start Sniffing</Link>
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
