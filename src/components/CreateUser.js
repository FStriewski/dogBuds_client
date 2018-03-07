import React, { PureComponent } from 'react'


// To do: change the input type of the "profile_image"

export class CreateUser extends PureComponent {

    handleSubmit = (e) => {
    }

    handleChange = (event) => {
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="first_name" value="first name" onChange={ this.handleChange }/>
          <input type="text" name="last_name" value="last name" onChange={ this.handleChange }/>
          <input type="integer" name="age" value="age" onChange={ this.handleChange }/>
          <label>
            Write a short bio:
            <input type="text" name="profile_image" onChange={ this.handleChange }/>
          </label>
          <label>
            Upload image:
            <input type="text" name="profile_image" onChange={ this.handleChange }/>
          </label>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }

  export default CreateUser
