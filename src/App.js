import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import CreateUser from  './components/CreateUser'
import Profile from './components/Profile'
import Dogs from './components/Dogs'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="title">DogBuds</h1>
      <Router>
       <div>
         <Route exact path="/users/:id" component={Profile} />
         <Route exact path="/sniffing" component={Dogs} />
         <Route exact path="/login" component={CreateUser} />
         <Route exact path="/" render={ () => <Redirect to="/profile" /> } />
       </div>
     </Router>

      </div>
    );
  }
}

export default App;
