import { USER_LOGIN_SUCCESS } from "../actions/users";
import { FETCH_USER } from "../actions/users";
import { UPDATED_VOTES } from "../actions/dogs";

const initialState = {
  preferences: [
    // {breed: 'terrier', votes: 0}
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload;
    case FETCH_USER:
      return action.payload;
    case UPDATED_VOTES:
      const user = Object.assign({}, state);
      const voteItem = user.info.preferences.find(
        i => i.breed === action.payload.dog.breed
      );
      if (voteItem === undefined) {
        user.info.preferences = user.info.preferences.concat({
          breed: action.payload.dog.breed,
          votes: 1
        });
      } else {
        voteItem.votes++;
      }
      return user;
    default:
      return state;
  }
}
