import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Feed } from 'semantic-ui-react'



class Chat extends Component {

  render(){
    return(
      <Grid columns={1} textAlign='center'>
        <Grid.Row column={1}>
          <Grid.Column width={16}>
            <Segment className="transparent No-Space">
              <Feed className="feedbox" events={this.props.chat}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status,
    chat: state.feed.chat
  }
}

export default connect(mapStateToProps, null)(Chat)
