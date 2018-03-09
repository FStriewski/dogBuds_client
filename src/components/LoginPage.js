import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import LoginForm from './LoginForm'
import SignupPage from './SignupPage'
import {Redirect, Link} from 'react-router-dom'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.user.id) {
			return (
				 <Redirect to={"/users/" + this.props.user.id}  />
			)
		}

		return (
			<div>
				<h2>Login</h2>

				<LoginForm onSubmit={this.handleSubmit} />
        <p></p>
				<br />
				<p>Dont have a Profile yet? Go and</p>
        <Link to={'/signup/'} component={SignupPage} ><button>SIGN UP!</button></Link>
			</div>
		)
	}


}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
		user : state.user
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
