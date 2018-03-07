import {ADD_USER} from '../actions/createUser'

const initialUser = {
  username: "Scott Baxendale",
  age: "27",
  location: "Amsterdam",
  email: "test@test.com",
  image: "http://blog.gudog.co.uk/wp-content/uploads/2015/03/gsd-and-older-man.jpg",
  preferences: [
    { breed: "Akita", votes: 10 },
    { breed: "Bloodhound", votes: 5 },
    { breed: "Greyhound", votes: 3 }
  ]
}

export default function (state = initialUser, action) {
  switch (action.type) {
    case ADD_USER:
      return action.payload
    default:
      return state
  }
}
