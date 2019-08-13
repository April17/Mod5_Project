import React, { Component } from 'react'
import { connect } from 'react-redux'



class Inventory extends Component {

  render(){
    return(
      <div className="ui centered grid">
          Inventory
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.status
  }
}

export default connect(mapStateToProps, null)(Inventory)
