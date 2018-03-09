import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDog } from "../actions/dogs";
import { makeVote } from "../actions/dogs";
import button from "../styles/Button.css"
import { updateUser } from "../actions/users";

export class LikeButton extends Component {

  handleClick = () => {

      if (!this.props.user.id) {
        window.location = '../login'
      } else {
        this.props.makeVote(this.props.user, this.props.dog);
        this.props.fetchDog();
        this.props.updateUser(this.props.user);
      }
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

export default connect(mapStateToProps, { fetchDog, makeVote, updateUser })(LikeButton);
