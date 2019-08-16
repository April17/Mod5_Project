import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment, Image } from 'semantic-ui-react'
import xiaoLaJi2 from '../assets/active_resources/xiaolaji.gif'



class Chat extends Component {

  render(){
    return(
      <Grid columns={1} textAlign='center'>
        <Segment className="transparent">
          <Header as="h2">Under Development</Header>
          <Image src={xiaoLaJi2} size='small' centered/>
        </Segment>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status
  }
}

export default connect(mapStateToProps, null)(Chat)
