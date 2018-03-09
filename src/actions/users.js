import * as request from "superagent";

const baseUrl = "http://localhost:4002";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const FETCH_USER = "FETCH_USER";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";
export const FETCH_MATCHES = "SHOW_MATCHES";

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });
};

export const fetchUser = (userId, jwt) => dispatch => {
  request
    .get(`${baseUrl}/users/${userId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCH_USER,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const signup = (email, password, username, location, age) => dispatch =>
  request
    .post(`${baseUrl}/users`)
    .send({ email, password, username, location, age })
    .then(result => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });

export const updateUser = user => dispatch =>
  request
    .put(`${baseUrl}/users/${user.id}`)
    .send(user)
    .then(response => {
      const user = response.body;
      dispatch({
        type: "UPDATED_USER",
        payload: user
      });
    })
    .catch(error => {
      console.error("Something went wrong!", error);
    });

export const calculateMatches = user => {
  return dispatch => {
    request
      .get(`${baseUrl}/users/${user.id}/matches`)
      .then(response =>
        dispatch({
          type: "FETCH_MATCHES",
          payload: response.body
        })
      )
      .catch(err => alert(err));
  };
};
