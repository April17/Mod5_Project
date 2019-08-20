import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterDuplicate } from '../utility/utilities'
import { Grid, Header, Segment, Feed } from 'semantic-ui-react'
import Item from './Item'

class Inventory extends Component {

  genItems = () => {
    const filteredItems = filterDuplicate(this.props.items, "name")
    return filteredItems.map(item => <Item key={item.id} itemData={item}/>)
  }

  render(){
    return(
      <Grid columns={1} textAlign="center">
        <Grid.Column width={16} textAlign='center'>
          <Header as='h3'>Inventory</Header>
          <Segment className="frostglass">
            <Feed>
              {this.genItems()}
            </Feed>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.status.items
  }
}

export default connect(mapStateToProps, null)(Inventory)
