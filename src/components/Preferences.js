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

           {this.props.user.info.preferences
             .sort(function(a, b) {
               return  (b.votes - a.votes);
             })
             .slice(0,5)
             .map(preference =>

             <Preferred
               className="preferred"
               breed={ preference.breed }
               votes={ preference.votes }
               image="https://www.what-dog.net/Images/faces2/scroll001.jpg"
             />
           )
         }
           </div>

           <div className="preferences-container">

              {this.props.user.info.preferences
                .sort(function(a, b) {
                  return  (b.votes - a.votes);
                })
                .slice(5,10)
                .map(preference =>

                <Preferred
                  className="preferred"
                  breed={ preference.breed }
                  votes={ preference.votes }
                  image="https://www.what-dog.net/Images/faces2/scroll001.jpg"
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


export default connect(mapStateToProps, { fetchUser } )(Preferences)
