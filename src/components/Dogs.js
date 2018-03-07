import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchDog } from '../actions/dogs'
import DislikeButton from './Dislike'
import LikeButton from  './Like'
import ShowMatches from  './ShowMatches'

class Dogs extends Component {

  componentWillMount() {
    this.props.fetchDog(67)
  }

  render() {
    const {dog} = this.props
    return (
      <div className="Dogs">
        <img src={ dog.dog.image } alt="dog"/>
        <p>Breed: { dog.dog.breed }</p>
        <br />
        <DislikeButton />
        <LikeButton />
        <br />
        <ShowMatches />
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    dog: state
  }
}

export default connect(mapStateToProps, { fetchDog })(Dogs)
