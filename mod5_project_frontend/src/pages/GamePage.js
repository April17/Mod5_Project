import React, { Component } from 'react'
import { connect } from "react-redux"
import Game from '../components/Game'
import Inventory from '../components/Inventory'
import Chat from '../components/Chat'
import MonsterHp from '../components/MonsterHp'
import PlayerLog from '../components/PlayerLog'
import HeroStatus from '../components/HeroStatus'
import { Grid, Segment, Tab, Form, Input, Button } from 'semantic-ui-react'
import  '../assets/style/GamePage.css'
// import PhaserReactAdapter from '../components/PhaserReactAdapter'

const panes = [
    { menuItem: 'Chat', render: () => <Tab.Pane className="frostglass" attached={false} ><Chat/></Tab.Pane> },
    { menuItem: 'PlayerLog', render: () => <Tab.Pane className="frostglass" attached={false} ><PlayerLog/></Tab.Pane> },
  ]


class GamePage extends Component {


  render() {
    return (
      <div>
        <Grid column={3} textAlign="center" id="monster-hp-bar">
          <Grid.Column width={10} textAlign="center">
            <Segment className="transparent">
              <MonsterHp/>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid className="GameUI" column={3} textAlign="center" verticalAlign="bottom">
          <Grid.Row stretched>
            <Grid.Column width={3} textAlign="center">
              <Segment className="transparent">
              </Segment>
            </Grid.Column>
            <Grid.Column width={10} textAlign="center" >
              <Segment className="Game-Component transparent">
                <Game routingProps={this.props}/>
              </Segment>
              <Segment className={this.props.uiState}>
                <HeroStatus />
              </Segment>
            </Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Segment className="transparent">
              </Segment>
              <Segment className={this.props.uiState}>
                <Inventory/>
              </Segment>
              <Segment className={this.props.uiState}>
                <Grid column={1} textAlign="center">
                  <Grid.Column width={16} >
                    <Tab menu={{ color: "grey", inverted: true, borderless: true, attached: false, tabular: false }} panes={panes} />
                  </Grid.Column>
                  <Grid.Column width={16} id="chatform">
                    <Form>
                      <Form.Field inline>
                        <Grid column={2}  >
                          <Grid.Column width={10} className="No-Space" textAlign="right">
                            <Segment className="No-Space">
                              <Input size='mini' placeholder='Message....' />
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={6} className="No-Space" textAlign="center">
                            <Segment className="No-Space">
                              <Button primary size='mini' >Send</Button>
                            </Segment>
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                </Grid>
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
    uiState: state.utilityReducer.ui_toggle
  }
}


export default connect(
    mapStateToProps,
    null
  )(GamePage);
