import React, { PureComponent } from 'react'

export class CreateUser extends PureComponent {

  render() {
    return (
      <form>
          <input type="text" name="first_name" value="first name"/>
          <input type="text" name="last_name" value="last name"/>
          <input type="integer" name="age" value="age"/>
        <label>
          Upload image:
          <input type="text" name="profile_image" />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CreateUser
