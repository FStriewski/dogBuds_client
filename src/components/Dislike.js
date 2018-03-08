import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDog } from '../actions/dogs'
import button from '../styles/Button.css'


export class DislikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDog()
  }

  render() {
    return (
      <button
      onClick={this.handleClick}
      className="DislikeButton">
        Dislike
      </button>
    )
  }
}

export default connect(null, { fetchDog })(DislikeButton)
