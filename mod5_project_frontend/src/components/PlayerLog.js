import React, { Component } from 'react'
import { connect } from 'react-redux'



class PlayerLog extends Component {

  render(){
    return(
      <div className="ui centered grid">
        <div className="one column row">
          <div className="three wide column">
            PlayerLog
          </div>
        </div>
        <div className="tow column row">
          <div className="left floated column cord">
            <p>x: {this.props.player.x}</p>
          </div>
          <div className="left floated column cord">
            <p>y: {this.props.player.y}</p>
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

export default connect(mapStateToProps, null)(PlayerLog)
