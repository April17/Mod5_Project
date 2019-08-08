import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { statusUpdate } from "../redux/adapters/statusBarUpdate";


export const getInfo = (x, y) => {
  let heroX = document.querySelector("#heroX").value = x.toFixed(0)
  let heroY = document.querySelector("#heroY").value = y.toFixed(0)
  localStorage.x = heroX;
  localStorage.y = heroY;
  // console.log("X: ", heroX);
  // debugger
}

class PhaserReactAdapter extends Component {

  state = {
    x: "",
    y: ""
  }

  componentDidUpdate(){
        console.log(this._heroX)
  }

  static getInfo (x, y){
    let heroX = document.querySelector("#heroX").value = x.toFixed(0)
    let heroY = document.querySelector("#heroY").value = y.toFixed(0)
    // debugger
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    console.log("X: ", this.state.x);
    console.log("Y: ", this.state.y);
    return(
      <div>
        <input type="number" ref={c => this._heroX = c} id="heroX" name="x" value={this.state.x} onChange={this.handleChange}/>
        <input type="number" ref="heroY" id="heroY" name="y" value={this.state.y} onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: null
  }
}

// const mapDispatchToProps = {
//   null
// };

export default connect(mapStateToProps, null)(PhaserReactAdapter)
