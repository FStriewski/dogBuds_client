import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'
import DislikeButton from './components/Dislike'
import LikeButton from  './components/Like'
// import ShowMatches from  './components/ShowMatches'




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Sniffing">
          <h2>Start Sniffing!</h2>
          <Image />
          <br />
          <DislikeButton />
          <LikeButton />
        </div>

      </div>
    );
  }
}

export default App;
