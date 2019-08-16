import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment, Image } from 'semantic-ui-react'
import xiaoLaJi2 from '../assets/active_resources/xiaolaji.gif'

class Inventory extends Component {

  render(){
    return(
      <Grid columns={1} textAlign="center">
        <Grid.Column width={16} textAlign='center'>
          <Header as='h3'>Inventory</Header>
          <Segment className="transparent">
            <Header as="h2">Under Development</Header>
            <Image src={xiaoLaJi2} size='small' centered/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status
  }
}

export default connect(mapStateToProps, null)(Inventory)
