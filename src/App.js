import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import DislikeButton from './components/Dislike'
import LikeButton from  './components/Like'
import ShowMatches from  './components/ShowMatches'
import CreateUser from  './components/CreateUser'
import Profile from './components/Profile'
import Dogs from './components/Dogs'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Router>
       <div>
         <Route exact path="/profile" component={Profile} />
         <Route exact path="/sniffing" component={Dogs} />
         <Route exact path="/" render={ () => <Redirect to="/profile" /> } />
       </div>
     </Router>




      </div>
    );
  }
}

export default App;
