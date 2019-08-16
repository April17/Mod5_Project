import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
import Character from '../components/Character'
import EditAccount from '../components/EditAccount'
import CharacterCreation from '../components/CharacterCreation'
import {initGame} from '../redux/adapters/heroStatusAdapters'
import {deleteAccount} from '../redux/adapters/currentUserAdapters'
import {modalToggle} from '../redux/adapters/utilityAdapters'
import { Button, Header, Image, Modal, Grid, Segment, Icon } from 'semantic-ui-react'
import xiaoLaJi from '../assets/active_resources/xiao_la_ji.gif'
import xiaoLaJi2 from '../assets/active_resources/xiaolaji.gif'
import heroPreview from '../assets/active_resources/heroPreview.gif'




class ProfilePage extends Component {

  state = {
    delete_accout: false,
    edit_account: false
  }

  componentDidMount(){
    if (localStorage.token === "undefined") {
      localStorage.clear()
      this.props.history.push("/")
    }
  }

  genCharacters = () => {
    return this.props.user.characters.map(character => <Character key={character.id} characterInfo={character} handleModalToogle={this.handleModalToogle} onSelect={this.onSelect}/>)
  }

  onSelect = (characterInfo) => {
    this.props.initGame(characterInfo)
    this.props.history.push("/game")
  }

  handleModal = (event) => {
    let bol = (event.target.value === "true")
    this.setState({[event.target.name]: bol})
  }

  handleModalToogle = (event) => {
    let bol = (event.currentTarget.value === "true")
    this.props.modalToggle({[event.currentTarget.name]: bol})
  }

  handleDelete = () => {
    this.props.deleteAccount(this.props.history)
  }

  render() {
    if (!this.props.user) {
      return(
        <div>
          <img src={xiaoLaJi2} alt="xiaoLaJi2"/>
          <p> Getting your Information </p>
        </div>
      )
    }
    return (
      <div className="ProfilePage">
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Header as='h2'>Account Information</Header>
                <Grid columns='equal'>
                  <Grid.Row stretched>
                    <Grid.Column>
                      <Segment>
                        <Image src={xiaoLaJi} size='medium' wrapped />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Header as='h3'>Username: {this.props.user.username}</Header>
                      </Segment>
                      <Segment>
                        <Header as='h3'>Display Name: {this.props.user.name}</Header>
                      </Segment>
                      <Segment>
                        <Header as='h3'>Character Owned: {this.props.user.characters.length}</Header>  
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Column width={16}>
                    <Segment>
                      <Modal dimmer="blurring" open={this.props.modalState.edit_account_modal} trigger={<Button name="edit_account_modal" value={true} onClick={this.handleModalToogle} color='green' size='small' >Edit Account</Button>} >
                        <Modal.Header>Edit Account</Modal.Header>
                        <Modal.Content>
                          <Grid columns={2} divided>
                            <Grid.Row stretched>
                              <Grid.Column>
                                <Segment>
                                  <Image src={xiaoLaJi} size='medium' wrapped />
                                </Segment>
                              </Grid.Column>
                              <EditAccount handleModalToogle={this.handleModalToogle}/>
                            </Grid.Row>
                          </Grid>
                        </Modal.Content>
                      </Modal>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <Segment>
                      <Modal open={this.props.modalState.delete_accout_modal} trigger={<Button name="delete_accout_modal" value={true} onClick={this.handleModalToogle} color='red' size="tiny">Delete Account</Button>} basic size='small'>
                        <Header icon='trash alternate' content='Delete Account?' />
                        <Modal.Content>
                          <p>
                            You will lose all the Characters if you delete this Account. Account will not be able to Recover after this deletion.
                          </p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button name="delete_accout_modal" value={false} onClick={this.handleModalToogle} color='green' inverted>
                            <Icon name='remove' /> Cancel
                          </Button>
                          <Button name="delete_accout_modal" value={false} onClick={this.handleDelete} color='red' inverted>
                            <Icon name='checkmark' /> Confirm
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>Characters</Header>
              <Segment>
                <div className="ui link cards">
                  {this.genCharacters()}
                </div>
              </Segment>
              <Segment>
                <Modal dimmer="blurring" open={this.props.modalState.create_character_modal} trigger={<Button name="create_character_modal" value={true} color='green' size='medium' onClick={this.handleModalToogle}>Create Character</Button>} closeOnDimmerClick={false} >
                  <Modal.Header>Character Creation</Modal.Header>
                  <Modal.Content>
                    <Grid columns={1}>
                      <Grid.Column>
                        <Image src={heroPreview} size='small' centered />
                      </Grid.Column>
                      <CharacterCreation handleModalToogle={this.handleModalToogle}/>
                    </Grid>
                  </Modal.Content>
                </Modal>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    modalState: state.utilityReducer
  }
}

const mapDispatchToProps = {
  initGame: initGame,
  deleteAccount: deleteAccount,
  modalToggle: modalToggle
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)));
