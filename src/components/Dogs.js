import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchDog } from '../actions/dogs'
import { makeVote } from '../actions/dogs'
import DislikeButton from './Dislike'
import LikeButton from  './Like'
import dogs from '../styles/Dogs.css'

class Dogs extends Component {

  componentWillMount() {
    this.props.fetchDog(67)
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
        <a href="/profile"><button className="MatchesButton">Show my matches</button></a>
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
