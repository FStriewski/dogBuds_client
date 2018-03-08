import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import CreateUser from  './components/CreateUser'
import Profile from './components/Profile'
import Dogs from './components/Dogs'
import LoginPage from './components/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>DogBuds</h1>
      <Router>
       <div>
         <Route exact path="/users/:id" component={Profile} />
         <Route exact path="/sniffing" component={Dogs} />
         <Route exact path="/login" component={LoginPage} />
         <Route exact path="/signup" component={CreateUser} />
         <Route exact path="/" render={ () => <Redirect to="/profile" /> } />
       </div>
     </Router>

      </div>
    );
  }
}

export default App;
