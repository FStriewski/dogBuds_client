import React, { Component } from 'react';
import Match from './Match'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import '../styles/Matches.css'

class Matches extends Component {

  render() {

    const matches = this.props.matches

    return (
      <div className="Matches">
        <h2 className="title">Matches</h2>
        <h4>Below are your top 3 matches</h4>
        <div className="Matches-container">
          <Match
            className="Match"
            image={ matches[0].image }
            username={ matches[0].username }
            age={ matches[0].age }
            location={ matches[0].location }
            email= { matches[0].email }
            breed1={ matches[0].preferences[0].breed }
            votes1={ matches[0].preferences[0].votes }
            breed2={ matches[0].preferences[1].breed }
            votes2={ matches[0].preferences[1].votes }
            breed3={ matches[0].preferences[2].breed }
            votes3={ matches[0].preferences[2].votes }
          />
          <Match
            className="Match"
            image={ matches[1].image }
            username={ matches[1].username }
            age={ matches[1].age }
            location={ matches[1].location }
            email= { matches[1].email }
            breed1={ matches[1].preferences[0].breed }
            breed2={ matches[1].preferences[1].breed }
            breed3={ matches[1].preferences[2].breed }
          />
          <Match
            className="Match"
            image={ matches[2].image }
            username={ matches[2].username }
            age={ matches[2].age }
            location={ matches[2].location }
            email= { matches[2].email }
            breed1={ matches[2].preferences[0].breed }
            breed2={ matches[2].preferences[1].breed }
            breed3={ matches[2].preferences[2].breed }
          />
        </div>

        <p><b>Want to find more matches?</b></p>

        <Link to={ `/sniffing` } className="sniffing-btn">Start Sniffing</Link>


      </div>
    )
  }
}

const mapStateToProps = function(state, props) {
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps)(Matches)
