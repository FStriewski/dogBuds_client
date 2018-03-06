import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'
import DislikeButton from './components/Dislike'
import LikeButton from  './components/Like'
import ShowMatches from  './components/ShowMatches'
import CreateUser from  './components/CreateUser'





class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="CreateUser">
          <h1>Create a Profile!</h1>
          <br />
          <CreateUser />
        </div>
        <div className="Sniffing">
          <h1>Start Sniffing!</h1>
          <Image />
          <br />
          <DislikeButton />
          <LikeButton />
          <br />
          <ShowMatches />
        </div>

      </div>
    );
  }
}

export default App;
