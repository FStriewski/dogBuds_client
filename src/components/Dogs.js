import React, { Component } from 'react';
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import { fetchDog } from '../actions/dogs'

class Dogs extends Component {
  // static propTypes = {
  //   breed: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  // }

  componentWillMount() {
    this.props.fetchDog(67)
  }

  render() {
    const {dog} = this.props
    return (
      <div className="Dogs">
        <img src={ dog.dog.image } alt="dog"/>
        <p>Breed: { dog.dog.breed }</p>
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
