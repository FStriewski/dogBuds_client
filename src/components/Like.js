import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDog } from "../actions/dogs";
import { makeVote } from "../actions/dogs";

export class LikeButton extends Component {

  handleClick = () => {
    this.props.makeVote(this.props.user, this.props.dog);
    this.props.fetchDog();
  };

  render() {
    return (
      <button onClick={this.handleClick} className="LikeButton">
        Like
      </button>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user,
    dog: reduxState.dog
  };
};

export default connect(mapStateToProps, { fetchDog, makeVote })(LikeButton);
