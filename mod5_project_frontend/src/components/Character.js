import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {deleteCharacter} from '../redux/adapters/currentUserAdapters'
import hero1 from '../assets/active_resources/Hero1.gif'


class Character extends Component {

  state = {
    delete_character: false
  }

  handlePlay = (event) => {
    let modal = document.querySelector(".delete_character_modal")
    if (event.target.id !== this.props.characterInfo.id.toString()) {
      if (!modal) {
        this.props.onSelect(this.props.characterInfo)
      }
    }
  }

  handleModal = (event) => {
    let bol = (event.target.value === "true")
    this.setState({[event.target.name]: bol})
  }

  handleDelete = (event) => {
    this.setState({delete_character: !this.state.delete_character})
    this.props.deleteCharacter(this.props.characterInfo.id)
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
            <Modal className="delete_character_modal" open={this.state.delete_character} trigger={<Button id={this.props.characterInfo.id} name="delete_character" value={true} onClick={this.handleModal} color='red' size="tiny">Delete Character</Button>} basic size='small'>
              <Header icon='trash alternate' content='Delete Character?' />
              <Modal.Content>
                <p>
                  You will lose all the Items if you delete this character.
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.handleModal} name="delete_character" value={false} color='green' inverted>
                  <Icon name='remove' /> Cancel
                </Button>
                <Button onClick={this.handleDelete} name="delete_character" value={false} color='red' inverted>
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

const mapDispatchToProps = {
  deleteCharacter: deleteCharacter
}

export default connect(
    null,
    mapDispatchToProps
  )(Character);
