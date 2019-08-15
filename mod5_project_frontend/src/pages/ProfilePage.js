import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
import Character from '../components/Character'
import EditAccount from '../components/EditAccount'
import CharacterCreation from '../components/CharacterCreation'
import {initGame} from '../redux/adapters/heroStatusAdapters'
import { Button, Header, Image, Modal, Grid, Segment, Icon } from 'semantic-ui-react'
import xiaoLaJi from '../assets/active_resources/xiao_la_ji.gif'
import heroPreview from '../assets/active_resources/heroPreview.gif'




class ProfilePage extends Component {

  componentDidMount(){
    if (localStorage.token === "undefined") {
      localStorage.clear()
      this.props.history.push("/")
    }
  }

  genCharacters = () => {
    return this.props.user.characters.map(character => <Character key={character.id} characterInfo={character} onSelect={this.onSelect}/>)
  }

  onSelect = (characterInfo) => {
    this.props.initGame(characterInfo)
    this.props.history.push("/game")
  }



  render() {
    if (!this.props.user) {
      return(
        <p> Getting your Information </p>
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
                        Username: {this.props.user.username}
                      </Segment>
                      <Segment>
                        Display Name: {this.props.user.name}
                      </Segment>
                      <Segment>
                        Character Owned: {this.props.user.characters.length}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Column width={16}>
                    <Segment>
                      <Modal trigger={<Button color='green' size='small' >Edit Account</Button>} closeIcon>
                        <Modal.Header>Edit Account</Modal.Header>
                        <Modal.Content>
                          <Grid columns={2} divided>
                            <Grid.Row stretched>
                              <Grid.Column>
                                <Segment>
                                  <Image src={xiaoLaJi} size='medium' wrapped />
                                </Segment>
                              </Grid.Column>
                              <EditAccount />
                            </Grid.Row>
                          </Grid>
                        </Modal.Content>
                      </Modal>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <Segment>
                      <Modal className="delete_account_modal" trigger={<Button color='red' size="tiny">Delete Account</Button>} basic size='small'>
                        <Header icon='trash alternate' content='Delete Account?' />
                        <Modal.Content>
                          <p>
                            You will lose all the Characters if you delete this Account. Account will not be able to Recover after this deletion.
                          </p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color='green' inverted>
                            <Icon name='remove' /> Cancel
                          </Button>
                          <Button onClick={null} color='red' inverted>
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
                <Modal trigger={<Button color='green' size='medium' >Create Character</Button>} closeOnDimmerClick={false} closeIcon>
                  <Modal.Header>Character Creation</Modal.Header>
                  <Modal.Content>
                    <Grid columns={1}>
                      <Grid.Column>
                        <Image src={heroPreview} size='medium' centered />
                      </Grid.Column>
                      <CharacterCreation />
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
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  initGame: initGame
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)));
