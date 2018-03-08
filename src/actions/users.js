import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const FETCH_USER = "FETCH_USER"

export const login = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
    	if (err.status === 400) {
    		dispatch({
    			type: USER_LOGIN_FAILED,
    			payload: err.response.body.message || 'Unknown error'
    		})
    	}
    	else {
    		console.error(err)
    	}
    })
  }

export const fetchUser = (userId) => (dispatch) => {
  request
    .get(`${baseUrl}/users/${userId}`)
    .then(response => dispatch({
      type: FETCH_USER,
      payload: response.body
    }))
    .catch(err => alert(err))
}
