import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress } from 'semantic-ui-react'


class MonsterHp extends Component {

  render(){
    return(
      <div className="ui centered grid">
        <div className="ten wide column">
          {this.props.monster.name}:
          <Progress total={this.props.monster.max_hp} value={this.props.monster.hp} inverted color='red' active size='medium'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    monster: state.monsterStatus
  }
}

export default connect(mapStateToProps, null)(MonsterHp)
