import * as request from "superagent";

let i = 0;

const baseUrl = "http://localhost:4001";

export const FETCH_DOG = "FETCH_DOG";

export const fetchDog = () => dispatch => {
  let randomDog = Math.floor(Math.random() * 79 + 1);

  var chooseDog = function() {
    let chosenDog;
    if (i < 8) {
      chosenDog = i * 10;
      i++;
    } else {
      chosenDog = randomDog;
    }
    return chosenDog;
  };

  request
    .get(`${baseUrl}/sniffing/${chooseDog()}`)
    .then(response =>
      dispatch({
        type: FETCH_DOG,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const UPDATED_VOTES = "UPDATED_VOTES";

export const makeVote = (user, dog) => {
  return dispatch => {
    dispatch({
      type: "UPDATED_VOTES",
      payload: { user, dog }
    });
  };
};
