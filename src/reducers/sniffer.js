import {FETCH_DOG} from '../actions/dogs'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DOG:
      return action.payload
    default:
      return state
  }
}
