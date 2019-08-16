import React, { Component } from 'react'
import Game from '../components/Game'
import Inventory from '../components/Inventory'
import Chat from '../components/Chat'
import MonsterHp from '../components/MonsterHp'
import PlayerLog from '../components/PlayerLog'
import HeroStatus from '../components/HeroStatus'
import { Grid, Segment, Tab } from 'semantic-ui-react'
import  '../assets/style/GamePage.css'
// import PhaserReactAdapter from '../components/PhaserReactAdapter'

const panes = [
    { menuItem: 'Chat', render: () => <Tab.Pane attached={false} ><Chat/></Tab.Pane> },
    { menuItem: 'PlayerLog', render: () => <Tab.Pane attached={false} ><PlayerLog/></Tab.Pane> },
  ]


class GamePage extends Component {





  render() {
    return (
      <div className="GamePage No-Space">
        <Grid column={3} textAlign="center" >
          <Grid.Row stretched>
            <Grid.Column width={3} textAlign="center">
              <Segment className="transparent">
              </Segment>
              <Segment className="transparent">
              </Segment>
            </Grid.Column>
            <Grid.Column width={10} textAlign="center">
              <Segment className="transparent">
                <MonsterHp/>
              </Segment>
              <Segment className="Game-Component transparent" >
                <Game routingProps={this.props}/>
              </Segment>
              <Segment >
                <HeroStatus />
              </Segment>
            </Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Segment className="transparent">
              </Segment>
              <Segment >
                <Inventory/>
              </Segment>
              <Segment >
                <Tab menu={{ borderless: true, attached: false, tabular: false }} panes={panes} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default GamePage;
