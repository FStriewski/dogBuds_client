import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCH_USER = "FETCH_USER"


export const fetchUser = (userId) => (dispatch) => {
  request
    .get(`${baseUrl}/users/${userId}`)
    .then(response => dispatch({
      type: FETCH_USER,
      payload: response.body
    }))
    .catch(err => alert(err))
}
