import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
import Character from '../components/Character'
import {initGame} from '../redux/adapters/heroStatusAdapters'


class ProfilePage extends Component {

  componentDidMount(){
    if (localStorage.token === "undefined") {
      localStorage.clear()
      this.props.history.push("/")
    }
  }

  genCharacters = () => {
    return this.props.user.characters.map(character => <Character key={character.id} characterInfo={character} onSelect={this.onSelect}/>)
  }

  onSelect = (characterInfo) => {
    this.props.initGame(characterInfo)
    this.props.history.push("/game")
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
          {this.genCharacters()}
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

const mapDispatchToProps = {
  initGame: initGame
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)));
