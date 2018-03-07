import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDog } from '../actions/dogs'

export class LikeButton extends PureComponent {
  // static propTypes = {
  //     [createGame]: PropTypes.func.isRequired
  //   }
  handleClick = () => {
    this.props.fetchDog()
  }

  render() {
    return (
      <button
      onClick={this.handleClick}
      className="LikeButton">
        Like
      </button>
    )
  }
}

export default connect(null, { fetchDog })(LikeButton)
