import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/createUser'

class CreateUser extends PureComponent {
	// state = {}
  componentWillMount(props) {
  this.props.createUser(this.props.match.params.id)
}

  handleSubmit = (user) => {
    this.props.createUser(user)
  }

	// handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	this.props.onSubmit(this.state)
	// }

	handleChange = (event) => {
    const {name, value} = event.target

  //   this.setState({
  //     [name]: value
  //   })
   }

    render() {
      const {user} = this.props
      if (!user) return null

      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="email">Email: </label>
            <input type="text" name="email" id="email" placeholder="email@xyz.com" value={user.email || ''} onChange={ this.handleChange }/>
          </div>
          <div>
            <label for="password">Password: </label>
            <input type="text" name="password" id="password" value={user.password || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <br/>

          <div>
            <p>Tell us a little about yourself!</p>
          </div>

          <div>
            <label for="username">Name: </label>
            <input type="text" name="username" id="username" placeholder="Dog Buddy 999" value={user.username || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <div>
            <label for="age">Age: </label>
            <input type="text" name="age" id="age" value={user.age || 0} onChange={ this.handleChange }/>
          </div>
          <br/>
          <div>
            <label for="location">Location: </label>
            <input type="text" name="location" id="location" placeholder="Amsterdam, NL" value={user.location || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <div>
            <label for="url">Image: </label>
            <input type="url" name="image" id="url" placeholder="https://www.example.com/image/me.png" value={user.url || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <button type="submit">Create</button>
        </form>
        </div>
      )
    }
  }

  //export default CreateUser

  const mapStateToProps = function (state, props) {
  return {
    user: state.user
  }
}

  export default connect(mapStateToProps, {createUser })(CreateUser)
