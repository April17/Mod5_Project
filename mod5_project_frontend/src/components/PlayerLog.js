import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Statistic, Icon } from 'semantic-ui-react'

class PlayerLog extends Component {

  render(){
    return(
      <Grid column={1} textAlign="left">
        <Grid.Row column={1}>
          <Grid.Column width={16}>
            <Segment className="transparent">
              <Statistic size='mini'>
                <Statistic.Value><Icon name="map pin"/>{this.props.player.x}</Statistic.Value>
              </Statistic>
              <Statistic size='mini'>
                <Statistic.Value floated="right">{this.props.player.y}</Statistic.Value>
              </Statistic>
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

export default connect(mapStateToProps, null)(PlayerLog)
