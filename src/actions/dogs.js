import * as request from 'superagent'

const baseUrl = 'http://localhost:4002'

export const FETCH_DOG = 'FETCH_DOG'

export const fetchDog = () => (dispatch) => {
  let randomDog = Math.floor((Math.random() * 79) + 1);

  request
    .get(`${baseUrl}/sniffing/${randomDog}`)
    .then(response => dispatch({
      type: FETCH_DOG,
      payload: response.body
    }))
    .catch(err => alert(err))
}
