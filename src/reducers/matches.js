import { FETCH_MATCHES } from "../actions/users";


const initialMatches = [
  {
    username: "Luca",
    password: "",
    email: "luca@gmail.com",
    age: "28",
    location: "Amsterdam",
    image: "https://i.ndtvimg.com/i/2016-05/man-and-dog_650x400_81462437247.jpg",
    preferences: [
      { breed: "Akita", votes: 10 },
      { breed: "Bloodhound", votes: 5 },
      { breed: "Greyhound", votes: 3 }
  ]
  },
  {
    username: "Freddie",
    password: "",
    email: "Freddie@gmail.com",
    age: "29",
    location: "Nijmegen",
    image: "https://www.pets4homes.co.uk/images/articles/1386/large/how-long-will-it-take-for-a-dog-to-bond-with-a-new-owner-530aeeb9a51bf.jpg",
    preferences: [
      { breed: "Terrer", votes: 10 },
      { breed: "Pug", votes: 5 },
      { breed: "Beagle", votes: 3 }
    ]
  },
  {
    username: "Joe",
    password: "",
    email: "joe@hotmail.com",
    age: "30",
    location: "Amsterdam",
    image: "https://expertbeacon.com/sites/default/files/treatment_for_your_dog_when_it_gets_diarrhea_before_calling_the_vet.jpg",
    preferences: [
      { breed: "Labrador", votes: 10 },
      { breed: "Dalmation", votes: 5 },
      { breed: "Greyhound", votes: 3 }
    ]
  },

]


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MATCHES:
      return action.payload;
    default:
      return state;
  }
}
