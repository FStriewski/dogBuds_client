import * as request from "superagent";

import { USER_LOGIN_SUCCESS } from "../actions/users";
import { FETCH_USER } from "../actions/users";
import { UPDATED_VOTES } from "../actions/dogs";

const baseUrl = 'http://localhost:4002'


export default function(state = [], action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload;
    case FETCH_USER:
      return action.payload;
    case UPDATED_VOTES:
      const user = Object.assign({}, state);
      const voteItem = user.preferences.find(
        i => i.breed === action.payload.dog.breed
      );
      if (voteItem === undefined) {
        user.preferences = user.preferences.concat({
          breed: action.payload.dog.breed,
          votes: 1
        });
      } else {
        voteItem.votes++;
      }
      request.put(`${baseUrl}/users/${user.id}`).send(user)
      .then((response) => {
        const user = response.body})
      return user;
    default:
      return state;
  }
}
