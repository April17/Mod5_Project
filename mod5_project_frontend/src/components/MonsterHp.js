import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress, Grid } from 'semantic-ui-react'


class MonsterHp extends Component {

  render(){
    return(
      <Grid columns={1} textAlign='center'>
        <Grid.Column textAlign='center'>
          {this.props.monster.name}: {this.props.monster.monster_type}
          <Progress total={this.props.monster.max_hp} value={this.props.monster.hp} inverted color='red' active size='small'/>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    monster: state.monsterStatus
  }
}

export default connect(mapStateToProps, null)(MonsterHp)
