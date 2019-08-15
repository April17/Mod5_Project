import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress, Grid, Segment } from 'semantic-ui-react'


class HeroStatus extends Component {

  render(){
    if (!this.props.player.id) {
      return(
        <p> Getting your Information </p>
      )
    }
    return(
      <Grid columns={3} textAlign='center'>
        <Grid.Row stretched>
          <Grid.Column textAlign='center'>
            <Segment>
              Lv: {this.props.player.level}
            </Segment>
            <Segment>
              <Progress total={this.props.player.exp_next_level} value={this.props.player.exp} inverted color='yellow' active size='small'/>
                EXP: {this.props.player.exp}/{this.props.player.exp_next_level}
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Segment>
              <Progress total={this.props.player.max_hp} value={this.props.player.hp} inverted color='red' active size='small'/>
                HP: {this.props.player.hp}/{this.props.player.max_hp}
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Segment>
              Atk: {this.props.player.atk}
            </Segment>
            <Segment>
              Def: {this.props.player.def}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status
  }
}

export default connect(mapStateToProps, null)(HeroStatus)
