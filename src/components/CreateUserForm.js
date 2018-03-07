import React, { PureComponent } from 'react'


class CreateUserForm extends PureComponent {
	state = {}

  handleSubmit = (e) => {
     	e.preventDefault()
     	this.props.onSubmit(this.state)
  }

	handleChange = (event) => {
    const {name, value} = event.target

     this.setState({
       [name]: value
     })
   }

    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" placeholder="email@xyz.com" value={this.state.email || ''} onChange={ this.handleChange }/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" id="password" value={this.state.password || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <br/>

          <div>
            <p>Tell us a little about yourself!</p>
          </div>

          <div>
            <label htmlFor="username">Name: </label>
            <input type="text" name="username" id="username" placeholder="Dog Buddy 999" value={this.state.username || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <div>
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" id="age" value={this.state.age || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <div>
            <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location" placeholder="Amsterdam, NL" value={this.state.location || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <div>
            <label htmlFor="url">Image: </label>
            <input type="url" name="image" id="url" placeholder="https://www.example.com/image/me.png" value={this.state.url || ''} onChange={ this.handleChange }/>
          </div>
          <br/>
          <button type="submit">Create</button>
        </form>
        </div>
      )
    }
  }

  export default CreateUserForm
