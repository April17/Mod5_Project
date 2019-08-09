import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuth from '../hocs/withAuth'


class ProfilePage extends Component {

  componentDidMount(){
    if (localStorage.token === "undefined") {
      localStorage.clear()
      this.props.history.push("/")
    }
  }

  render() {
    if (!this.props.user) {
      return(
        <p> Getting your Information </p>
      )
    }
    return (
      <div className="ProfilePage">
        <header className="Profile-header">
          Name: {this.props.user.name}
          <br></br>
          Character: {this.props.user.characters[0].name}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

export default withAuth(connect(mapStateToProps, null)(withRouter(ProfilePage)));
