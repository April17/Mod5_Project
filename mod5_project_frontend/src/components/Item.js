import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Feed, Popup } from 'semantic-ui-react'
import xiaoLaJi2 from '../assets/active_resources/xiaolaji.gif'

class Item extends Component {

  render(){
    return(
      <Feed.Event>
        <Feed.Label>
          <img src={xiaoLaJi2} alt="xiaoLaJi"/>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
              <Popup content={this.props.itemData.item.effect} trigger={<Feed.User>{this.props.itemData.item.name}</Feed.User>} /> x{this.props.itemData.quantity}
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
  }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(Item)
