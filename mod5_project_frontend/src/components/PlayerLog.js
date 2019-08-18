import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Feed } from 'semantic-ui-react'



class PlayerLog extends Component {

  render(){
    return(
      <Grid column={1} textAlign="center">
        <Grid.Row column={1}>
          <Grid.Column width={16}>
            <Segment className="transparent No-Space">
              <Feed className="feedbox" events={this.props.log}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    log: state.feed.log
  }
}

export default connect(mapStateToProps, null)(PlayerLog)
