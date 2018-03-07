
import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'

export const ADD_USER = 'ADD_USER'

export const createUser = (user) => (dispatch) => {
  request
    .post(`${baseUrl}/products`)
    .send(user)
    .then(response => dispatch({
      type: ADD_USER,
      payload: response.body
    }))
}
