import React, { PureComponent } from 'react'

// To do: change the input type of the "profile_image"

export class CreateUser extends PureComponent {

    handleSubmit = (e) => {
    }

    handleChange = (event) => {
    }

    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="email">Email: </label>
            <input type="email" name="email" id="email"/><br/>
          </div>
          <div>
            <label for="passwprd">Password: </label>
            <input type="text" name="password" id="password"/><br/>
          </div>
          <br/>
          <br/>

          <div>
            <p>Tell us a little about yourself!</p>
          </div>

          <div>
            <label for="username">Name: </label>
            <input type="text" name="username" id="username"/>
          </div>
          <br/>
          <div>
            <label for="age">Age: </label>
            <input type="text" name="age" id="age"/>
          </div>
          <br/>
          <div>
            <label for="location">Location: </label>
            <input type="text" name="location" id="location"/>
          </div>
          <br/>
          <div>
            <label for="url">Image: </label>
            <input type="url" name="image" id="url"/>
          </div>

          <button type="submit">Submit</button>
        </form>
        </div>
      )
    }
  }

  export default CreateUser
