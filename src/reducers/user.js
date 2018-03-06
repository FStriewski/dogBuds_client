const initialUser = {
  name: "Scott Baxendale",
  age: "27",
  location: "Amsterdam",
  bio: "Chasing tail since 1990",
  image: "http://blog.gudog.co.uk/wp-content/uploads/2015/03/gsd-and-older-man.jpg",
  preferences: [
    { breed: "Akita", votes: 10 },
    { breed: "Bloodhound", votes: 5 },
    { breed: "Greyhound", votes: 3 }
  ]
}


export default function(state = initialUser, action = {}) {

  return state

}
