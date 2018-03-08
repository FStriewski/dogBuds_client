import React, { Component } from 'react';
import Match from './Match'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import '../styles/Matches.css'

class Matches extends Component {

  render() {

    const matches = this.props.matches

    return (
      <div className="Matches" id="Matches">
        <h2 className="title">Matches</h2>
        <h4>Below are your top 3 matches</h4>
        <div className="Matches-container">


        {matches.slice(0,3)
          .map(match =>

            <Match
              className="Match"
              image={ match.image }
              username={ match.username }
              age={ match.age }
              location={ match.location }
              email= { match.email }
              breed1={ match.preferences[0].breed }
              votes1={ match.preferences[0].votes }
              breed2={ match.preferences[1].breed }
              votes2={ match.preferences[1].votes }
              breed3={ match.preferences[2].breed }
              votes3={ match.preferences[2].votes }
            />
        )
      }

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
