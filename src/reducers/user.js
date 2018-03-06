const initialUser = {
  name: "Scott Baxendale",
  age: "27",
  location: "Amsterdam",
  bio: "Chasing tail since 1990",
  image: "http://blog.gudog.co.uk/wp-content/uploads/2015/03/gsd-and-older-man.jpg",
  preferences: {
    "akita": 24,
    "basenji": 1,
    "beagle": 24,
    "bluetick": 1
  }
}


export default function(state = initialUser, action = {}) {
  // based on the action type we will return a new state
  switch(action.type) {
    // some actions include a payload that we can use to update the state
    // in this case the payload will contain a new recipe
    case 'USER' :
      return state

    default :
      return state
  }
}
