import {USER_LOGIN_SUCCESS} from '../actions/users'
import { FETCH_USER } from '../actions/users'

export default function (state = null, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return action.payload
    case FETCH_USER:
      return action.payload
		default: return state
	}
}s

