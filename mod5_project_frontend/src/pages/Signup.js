import React from 'react'
import { Button, Form, Grid, Header, Segment, Label } from 'semantic-ui-react'

class Signup extends React.Component{


  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
                 Sign Up
            </Header>
            <Form onSubmit={null}>
              <Segment raised>
                <Form.Field>
                  Dungeon Online
                </Form.Field>
                <Form.Field>
                  <input name="username" onChange={null} placeholder='Username' />
                </Form.Field>
                <Form.Field>
                  <input name="firstName" onChange={null} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <input name="lastName" onChange={null} placeholder='Last name' />
                </Form.Field>
                <Form.Field>
                  <input type="password" name="password" onChange={null} placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <input type="password" name="confirmPassword" onChange={null} placeholder='Confirm Password' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
      </Grid>
    )
  }


}

export default Signup
