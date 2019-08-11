import React, { Component } from 'react'
import { connect } from 'react-redux'


class HeroStatus extends Component {

  render(){
    return(
      <div>
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

export default connect(mapStateToProps, null)(HeroStatus)
