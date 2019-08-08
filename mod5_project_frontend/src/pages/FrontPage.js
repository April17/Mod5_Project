import React from 'react'
import { Header, Button, Divider, Grid, Segment } from 'semantic-ui-react'
import Login from '../components/Login'
// import Navbar from '../components/navbar'

class Frontpage extends React.Component {
  handleSignup = () => {
    this.props.history.push('/signup')
  }
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center' >Welcome to Dungeon Online</Header>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Login routingProps={this.props}/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Button onClick={this.handleSignup} content='Sign up' icon='signup' size='big' />
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    )
  }
}

export default Frontpage
