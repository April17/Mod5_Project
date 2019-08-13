import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress } from 'semantic-ui-react'


class HeroStatus extends Component {

  render(){
    return(
      <div className="ui centered two column grid">
        <div className="row">
          <div className="five wide column">
            <Progress total={1200} value={this.props.player.hp} inverted color='red' active size='large'/>
          </div>
          <div className="five wide column">
            Atk: {this.props.player.atk}
          </div >
        </div>
        <div className="row">
          <div className="five wide column">
            HP: {this.props.player.hp}
          </div>
          <div className="five wide column">
            Def: {this.props.player.def}
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
