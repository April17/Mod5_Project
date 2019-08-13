import React, { Component } from 'react'
import { connect } from 'react-redux'



class Chat extends Component {

  render(){
    return(
      <div className="ui centered grid">
          Chat
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status
  }
}

export default connect(mapStateToProps, null)(Chat)
