import React, { Component } from 'react'
import { connect } from 'react-redux'


class HeroStatus extends Component {
  state = {
    name: "Player 1",
    hp: 1,
    atk: 0,
    def: 0,
    x: 0,
    y: 0
  }

  render(){
    // console.log(this.props.player);
    return(
      <div>
        Hero Status Barrrrrr
        <div>
          <div>
            Name: {this.props.player.name}
          </div>
          <div>
            HP: {this.props.player.hp}
          </div>
          <div>
            Atk: {this.props.player.atk}
          </div>
          <div>
            Def: {this.props.player.def}
          </div>
          <div>
            X: {this.props.player.x}
          </div>
          <div>
            Y: {this.props.player.y}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status
  }
}

const mapDispatchToProps = {
    logIn: null
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroStatus)
