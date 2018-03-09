import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDog } from '../actions/dogs'
import button from '../styles/Button.css'


export class DislikeButton extends PureComponent {

  handleClick = () => {

      if (!this.props.user.id) {
        window.location = '../login'
      } else {
        this.props.fetchDog();
      }
    };

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

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchDog })(DislikeButton);
