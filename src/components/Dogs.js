import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchDog } from '../actions/dogs'
import { makeVote } from '../actions/dogs'
import DislikeButton from './Dislike'
import LikeButton from  './Like'
import '../styles/Dogs.css'
import {Link} from 'react-router-dom'
import Profile from './Profile'

class Dogs extends Component {

  componentWillMount() {
    this.props.fetchDog()
  }

  render() {
    const {dog} = this.props.dog
    return (
      <div className="Dogs">
        <img src={ dog.image } alt="dog"/>
        <div className="DogsNameContainer">
        <p className='DogsName'>Breed: { dog.breed }</p>
        </div>
        <br />
        <DislikeButton />
        <LikeButton />
        <br />
        <Link to={ '/users/' + this.props.user.id } component={Profile} ><button class="MatchesButton">Show my matches</button></Link>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    dog: state,
    user: state
  }
}

export default connect(mapStateToProps, { fetchDog, makeVote })(Dogs)
