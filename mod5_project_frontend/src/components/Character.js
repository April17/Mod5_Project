import React, { Component } from 'react'
import hero1 from '../assets/active_resources/Hero1.gif'


class Character extends Component {


  handleClick = () => {
    this.props.onSelect(this.props.characterInfo)
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        <h2>{this.props.characterInfo.name}</h2>
          <img src={hero1} alt="hero1" />
        <div>
          <p>
            HP: {this.props.characterInfo.hp}
          </p>
          <p>
            ATK: {this.props.characterInfo.atk}
          </p>
          <p>
            DEF: {this.props.characterInfo.def}
          </p>
          <p>
            X: {this.props.characterInfo.x}
          </p>
          <p>
            Y: {this.props.characterInfo.y}
          </p>
          <button onClick={this.handleClick}>Select</button>
        </div>
      </div>
    );
  }
}

export default Character;
