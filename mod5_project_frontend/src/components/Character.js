import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import hero1 from '../assets/active_resources/Hero1.gif'


class Character extends Component {


  handlePlay = (event) => {
    let modal = document.querySelector(".delete_character_modal")
    if (event.target.id !== this.props.characterInfo.id.toString()) {
      if (!modal) {
        this.props.onSelect(this.props.characterInfo)
      }
    }
  }

  handleDelete = (event) => {
    console.log("Delete Character");
  }

  render() {
    return (
      <div className="card" onClick={this.handlePlay}>
        <div className="image">
          <img src={hero1} alt="hero1"/>
        </div>
        <div className="content">
          <div className="header">{this.props.characterInfo.name}</div>
          <div className="meta">
            EXP: {this.props.characterInfo.exp}/{this.props.characterInfo.exp_next_level}
          </div>
          <div className="description">
            <div className="ui two column grid">
              <div className="column">
                Lv: {this.props.characterInfo.level}
              </div>
              <div className="column">
                HP: {this.props.characterInfo.hp}/{this.props.characterInfo.max_hp}
              </div>
              <div className="column">
                ATK: {this.props.characterInfo.atk}
              </div>
              <div className="column">
                DEF: {this.props.characterInfo.def}
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <i className="map pin icon"></i>
            x: {this.props.characterInfo.x}
            y: {this.props.characterInfo.y}
          </span>
          <span className="delete_character">
            <Modal className="delete_character_modal" trigger={<Button id={this.props.characterInfo.id} color='red' size="tiny">Delete Character</Button>} basic size='small'>
              <Header icon='trash alternate' content='Delete Character?' />
              <Modal.Content>
                <p>
                  You will lose all the Items if you delete this character.
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' inverted>
                  <Icon name='remove' /> Cancel
                </Button>
                <Button onClick={this.handleDelete} color='red' inverted>
                  <Icon name='checkmark' /> Confirm
                </Button>
              </Modal.Actions>
            </Modal>
          </span>
        </div>
      </div>
    );
  }
}

export default Character;
