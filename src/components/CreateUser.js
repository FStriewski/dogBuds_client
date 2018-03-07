import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {newUser} from '../actions/newUser'
import CreateUserForm from './CreateUserForm'

class CreateUser extends PureComponent {

  render() {
    return (
      <div>
        <CreateUserForm onSubmit={this.newUser} />
      </div>
      )
    }
  }


const mapStateToProps = function (state, props) {
return {
  user: state.user
}
}

export default connect(mapStateToProps, {newUser })(CreateUser)
