import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCH_DOG = 'FETCH_DOG'

export const fetchDog = (dogId) => (dispatch) => {
  request
    .get(`${baseUrl}/sniffing/${dogId}`)
    .then(response => dispatch({
      type: FETCH_DOG,
      payload: response.body
    }))
    .catch(err => alert(err))
}
