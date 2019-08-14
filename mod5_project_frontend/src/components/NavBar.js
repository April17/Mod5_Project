import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser, logOut } from '../redux/adapters/currentUserAdapters'


class NavBar extends Component {
  componentDidMount() {
    this.props.setUser()
  }
  onLogout = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {

    return (
      <Menu>
        <Menu.Item name='browse' onClick={null}>
          Dungeon Online
        </Menu.Item>
        <Menu.Menu position='right'>
        {
          this.props.user ? (
            <Fragment>
              <Menu.Item name='account' onClick={null}>
                <Link to="/profile">Account</Link>
              </Menu.Item>
              <Menu.Item name='logout' onClick={this.onLogout}>
                <Link to="#logout">Logout</Link>
              </Menu.Item>
            </Fragment>
          ) : (
            <Menu.Item name='signup' onClick={null}>
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          )
        }
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  setUser: getCurrentUser,
  logOut: logOut
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
