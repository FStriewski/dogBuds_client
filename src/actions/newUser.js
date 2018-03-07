
import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'

export const ADD_USER = 'ADD_USER'

export const newUser = (userobj) => (dispatch) => {
  request
    .post(`${baseUrl}/users`)
    .send(userobj)
    .then(response => dispatch({
      type: ADD_USER,
      payload: response.body
    }))
}
