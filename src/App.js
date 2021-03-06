import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Profile from './components/Profile'
import Dogs from './components/Dogs'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 className="title">DogBuds</h1>
      <Router>
       <div>
         <Route exact path="/" render={ () => <Redirect to="/login" /> } />
         <Route exact path="/users/:id" component={Profile} />
         <Route exact path="/sniffing" component={Dogs} />
         <Route exact path="/login" component={LoginPage} />
         <Route exact path="/signup" component={SignupPage} />
       </div>
     </Router>

      </div>
    );
  }
}

export default App
