const initialUser = {
  username: "Scott Baxendale",
  password: "",
  email: "scott@gmail.com",
  age: "27",
  location: "Amsterdam",
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
