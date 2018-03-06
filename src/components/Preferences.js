import React, { Component } from 'react';
import Dogs from './Dogs'

class Preferences extends Component {

  render() {
    return (
      <div className="Preferences">
        <h3>Preferences</h3>

        <Dogs image="https://dog.ceo/api/breeds/image/random"/>
        <Dogs image="https://dog.ceo/api/breeds/image/random"/>
        <Dogs image="https://dog.ceo/api/breeds/image/random"/>

      </div>
    )
  }
}
 export default Preferences;
