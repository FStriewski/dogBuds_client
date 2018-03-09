import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

class SignupPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password, data.username, data.location, data.age)
	}

	render() {
		if (this.props.user.id) {
			
			return (
				 <Redirect to={"/users/" + this.props.user.id}  />
			)
		}



		return (
			<div>
				<h1>Sign up</h1>

				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.user.error }</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		user: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
